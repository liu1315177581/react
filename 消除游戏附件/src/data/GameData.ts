class GameData {
	// 游戏数据类初始化


	
	public static unmapnum:number = 0; //空白地图数
	public static mapData:any; //游戏地图二维数组 -1表示地图不能使用 -2表示地图没有元素
	public static stepNum:number = 0; //玩家剩余步数
	public static levelStepNum:number = 0; //当前关卡步数
	public static elementTypes:number[]; //当前关卡出现的元素类型
	public static unusedElements:number[]; //游戏中未使用的元素
	public static levelBackgroundImageName = ''; //当前关卡的背景图

	public static MaxRow:number = 8; //最大行
	public static MaxColumn:number = 8; //最大列
	public static currentElementNum:number = 0; //当前关卡可用元素的数量
	public static levelReq:LevelReq; //当前关卡过关条件
	public static elements:GameElement[]; //元素对象池

	// 舞台宽高
	public static stageW:number = 0;
	public static stageH:number = 0;


	// 游戏元素数据定义
	public static initData():void{

		// 地图二维数组初始化
		GameData.mapData = [];
		for(let x = 0; x<GameData.MaxColumn; x++){
			let arr = [];
			GameData.mapData.push(arr);
			for(let y = 0; y<GameData.MaxRow; y++){
				GameData.mapData[x].push(-2);  //表示没有元素
			}
		}

		// 过关条件初始化类
		GameData.levelReq = new LevelReq();


		// 设置元素对象池
		GameData.elements = [];
		// 游戏中未使用的元素数组初始化
		GameData.unusedElements = [];
		let len:number = GameData.MaxRow *  GameData.MaxColumn;
		for(let i = 0; i<len; i++){
			let element = new GameElement();
			element.id = i;
			GameData.elements.push(element);
			GameData.unusedElements.push(i);
		}

		// 游戏场景宽度和高度赋值
		GameData.stageW = egret.MainContext.instance.stage.stageWidth;
		GameData.stageH = egret.MainContext.instance.stage.stageHeight;
	}
}