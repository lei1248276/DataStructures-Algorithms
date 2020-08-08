import {DoublyLinkedList} from "../Doubly-Linked-List/Doubly-Linked-List.js";

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) return;
    return this.items.removeAt(this.items.size()-1);
  }
  peek() {
    if (this.isEmpty()) return;
    return this.items.getElementAt(this.size()-1);
  }
  isEmpty() {
    return this.items.isEmpty();
  }
  size() {
    return this.items.size();
  }
  clear() {
    this.items.clear();
  }
  toString() {
    return this.items.toString();
  }
}

let stackList = new StackLinkedList();
stackList.push(1);
stackList.push(9);
console.log(stackList.pop());
// stackList.clear();
stackList.push(8);
stackList.push(5);
console.log(stackList.peek());
console.log(stackList.toString());
console.log(stackList);