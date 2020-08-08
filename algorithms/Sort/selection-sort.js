import {defaultCompare, Compare, swap} from "../../Util.js";

/* 算法复杂度：O(n2) */
export function selectionSort(arr, compareFn = defaultCompare) {
  const { length } = arr;
  let indexMin;
  let num = 0;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(arr[indexMin], arr[j]) > 0) {
        // console.log(++num);
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(arr, i, indexMin);
    }
  }
  return arr;
}

/*let arr = [4,2,5,6,77,8,92,1,2,3,421,56,22,33,211,41,44,52,51,56,23,45,124,1251,214,15,17,211,224,23,25,61,27,78,91,28];*/
let arr = [];
for (let i = 1000; i > 0; i--) {
  arr.push(i);
}
let t1 = window.performance.now();
selectionSort(arr);
let t2 = window.performance.now();
console.log(`selectionSort: ${t2 - t1}ms`);