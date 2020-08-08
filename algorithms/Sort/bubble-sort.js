import {defaultCompare, Compare, swap} from "../../Util.js";

/* 算法复杂度：O(n2) */
export function bubbleSort(arr, compareFn = defaultCompare) {
  const { length } = arr;
  let num = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(arr[j], arr[j+1]) === Compare.BIGGER_THAN) {
        // console.log(++num);
        swap(arr, j, j+1);
      }
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
arr.sort((a, b) => a - b);
let t2 = window.performance.now();
console.log(`sort: ${t2 - t1}ms`);

/*let arr2 = [4,2,5,6,77,8,92,1,2,3,421,56,22,33,211,41,44,52,51,56,23,45,124,1251,214,15,17,211,224,23,25,61,27,78,91,28];*/
let arr2 = [];
for (let i = 1000; i > 0; i--) {
  arr2.push(i);
}
let t3 = window.performance.now();
bubbleSort(arr2);
let t4 = window.performance.now();
console.log(`bubbleSort: ${t4 - t3}ms`);

function test(n) {
  let arr = [],
      num;
  for (let i = 0; i < n; i++) {
    num = parseInt(Math.random() * 10);
    arr.push(num);
  }
  return arr.join('');
}
let btn = document.querySelector('.btn');
let text = document.querySelector('.text');
btn.addEventListener('click', function () {
  text.innerText = test(6);
})

