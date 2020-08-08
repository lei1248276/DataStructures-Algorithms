import {Node} from "../../models/Node.js";
import {Compare,defaultCompare} from "../../Util.js";

export class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }
  /* ························插入的方法···························· */

  insert(key) {
    // 没有节点时
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
    /* 插入节点的内部方法（树结构遵循“左侧小”、“右侧大”的规则）*/
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null){
        node.right = new Node(key);
    } else {
        this.insertNode(node.right, key);
    }
  }

  /* ························遍历的方法···························· */

    /* 中序遍历 */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
    /* 中序遍历内部方法（就是以从最小到最大的顺序访问所有节点） */
  inOrderTraverseNode(node, callback) {
    // 节点不为空时遍历，为空就停止递归
    if (node != null) {
      // 先从左侧开始递归遍历
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      // 在从右侧开始递归遍历
      this.inOrderTraverseNode(node.right, callback);
    }
  }

    /* 先序遍历 */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
    /* 先序遍历内部方法（先序遍历是以优先于后代节点的顺序访问每个节点的。其中一种应用是打印一个结构化的文档）*/
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

    /* 后序遍历 */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
    /* 后序遍历内部方法（后序遍历则是先访问节点的后代节点，再访问节点本身。其中一种应用是计算一个目录及其子目录中所有文件所占空间的大小。）*/
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  /* ························搜索树中的值···························· */

    /* 最小值 */
  min() {
    return this.minNode(this.root);
  }
    /* 获取最小值的内部方法 */
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

    /* 最大值 */
  max() {
    return this.maxNode(this.root);
  }
    /* 获取最大值的内部方法 */
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current.key;
  }

    /* 搜索指定的值 */
  search(key) {
    return this.searchNode(this.root, key);
  }
    /* 搜索指定值的内部方法 */
  searchNode(node, key) {
    // > 和 < 最后都会走到这一步（因为都是递归操作，导致最后没数可找）
    if (node == null) {
      return false;
    }
    // 小于的时候递归
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    }
    // 大于的时候递归
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }
    // 只有等于的时候才会到这一步（因为不满足任何条件默认返回true）
    return true;
  }

  /* ························移除节点···························· */

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {
      return null;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      console.log(node);
      return node;
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // 相等时候的三种情况
    // case1
    if (node.left == null && node.right == null) {
      node = null;
      return node;
    }
    // case2
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }
    // case3
    const aux = this.minNode(node.right);
    console.log(node.right);
    console.log(aux);
    node.key = aux.key;
    console.log(node);
    console.log(node.right);
    node.right = this.removeNode(node.right, aux.key);
    console.log(node);
    return node;
  }
}

let bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(9);
bst.insert(16);
bst.insert(17);
bst.insert(15);
bst.insert(5);
bst.insert(9);
bst.insert(19);
bst.insert(22);
bst.insert(25);
let arr1 = [];
bst.inOrderTraverse((value) => arr1.push(value));
console.log(arr1);
let arr2 = []
bst.preOrderTraverse((value) => arr2.push(value));
console.log(arr2);
let arr3 = [];
bst.postOrderTraverse(value => arr3.push(value));
console.log(arr3);
console.log(bst.min());
console.log(bst.max());
console.log(bst.search(15));
console.log(bst.search(10));
// bst.remove(17);
console.log(bst);
bst.remove(9);
// bst.insert(10);
let arr4 = [];
bst.inOrderTraverse(value => arr4.push(value));
console.log(arr4);
console.log(bst);

/*                              15
*                          /          \
*                       10             16
*                    /     \        /     \
*                   9             15       17
*               /     \         /   \    /    \
*              5        9                      19
*           /    \    /   \                  /    \
*                                                  22
*                                                 /  \
*                                                     25
*                                                    /   \
* */