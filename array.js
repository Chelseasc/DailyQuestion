// 【数组方法】
// 添加元素
var arr = [1,2,3];

// 1.在末尾添加
arr.push(4); // 返回数组长度  arr:[1,2,3,4]
arr[arr.length] = [5]; // arr:[1,2,3,4,5]

// 2.在开头添加
arr.unshift(6); // 返回数组长度  arr:[6, 1, 2, 3]
Array.prototype.insertFirst = function(val) {
    for(let i = this.length; i > 0; i--) {
        this[i] = this[i-1];
    }
    this[0] = val;
}
arr.insertFirst(99); // arr:[99, 6, 1, 2, 3]

// 删除元素
// 1.在末尾删除
arr.pop(); // 返回弹出项的值
// 2.在开头删除
arr.shift(); // 返回删除项的值
Array.prototype.delFirst = function() {
    for(let i = 0; i < this.length-1; i++) {
        this[i] = this[i+1];
    }
}
arr.delFirst(); // [2,3,undefined] 不好


Array.prototype.delUndefined = function(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== undefined) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
Array.prototype.delFirstWell = function() {
    for(let i = 0; i < this.length-1; i++) {
        this[i] = this[i+1];
    }
    return this.delUndefined(this);
}
arr = arr.delFirstWell();