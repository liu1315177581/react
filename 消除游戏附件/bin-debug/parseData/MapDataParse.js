var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapDataParse = (function () {
    function MapDataParse() {
    }
    // 地图配置信息转换类，不可编译的地图
    MapDataParse.init = function (val) {
        // 循环数组
        var len = val.length;
        // 设置没有地图的位置的数量
        GameData.unmapnum = len;
        var index = 0;
        // 遍历
        for (var i = 0; i < len; i++) {
            index = val[i];
            // 根据传进来的一维数组下标，来计算出二维坐标的位置
            GameData.mapData[Math.floor(index / GameData.MaxRow)][index % GameData.MaxColumn];
        }
        // 地图中可使用的地图的数 = 地图总数-不可使用的数
        GameData.currentElementNum = GameData.MaxColumn * GameData.MaxRow - len;
    };
    return MapDataParse;
}());
__reflect(MapDataParse.prototype, "MapDataParse");
//# sourceMappingURL=MapDataParse.js.map