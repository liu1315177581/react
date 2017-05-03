var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
// 游戏主类
var GameLogic = (function () {
    function GameLogic(gameStage) {
        this._gameStage = gameStage;
        this.init();
    }
    GameLogic.prototype.init = function () {
        // 游戏数据类型定义
        GameData.initData();
        // 加载游戏配置信息
        var levelData = RES.getRes('test_json');
        // 根据配置信息，初始化可用地图数据
        MapDataParse.init(levelData.map);
        // 根据配置信息，初始化游戏基本数据
        // 玩家剩余步数，关卡步数，关卡出现元素，关卡背景，过关条件
        LevelReqDataParse.init(levelData);
        console.log(GameData.mapData);
    };
    return GameLogic;
}());
__reflect(GameLogic.prototype, "GameLogic");
//# sourceMappingURL=GameLogic.js.map