import {defaultEquals} from "../../Util.js";

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  /* 添加一个元素 */
  push(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      /* 有下一个引用 */
      while (current.next) {
        current = current.next;
      }
      /* 将 next 赋给新的引用，建立连接 */
      current.next = node;
    }
    this.count++;
    return true;
  }

  /* 根据索引移除指定位置元素 */
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      /* index为 0 的时候 */
      if (index === 0) {
        this.head = current.next;
      } else {
        /* 获取移除元素的前一项 */
        let pre = this.getElementAt(index-1);
        /* 移除项*/
        current = pre.next;
        /* 跳过current要移除的项,再连接下一个 */
        pre.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  /* 插入到指定位置 */
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        /* 获取插入元素上一项的位置 */
        let pre = this.getElementAt(index-1);
        node.next = pre.next;
        pre.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  /* 获取指定位置 */
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 1; i <= index; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  /* 输入查找项获取指定位置索引 */
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  /* 移除输入元素 */
  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  /* 获取元素数量 */
  size() {
    return this.count;
  }

  /* 是否为空 */
  isEmpty() {
    return this.size() === 0;
  }

  /* 清空 */
  clear() {
    this.count = 0;
    this.head = undefined;
  }

  /* 获取首个元素 */
  getHead() {
    return this.head;
  }

  /* 打印所有元素 */
  toString() {
    if (!this.head) return '';
    let eleString = `${this.head.element}`,
        current = this.head.next;
    for (let i = 1; i < this.count && current; i++) {
      eleString = `${eleString},${current.element}`;
      current = current.next;
    }
    return eleString;
  }
}
let list = new LinkedList();
list.push(1);
list.push(9);
list.push(8);
list.push(5);
list.insert(3, 1);
console.log(list.getElementAt(4));
console.log(list.removeAt(1));
console.log(list.push(11));
console.log(list.indexOf(8));
console.log(list.indexOf(5));
console.log(list.indexOf(11));
console.log(list.remove(8));
console.log(list.remove(9));
console.log(list.insert(0, 2));
console.log(list.insert(12, list.count));
console.log(list.insert({name: 'Jaye'}, 2));
console.log(list.size());
list.insert(18,4);
console.log(list.toString());

console.log(list);