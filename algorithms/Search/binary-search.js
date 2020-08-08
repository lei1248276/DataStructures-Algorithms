import {defaultCompare, Compare, DOES_NOT_EXIST} from "../../Util.js";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  二分搜索（折半搜索算法）：使用迭代的方式实现二分搜索法
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function binarySearch(arr, value, compareFn = defaultCompare) {
  // const sortedArray = quickSort(arr);
  let low = 0,
      high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2),
        element = arr[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

let arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
let t1 = window.performance.now();
console.log(binarySearch(arr, 1995));
let t2 = window.performance.now();
console.log(`binarySearch: ${t2 - t1}ms`);