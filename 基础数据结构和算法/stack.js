// 创建基于数组的栈
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() { // 查看栈顶元素
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
// 使用：
const stack = new Stack();
stack.push(1);
stack.push(10);
stack.size();
stack.isEmpty();


// 创建基于对象的栈
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    pop() {
        if(this.count === 0) return undefined; // 或isEmpty()
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    peek() {
        if(this.count === 0) return undefined;
        return this.items[this.count - 1]
    }
    toString() { // 打印栈的内容
        if(this.isEmpty()) return '';
        let objString = `${this.items[0]}`;
        for(let i = 0; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}


// 保护数据结构内部元素 即 实现私有属性的方法
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
}
// 所谓“保护”：只有暴露出来的方法才能修改内部结构
const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack)); // ["count", "items"]
console.log(Object.keys(stack)); // ["count", "items"]
// 以上getOwnPropertyNames和keys可以输出结果，说明count和items属性是公开的
// ES6创建类（class）是基于原型（非基于函数）的，这种方式不能创建私有属性/变量。

// 实现私有属性的方法：
// 方法一:约定：下划线命名来标记属性为私有属性(不能保护数据，仅仅是约定)
class Stack {
    constructor() {
        this._count = 0;
        this._items = {};
    }
}
// 方法二：Symbol 
// 不过这种方法也是假私有属性，因为ES6的Object.getOwnPropertySymbols可以
// 取到类里声明的所有Symbols属性
const _items = Symbol('stackItems');
class Stack {
    constructor() {
        this[_items] = []; // 正常的写this.items
    }
}
// 方法三：WeakMap:可以确保属性是私有的，但扩展该类时无法继承私有属性
const items = new WeekMap();
class Stack {
    constructor() {
        items.set(this, []); // 这里数组代表栈
    }
    push(element) {
        const s = items.get(this);
        s.push(element);
    }
    pop() {
        const s = items.get(this);
        const r = s.pop();
        return r;
    }
}


// 用栈解决问题
// 进制转化
function decimaToBinary(decNum) {
    const remStack = new Stack();
    let num = decNum;
    let rem;
    let binaryString = '';

    while(num > 0) {
        // Math.floor()返回小于或等于一个给定数字的最大整数 向下取整；Math.ceil向上取整
        rem = Math.floor(num % 2); 
        remStack.push(rem);
        num = Math.floor(num / 2);
    }
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
decimaToBinary(100); // "1100100"




// 十进制转任意进制
// 12%2=0,12/2=6; 6%2=0,6/2=3; 3%2=1,3/2~1; 1%2=1,1/2=0; 
function decimaToNHex(decNum, n) {
    let rem;
    let division = decNum;
    let result = '';
    let stack = new Stack();
    while(division > 0) {
        rem = Math.floor(decNum % n);
        stack.push(rem);
        division = Math.floor(division / n);
    }
    while(!stack.isEmpty()) {
        result += stack.pop().toString();
    }
    return result;
}