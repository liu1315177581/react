class MapDataParse {
	// 地图配置信息转换类，不可编译的地图
	public static init(val:number[]):void{
		// 循环数组
		let len:number = val.length;
		// 设置没有地图的位置的数量
		GameData.unmapnum = len;
		let index:number = 0;
		// 遍历
		for(let i = 0; i<len; i++){
			
			index = val[i];
			// 根据传进来的一维数组下标，来计算出二维坐标的位置
			GameData.mapData[Math.floor(index/GameData.MaxRow)][index%GameData.MaxColumn];
		}

		// 地图中可使用的地图的数 = 地图总数-不可使用的数
		GameData.currentElementNum = GameData.MaxColumn*GameData.MaxRow - len;

	}
}