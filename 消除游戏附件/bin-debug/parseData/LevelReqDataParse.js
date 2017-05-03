var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelReqDataParse = (function () {
    function LevelReqDataParse() {
    }
    LevelReqDataParse.init = function (val) {
        // 玩家剩余步数
        GameData.stepNum = val.step;
        // 过关条件步数
        GameData.levelStepNum = val.step;
        // 关卡出现的元素 
        GameData.elementTypes = val.element;
        // 关卡背景
        GameData.levelBackgroundImageName = val.levelbgimg;
        // 过关条件解析
        LevelReqDataParse.parseLevelReq(val.levelreq);
    };
    // 过关条件数据解析
    LevelReqDataParse.parseLevelReq = function (val) {
        // 过关条件初始化为空
        GameData.levelReq.openChange();
        var len = val.length;
        for (var i = 0; i < len; i++) {
            GameData.levelReq.addElements(val[i].type, val[i].num);
        }
    };
    return LevelReqDataParse;
}());
__reflect(LevelReqDataParse.prototype, "LevelReqDataParse");
//# sourceMappingURL=LevelReqDataParse.js.map