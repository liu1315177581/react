var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelReq = (function () {
    function LevelReq() {
        this.reqElement = [];
    }
    // 过关条件数量
    LevelReq.prototype.getLevelReqNum = function () {
        return this.reqElement.length;
    };
    // 设置过关条件
    LevelReq.prototype.addElements = function (type, num) {
        var element = new LevelRequireElement();
        element.num = num;
        element.type = type;
        this.reqElement.push(element);
    };
    // 过关条件初始化
    LevelReq.prototype.openChange = function () {
        this.reqElement = [];
    };
    // 修改过关条件
    LevelReq.prototype.changeReqnum = function (type, num) {
        // 获取过关条件数组
        var len = this.getLevelReqNum();
        for (var i = 0; i < len; i++) {
            if (this.reqElement[i].type === type) {
                this.reqElement[i].num -= num;
                return;
            }
        }
    };
    // 判断是否过关
    LevelReq.prototype.isClear = function () {
        var len = this.getLevelReqNum();
        for (var i = 0; i < len; i++) {
            if (this.reqElement[i].num > 0) {
                return false;
            }
        }
        return true;
    };
    return LevelReq;
}());
__reflect(LevelReq.prototype, "LevelReq");
//# sourceMappingURL=LevelReq.js.map