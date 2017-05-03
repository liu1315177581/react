var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    // 游戏元素数据定义
    GameData.initData = function () {
        // 地图二维数组初始化
        GameData.mapData = [];
        for (var x = 0; x < GameData.MaxColumn; x++) {
            var arr = [];
            GameData.mapData.push(arr);
            for (var y = 0; y < GameData.MaxRow; y++) {
                GameData.mapData[x].push(-2); //表示没有元素
            }
        }
        // 过关条件初始化类
        GameData.levelReq = new LevelReq();
        // 设置元素对象池
        GameData.elements = [];
        // 游戏中未使用的元素数组初始化
        GameData.unusedElements = [];
        var len = GameData.MaxRow * GameData.MaxColumn;
        for (var i = 0; i < len; i++) {
            var element = new GameElement();
            element.id = i;
            GameData.elements.push(element);
            GameData.unusedElements.push(i);
        }
        // 游戏场景宽度和高度赋值
        GameData.stageW = egret.MainContext.instance.stage.stageWidth;
        GameData.stageH = egret.MainContext.instance.stage.stageHeight;
    };
    return GameData;
}());
// 游戏数据类初始化
GameData.unmapnum = 0; //空白地图数
GameData.stepNum = 0; //玩家剩余步数
GameData.levelStepNum = 0; //当前关卡步数
GameData.levelBackgroundImageName = ''; //当前关卡的背景图
GameData.MaxRow = 8; //最大行
GameData.MaxColumn = 8; //最大列
GameData.currentElementNum = 0; //当前关卡可用元素的数量
// 舞台宽高
GameData.stageW = 0;
GameData.stageH = 0;
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map