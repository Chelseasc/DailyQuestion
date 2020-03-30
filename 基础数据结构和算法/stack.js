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