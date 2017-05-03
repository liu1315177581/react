class LevelReq {
	// 过关条件类
	
	public reqElement:LevelRequireElement[];
	public constructor() {
		this.reqElement = [];
	}
	

	// 过关条件数量
	public getLevelReqNum():number{
		return this.reqElement.length;
	}

	// 设置过关条件
	public addElements(type:string,num:number){
		let element:LevelRequireElement = new LevelRequireElement();
		element.num = num;
		element.type = type;
		this.reqElement.push(element);
	}

	// 过关条件初始化
	public openChange(){
		this.reqElement = [];
	}

	// 修改过关条件
	public changeReqnum(type:string,num:number){
		// 获取过关条件数组
		let len:number = this.getLevelReqNum();
		for(let i = 0; i<len; i++){
			if(this.reqElement[i].type === type){
				this.reqElement[i].num -= num;
				return;
			}
		}
	}

	// 判断是否过关
	public isClear():boolean{
		let len:number = this.getLevelReqNum();
		for(let i = 0; i<len; i++){
			if(this.reqElement[i].num > 0){
				return false
			}
		}
		return true;
	}

}