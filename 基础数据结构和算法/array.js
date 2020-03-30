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

// 在任意位置添加或删除元素
arr.splice();
// arr.splice(开始索引, 删除个数, 要添加的值, 要添加的值, 要添加的值...);

// 打印二维数组
let matrix = [];
matrix[0] = [11,12,13,14,15,16];
matrix[1] = [21,22,23,24,25,26];
matrix[2] = [31,32,33,34,35,36];
// 方法一：
console.table(matrix);
// 方法二：
function printMatrix(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
}
printMatrix(matrix);

// 打印多维数组
for(let i = 0; i < matrixnnn.length; i++) {
    for(let j = 0; j < matrixnnn[i].length; j++) {
        for(let k = 0; k < matrixnnn[i][j].length; k++) {
            console.log(matrixnnn[i][j][k]);
        }
    }
}


// 数组合并
const a = [1];
const b = 10;
const c = [1,2,3,4];
let arr = c.concat(a,b); // [1, 2, 3, 4, 1, 10]

// 迭代器函数
// 1.every() 迭代数组中每个元素直到返回false
const isEven = x => x % 2 === 0;
let arr = [1,2,3,4,5,6,7,8,9,10];
arr.every(isEven); // 第一个数就返回false，结束迭代

// 2.some() 与every()相反，迭代每个元素直到返回true
arr.some(isEven) // arr[0]返回false，继续迭代，arr[1]返回true，迭代结束

// 3.forEach() 可以迭代整个数组，与使用for循环结果相同
arr.forEach(x => console.log(x % 2 === 0));

// 4.map()和filter() 会返回新数组
// map()返回传入map方法的isEven函数的运行结果运行结果运行结果
arr.map(isEven); // [true, false, true, false, true, false, true, false, true]
// filter()返回能使函数返回true的元素元素元素
arr.filter(isEven); // [2, 4, 6, 8, 10]

// 5.reduce() 接收一个函数(函数的参数：previousValue,currentValue, index, array)
// 为参数，这个函数返回一个将被叠加到累加器的值.reduce()停止后返回这个累加器
arr.reduce((prev, curr) => prev + curr);


// @@iterator对象
let numbers = [1,2,3,4,5];
let ite = numbers[Symbol.iterator]();
ite.next() // {value: 1, done: false}
ite.next() // {value: 2, done: false}
ite.next() // {value: 3, done: false}
ite.next() // {value: 4, done: false}
ite.next() // {value: 5, done: false}
ite.next() // {value: undefined, done: true}

// entries() 返回包含键值对的@@iterator
let numbers = [6,7,8,9,10];
let aEn = numbers.entries(); // 得到键值对的迭代器
aEn.next() // {value: [0, 6], done: false}
aEn.next() // {value: [1, 7], done: false}
aEn.next() // {value: [2, 8], done: false}
// 其中  value: [索引，索引对应的值]
// 或者直接for of , 就不用调用next()了:
aEn = numbers.entries();
for(const i of aEn) {
    console.log(i); // [0, 6],[1, 7],[2, 8]......
}

// keys() 返回索引；values()返回值

// Array.from() 根据已有的数组创建新数组
let numbers = [6,7,8,9,10];
// 复制：
let num2 = Array.from(numbers); // [6,7,8,9,10]
// 迭代：
let evens = Array.from(numbers, x => (x % 2 === 0)); // [true, false, true, false, true]

// Array.of() 根据传入的参数 创建新数组/复制数组
// 创建：
let arr1 = Array.of(1,2,3); // 相当于let arr1 = [1,2,3]
// 复制：
let arr2 = Array.of(...arr1); // 和Array.from()一样。[1,2,3]

// fill()  用静态值填充数组
let arr = Array.of(1,2,3,4); // [1,2,3,4]
arr.fill(0); // [0,0,0,0]
arr.fill(2,1); // fill(填充值，开始索引) [0,0,2,2]
arr.fill(1,1,3); // fill(填充值，开始索引，结束索引) [0,1,1,1]
// 常见用途：
let arr = Array(6).fill(0);  // [0,0,0,0,0,0]


// 排序元素
// reverse() 反序输出数组
// sort() 根据字符串排序
let arr = [15,14,13,11,10,9,5,3,1];
arr.sort(); // [1,10,11,13,14,15,3,5,9]
// 优化：
function compare(a, b) {
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    return 0;
}
arr.sort(compare); // 重点

// 对对象类型的数组排序
const friends = [
    {name: 'sc1', age: 18},
    {name: 'sc2', age: 19},
    {name: 'sc3', age: 20},
];
function comparePerson(a, b) { // 根据年龄排
    if(a.age > b.age) {
        return -1;
    }
    if(a.age < b.age) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson));


