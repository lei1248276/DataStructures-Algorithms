import {LinkedList,Node} from "../Linked-List.js";
import {defaultEquals} from "../../../Util.js";

class CircularLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.getElementAt(this.count-1);
      current.next = node;
    }
    node.next = this.head;
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          /* 循环引用 */
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.count-1);
          this.head = node;
          /* 第一个元素跟最后一个连接 */
          current.next = this.head;
        }
      } else {
        /* 获取上一项 */
        let prev = this.getElementAt(index-1);
        node.next = prev.next;
        prev.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.count-1);
          this.head = this.head.next;
          current.next = this.head;
          /* 保存移除的项，作为返回值 */
          current = removed;
        }
      } else {
        /* 获取前一项 */
        let prev = this.getElementAt(index-1);
        current = prev.next;
        prev.next = current.next;
      }
      this.count--;
      return current.element
    }
    return undefined;
  }
}

let cirList = new CircularLinkedList();
cirList.push(1);
cirList.push(9);
console.log(cirList.insert(3, 0));
console.log(cirList.insert(4, 2));
console.log(cirList.insert(5, 3));
console.log(cirList.removeAt(2));
console.log(cirList.toString());
console.log(cirList);