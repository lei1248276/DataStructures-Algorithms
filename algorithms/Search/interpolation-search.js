/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
内插搜索是改良版的二分搜索。二分搜索总是检查 mid 位置上的值，而内插搜索可能会根据要搜索的值检查数组中的不同地方。

这个算法要求被搜索的数据结构已排序。以下是该算法遵循的步骤：
(1) 使用 position 公式选中一个值；
(2) 如果这个值是待搜索值，那么算法执行完毕（值找到了）；
(3) 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找（较小）；
(4) 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找（较大）。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import {Compare,
  DOES_NOT_EXIST,
  defaultCompare,
  defaultEquals,
  defaultDiff,
  biggerEquals,
  lesserEquals} from "../../Util.js";

export function interpolationSearch(
    arr,
    value,
    compareFn = defaultCompare,
    equalsFn = defaultEquals,
    diffFn = defaultDiff
) {
  const { length } = arr;
  let low = 0,
      high = length - 1,
      position = -1,
      delta = -1;
  while (low <= high &&
  biggerEquals(value, arr[low], compareFn) &&
  lesserEquals(value, arr[high], compareFn)) {
    delta = diffFn(value, arr[low]) / diffFn(arr[high], arr[low]);
    position = low + Math.floor((high - low) * delta);

    if (equalsFn(arr[position], value)) return position;
    if (compareFn(arr[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return DOES_NOT_EXIST;
}

let arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
let t1 = window.performance.now();
console.log(interpolationSearch(arr, 1995));
let t2 = window.performance.now();
console.log(`interpolationSearch: ${t2 - t1}ms`);