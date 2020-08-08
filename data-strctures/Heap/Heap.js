import {defaultCompare,Compare,swap,reverseCompare} from "../../Util.js";

/* 1. 二叉树的数组表示
二叉树有两种表示方式。第一种是使用一个动态的表示方式，也就是指针（用节点表示），
在上一章使用过。第二种是使用一个数组，通过索引值检索父节点、左侧和右侧子节点的值。下
图展示了两种不同的表示方式。*/

/* 要访问使用普通数组的二叉树节点，我们可以用下面的方式操作 index。
对于给定位置 index 的节点：
 它的左侧子节点的位置是 2 * index + 1（如果位置可用）；
 它的右侧子节点的位置是 2 * index + 2（如果位置可用）；
 它的父节点位置是 index / 2（如果位置可用）。*/

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  /* 获取该节点左侧子节点index */
  getLeftIndex(index) {
    return 2 * index + 1;
  }

  /* 获取该节点右侧子节点index */
  getRightIndex(index) {
    return 2 * index + 2;
  }

  /* 获取该节点的父节点index */
  getParentIndex(index) {
    if (index === 0) return;
    return Math.floor((index - 1) / 2);
  }

  /* 插入一个新的值 */
  insert(value) {
    if (value != null) {
      // 在最后添加
      this.heap.push(value);
      // 再调用上移函数对比大小使结构正常
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  /* 上移操作（将这个值和它的父节点进行交换，直到父节点小于这个插入的值）*/
  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.compareFn(this.heap[parent],this.heap[index]) === Compare.BIGGER_THAN) {
       // 交换值
      swap(this.heap, parent, index);
      // 依次更新每个节点的父节点
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  /* 移除第一个元素（最大值/最小值） */
  extract() {
    if (this.isEmpty()) return;
    if (this.size() === 1) return this.heap.shift;
    const removed = this.heap[0];
    // 移除之后将最后一个元素移动到根部位
    this.heap[0] = this.heap.pop();
    // 调用下移函数，将交换元素直到堆的结构正常
    this.siftDown(0);
    return removed;
  }

  /* 下移操作（） */
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index),
        right = this.getRightIndex(index),
        size = this.size();
    if (left < size && this.compareFn(this.heap[element],this.heap[left]) === Compare.BIGGER_THAN) {
      element = left;
    }
    if (right < size && this.compareFn(this.heap[element],this.heap[right]) === Compare.BIGGER_THAN) {
      element = right;
    }
    if (element !== index) {
      swap(this.heap, element, index);
      this.siftDown(element);
    }
  }

  /* 返回最小值且不移除 */
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
}

let minH = new MinHeap();
minH.insert(2);
minH.insert(3);
minH.insert(4);
minH.insert(5);
minH.insert(8);
minH.insert(9);
minH.insert(6);
minH.insert(7);
minH.insert(15);
minH.insert(1);
minH.insert(11);
console.log(minH.findMinimum());
console.log(minH.size());
console.log(minH.extract());
console.log(minH.heap);


export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}

let maxH = new MaxHeap();
maxH.insert(2);
maxH.insert(3);
maxH.insert(4);
maxH.insert(5);
maxH.insert(8);
maxH.insert(9);
maxH.insert(6);
maxH.insert(7);
maxH.insert(15);
maxH.insert(1);
maxH.insert(11);
console.log(maxH.size());
console.log(maxH.findMinimum());
console.log(maxH.extract());
console.log(maxH.heap);
console.log(maxH);

function rev(fn) {
  return (aa, bb) => fn(bb, aa);
}
let com = rev(function (a, b) {
  return a < b ? 1 : 2;
})
console.log(com(1, 2));

function te() {
  console.log('......');
}
let p = Promise.resolve();
console.log(p);
console.log(p.then(te));

let str = 'split';
console.log(''[str](''));

import {heapSort} from "../../algorithms/Sort/heap-sort.js";

console.log(heapSort(maxH.heap));
console.log(heapSort(maxH.heap, reverseCompare(defaultCompare)));
console.log(heapSort(minH.heap));
console.log(heapSort(minH.heap, reverseCompare(defaultCompare)));

