import {Compare, defaultCompare, swap} from "../../Util.js";

/* 排序小型数组时，此算法比选择排序和冒泡排序性能要好 */
export function insertionSort(arr, compareFn = defaultCompare) {
  const { length } = arr;
  for (let i = 1; i < length; i++) {
    let j = i;
    let temp = arr[i];
    while (j > 0 && compareFn(arr[j-1], temp) > 0) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

/*let arr = [4,2,5,6,77,8,92,1,2,3,421,56,22,33,211,41,44,52,51,56,23,45,124,1251,214,15,17,211,224,23,25,61,27,78,91,28];*/
let arr = [];
for (let i = 1000; i > 0; i--) {
  arr.push(i);
}

let t1 = window.performance.now();
insertionSort(arr);
let t2 = window.performance.now();
console.log(`insertionSort: ${t2 - t1}ms`);