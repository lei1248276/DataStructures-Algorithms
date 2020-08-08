import {LinkedList, Node} from "../Linked-List.js";
import {defaultEquals} from "../../../Util.js";

export class DoublyNode extends Node{
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

console.log(new DoublyNode(1));

export class DoublyLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element) {
    const node = new DoublyNode(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(element, index){
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
        /* 插入到最后一项时 */
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        let previous = this.getElementAt(index-1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      /* 1.移除第一项时 */
      if (index === 0) {
        this.head = current.next;
        /* 1.1.移除第一项时,如果只有一项 */
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
          console.log(this.head);
        }
        /* 2.移除最后一项时 */
      } else if (index === this.count-1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
        /* 3.其他情况 */
      } else {
        current = this.getElementAt(index);
        let previous = current.prev;
        /* 跳过要移除的项 */
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }
}

let douList = new DoublyLinkedList();
douList.push(1);
douList.push(9);
douList.push(8);
console.log(douList.insert(2, 3));
console.log(douList.removeAt(0));
douList.push(5);
douList.push(11);
console.log(douList.insert(15, 1));
console.log(douList.indexOf(15));
console.log(douList.indexOf(5));
console.log(douList.removeAt(5));
console.log(douList.remove(15));
console.log(douList.toString());
console.log(douList.getHead());
console.log(douList.getTail());
console.log(douList);


