export class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    let res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return res;
  }

  peek() {
    if (this.isEmpty()) return;
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) return;
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount+1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(9);
queue.enqueue(9);
queue.enqueue(5);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.peek());
console.log(queue.toString());
// queue.clear();
console.log(queue.isEmpty());
console.log(queue);