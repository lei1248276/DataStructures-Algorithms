import {Compare, defaultCompare} from "../../Util.js";

/* 归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只
有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

  由于是分治法，归并排序也是递归的。我们要将算法分为两个函数：第一个负责将一个大数
组分为多个小数组并调用用来排序的辅助函数。我们来看看在这里声明的主要函数。*/


/*  算法复杂度：O(nlogn(n)) */
function merge(left, right, compareFn) {
  let i = 0,
      j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

export function mergeSort(arr, compareFn = defaultCompare) {
  if (arr.length > 1) {
    const { length } = arr,
        middle = Math.floor(length / 2),
        left = mergeSort(arr.slice(0, middle), compareFn),
        right = mergeSort(arr.slice(middle, length), compareFn);
    arr = merge(left, right, compareFn);
  }
  return arr;
}

/*let arr = [4,2,5,6,77,8,92,1,2,3,421,56,22,33,211,41,44,52,51,56,23,45,124,1251,214,15,17,211,224,23,25,61,27,78,91,28];*/
let arr = [];
for(let i = 1000; i > 0; i--) {
  arr.push(i);
}
let t1 = window.performance.now();
mergeSort(arr);
let t2 = window.performance.now();
console.log(`mergeSort: ${t2 - t1}ms`);
