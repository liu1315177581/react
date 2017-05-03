class LevelReqDataParse {
	public static init(val:any){
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

		// 关卡出现的元素类型
		LevelReqDataParse.parseLevelElementTypes(val.element);
	}


	// 过关条件数据解析
	public static parseLevelReq(val:any){
		// 过关条件初始化为空
		GameData.levelReq.openChange();

		let len = val.length;
		for(let i = 0; i<len; i++){
			GameData.levelReq.addElements(val[i].type,val[i].num);
		}
	}

	// 元素类型数据解析
	public static parseLevelElementTypes(val):void{
		GameData.elementTypes = val;
	}
}