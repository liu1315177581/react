// TypeScript file
// 游戏主类
class GameLogic{
    // 主容器
    private _gameStage:egret.DisplayObjectContainer;
    constructor(gameStage:egret.DisplayObjectContainer){
        this._gameStage = gameStage;
        this.init();
    }
    private init(){
        // 游戏数据类型定义
        GameData.initData();

        // 加载游戏配置信息
        let levelData = RES.getRes('test_json');

        // 根据配置信息，初始化可用地图数据
        MapDataParse.init(levelData.map);
        
        // 根据配置信息，初始化游戏基本数据
        // 玩家剩余步数，关卡步数，关卡出现元素，关卡背景，过关条件,关卡出现元素类型数据解析
        LevelReqDataParse.init(levelData);

        
       

    }
}
