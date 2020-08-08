import {defaultCompare, swap} from "../../Util.js";

/* 堆化（下移函数） */
function heapify(arr, index, heapSize, compareFn) {
  let largest = index;
  const left = 2 * index + 1,
      right = 2 * index + 2;
  if (left < heapSize && compareFn(arr[left], arr[index]) > 0) {
    largest = left;
  }
  if (right < heapSize && compareFn(arr[right], arr[largest]) > 0) {
    largest = right;
  }
  if (largest !== index) {
    swap(arr, largest, index);
    heapify(arr, largest, heapSize, compareFn);
  }
}

/* 构建最大堆 */
function buildMaxHeap(arr, compareFn) {
  for (let i = Math.floor(arr.length / 2); i >= 0 ; i--) {
    heapify(arr, i, arr.length, compareFn);
  }
  return arr;
}

export function heapSort(arr, compareFn = defaultCompare) {
  let heapSize = arr.length;
  buildMaxHeap(arr, compareFn);
  while (heapSize > 1) {
    swap(arr, 0, --heapSize);
    heapify(arr, 0, heapSize, compareFn);
  }
  return arr;
}