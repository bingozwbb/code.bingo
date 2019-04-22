//不用每次都去硬盘查找, 在内存中缓存
var LRUCache = function(capacity){
    this.capacity = capacity;
    this.obj = {}; //key
    this.arr = [];
}
LRUCache.prototype.get = function(key){
    var val = this.obj[key];// 正值 容量不大的内存提供服务于最多的进程
    // 有 返回值
    // 设置为最近使用
    // 无 -1
    if(val > 0){
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
    }else{
        return -1;
    }
}
LRUCache.prototype.set = function(key,value){
    // 如果有key， 返回
    // 没有话， 有两种可能 
    
    // 存进去 arr
    if(this.obj[key]){
        this.obj[key] = value;//更新
        // 最近使用 数组的[0]
        // ? 之前的删除
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
    }// 没有
    if(this.capacity === this.arr.length){
         // 如果内存满了 arr.pop()
         var k = this.arr.pop();
        //  最近最少使用
        this.obj[k] = undefined;
    }
    this.obj[key] = value;
    this.arr.unshift(key);

}