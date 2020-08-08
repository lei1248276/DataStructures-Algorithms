import {defaultEquals, DOES_NOT_EXIST} from "../../Util.js";

export function sequentialSearch(arr, value, equalsFn = defaultEquals) {
  for (let i = 0, { length } = arr; i < length; i++) {
    if (equalsFn(value, arr[i])) return i;
  }
  return DOES_NOT_EXIST;
}

let arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}
let t1 = window.performance.now();
console.log(sequentialSearch(arr, 1995));
let t2 = window.performance.now();
console.log(`sequentialSearch: ${t2 - t1}ms`);
