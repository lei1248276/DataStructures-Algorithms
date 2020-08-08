export class Deque {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestcount = 0;
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if(this.lowestcount > 0) {
      this.lowestcount--;
      this.items[this.lowestcount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i-1];
      }
      this.count++;
      this.lowestcount = 0;
      this.items[0] = element;
    }
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    if (this.isEmpty()) return;
    let res = this.items[this.lowestcount];
    delete this.items[this.lowestcount];
    this.lowestcount++;
    return res;
  }
  removeBack() {
    if (this.isEmpty()) return;
    this.count--;
    let res = this.items[this.count];
    delete this.items[this.count];
    return res;
  }
  peekFront() {
    if (this.isEmpty()) return;
    return this.items[this.lowestcount];
  }
  peekBack() {
    if (this.isEmpty()) return;
    return this.items[this.count-1];
  }
  isEmpty() {
    return this.count - this.lowestcount === 0;
  }
  size() {
    return this.count - this.lowestcount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestcount = 0;
  }
  toString() {
    if (this.isEmpty()) return;
    let objString = `${this.items[this.lowestcount]}`;
    for (let i = this.lowestcount+1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
let deque = new Deque();
deque.addFront(1);
deque.addBack(2);
deque.addFront(3);
console.log(deque.removeFront());
console.log(deque.size());
console.log(deque.toString());
console.log(deque.peekFront());
console.log(deque.peekBack());
deque.addFront(5);
console.log(deque.removeFront());
console.log(deque.removeBack());
console.log(deque.removeBack());
console.log(deque.size());
console.log(deque.isEmpty());
console.log(deque.removeFront());
deque.addFront(1);
console.log(deque.toString());
console.log(deque.size());
deque.addFront(2);
deque.addBack(3);
deque.addBack(4);
deque.removeBack();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.removeBack();
console.log(deque);
