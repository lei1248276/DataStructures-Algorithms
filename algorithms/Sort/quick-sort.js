import {Compare, defaultCompare, swap} from "../../Util.js";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
算法复杂度：复杂度为 O(nlog(n))，且性能通常比其他复杂度为 O(nlog(n))的排序算法要好
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function partition(arr, left, right, compareFn) {
  // 获取中心点
  const pivot = arr[Math.floor((right + left) / 2)];
  // 数组第一项
  let l = left,
  // 数组最后一项
      r = right;

  while (l <= r) {
    while (compareFn(arr[l], pivot) === Compare.LESS_THAN) {
      l++;
    }
    while (compareFn(arr[r], pivot) === Compare.BIGGER_THAN) {
      r--;
    }
    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }
  return l;
}

function quick(arr, left, right, compareFn) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right, compareFn);
    if (left < index - 1) {
      quick(arr, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(arr, index, right, compareFn);
    }
  }
  return arr;
}

export function quickSort(arr, compareFn = defaultCompare) {
  return quick(arr, 0, arr.length - 1, compareFn);
}

let arr = [];
for(let i = 1000; i > 0; i--) {
  arr.push(i);
}
let t1 = window.performance.now();
console.log(quickSort(arr));
let t2 = window.performance.now();
console.log(`quickSort: ${t2 - t1}ms`);
