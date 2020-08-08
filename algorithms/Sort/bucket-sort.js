import {insertionSort} from "./insertion-sort.js";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  桶排序（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶（较小的数组），
再使用一个简单的排序算法，例如插入排序（用来排序小数组的不错的算法），来对每个桶进行
排序。然后，它将所有的桶合并为结果数组。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  算法分为两个部分：第一个用于创建桶并将元素分布到不同的桶中，
                 第二个包含对每个桶执行插入排序算法和将所有桶合并为排序后的结果数组。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function createBuckets(arr, bucketSize) {
  let maxValue = arr[0],
      minValue = arr[0],
      { length } = arr
  // 遍历一次获取最大值和最小值
  for (let i = 0; i < length; i++) {
    arr[i] < minValue ?
        minValue = arr[i] :
        arr[i] > maxValue ?
            maxValue = arr[i] :
            null;
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }
  return buckets;
}

function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0, { length } = buckets; i < length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}

export function bucketSort(arr, bucketSize = 5) {
  if (arr.length < 2) return arr;
  const buckets = createBuckets(arr, bucketSize);
  return sortBuckets(buckets);
}

let arr = [];
for(let i = 1000; i > 0; i--) {
  arr.push(i);
}

let t1 = window.performance.now();
bucketSort(arr);
let t2 = window.performance.now();
console.log(`bucketSort: ${t2 - t1}ms`);