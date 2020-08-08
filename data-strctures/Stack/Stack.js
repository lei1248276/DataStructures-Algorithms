/*  数组版 栈  */
export class Stack_Arr {
  constructor() {
    this.items = [];
  }
  push(...element) {
    this.items.push(...element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length-1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
}

let stack = new Stack_Arr();
stack.push(1,9,9,5,0,5,0,2);
console.log(stack.peek());
console.log(stack.isEmpty());
// stack.clear();
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.size());


/*  对象版 栈  */
let _items = Symbol('stackItems');
export class Stack_Obj {
  constructor() {
    this.count = 0;
    this[_items] = {};
  }
  push(element) {
    this[_items][this.count] = element;
    this.count++;
  }
  pop() {
    if (this.count === 0) return;
    this.count--;
    let res = this[_items][this.count];
    delete this[_items][this.count];
    return res;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  peek() {
    if (this.isEmpty()) return;
    return this[_items][this.count-1]
  }
  clear() {
    this[_items] = {};
    this.count = 0;
  }
  toString() {
    if (this.isEmpty()) return '';
    let objString = `${this[_items][0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this[_items][i]}`;
    }
    return objString;
  }
}
let stack2 = new Stack_Obj();
stack2.push(1);
stack2.push(9);
console.log(stack2.size());
console.log(stack2.pop());
// stack2.clear();
console.log(stack2.pop());
console.log(stack2.isEmpty());
stack2.push(1995);
console.log(stack2.size());
stack2.push(0);
stack2.push(5);
stack2.push(0);
stack2.push(2);
console.log(stack2.size());
// stack2.clear();
console.log(stack2.size());
console.log(stack2[_items]);
console.log(stack2);
console.log(stack2.toString());

console.log((100345).toString(2));
console.log(Number.parseInt((100345).toString(2),2));