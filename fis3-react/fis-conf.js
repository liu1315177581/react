/**
 * @file fis-conf.js
 * @email 99874405@qq.com
 */
'use strict';
(function (fis) {
    // 按需加载
    fis.set('project.files', ['*.html', '/mock/**']);


    // 采用 node_modules 依赖
    fis.hook('node_modules').unhook('components');


    // 采用 commonjs 模块化方案
    fis.hook('commonjs', {
        extList: ['.js', '.es6', '.jsx'],
        baseUrl: '/src/'
    });


    // 压缩 css
    fis.match('*.css', {
        optimizer: fis.plugin('clean-css')
    });


    // 压缩 png
    fis.match('*.png', {
        optimizer: fis.plugin('png-compressor')
    });


    // 压缩 html
    fis.match('*.html', {
        optimizer: fis.plugin('htmlminify')
    });


    // 压缩 html行内js, mod.js
    fis.match('{*.html:js,/static/lib/mod.js}', {
        optimizer: fis.plugin('uglify-js')
    });


    // 开启模块化
    fis.match('/{src,node_modules}/**.{js,es6,jsx}', {
        isMod: true
    });


    // 开启 babel
    fis.match('/src/**.{es6,jsx}', {
        rExt: 'js',
        parser: fis.plugin('babel-5.x', {
            optional: ['es7.decorators', 'es7.classProperties'],
            sourceMaps: true
        }),
        preprocessor: [fis.plugin('js-require-css'), fis.plugin('js-require-file')]
    });


    // 合并 node_modules 依赖
    fis.match('/node_modules/**.js', {
        optimizer: fis.plugin('uglify-js'),
        packTo: '/pkg/third.js'
    });


    // 因为是纯前端项目，依赖不能自动被加载进来，所以这里需要借助一个 loader 来完成
    fis.match('::package', {
        postpackager: fis.plugin('loader', {
            resourcemapWhitespace: 0,
            useInlineMap: true
        })
    });


    // 上线模式
    fis.media('production')
    .match('!(*.html)', { useHash: true })
    .match('/(mock/**)', { release: false })
    .match('/(static/**.css)', { packTo: '/pkg/all.css' })
    .match('/{static,src,node_modules}/**.{js,es6,jsx}', { packTo: '/pkg/all.js', moduleId: function () { return fis.util.md5(arguments[1], 20); }, optimizer: fis.plugin('uglify-js') })
}(fis));