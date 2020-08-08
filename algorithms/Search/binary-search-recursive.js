/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  分而治之：分而治之方法是把问题分解成相互独立的子问题，然后组合它们的答案

  二分搜索（折半搜索算法）：使用分而治之的方式实现二分搜索法
  步骤：
   分解：计算 mid 并搜索数组较小或较大的一半。
   解决：在较小或较大的一半中搜索值。
   合并：这步不需要，因为我们直接返回了索引值。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import {defaultCompare, DOES_NOT_EXIST, Compare} from "../../Util.js";

function binarySearchRecursive(arr, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2),
        element = arr[mid];

    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(arr, value, mid + 1, high, compareFn);
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(arr, value, low, mid - 1, compareFn);
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

export function binarySearchR(arr, value, compareFn = defaultCompare) {
  const { length } = arr,
      low = 0,
      high = length - 1;
  return binarySearchRecursive(arr, value, low, high, compareFn);
}

let arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
let t1 = window.performance.now();
console.log(binarySearchR(arr, 1995));
let t2 = window.performance.now();
console.log(`binarySearchR: ${t2 - t1}ms`);