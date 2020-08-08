import {findMaxValue} from "../../Util.js";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
计数排序: 它是用来排序整数的优秀算法（它是一个整数排序算法）
时间复杂度: 时间复杂度为 O(n+k)，其中 k 是临时计数数组的大小；但是，它确实需要更多的内存来存放临时数组
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function countingSort(arr) {
  if (arr.length < 2) return arr;
  const maxValue = findMaxValue(arr),
      // 获取最大值生成来生成计数数组
      counts = new Array(maxValue + 1);

  // 遍历原数组将值变成计数数组索引并重复值计数
  arr.forEach(value => {
    if (!counts[value]) {
      counts[value] = 0;
    }
    counts[value]++;
  })
  let sortedIndex = 0;
  // 遍历计数数组将值用来改写原数组并排序和将重复值计数递减直到归 0
  counts.forEach((value, index) => {
    while (value > 0) {
      arr[sortedIndex++] = index;
      value--;
    }
  })
  return arr;
}

let arr = [];
for(let i = 1000; i > 0; i--) {
  arr.push(i);
}

let t1 = window.performance.now();
countingSort(arr);
let t2 = window.performance.now();
console.log(`countingSort: ${t2 - t1}ms`);