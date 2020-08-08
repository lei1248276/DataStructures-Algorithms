import {swap} from "../../Util.js";

/* 随机算法（洗牌）：将原数组值打乱重排 */
export function shuffle(arr) {
  let currentIndex = arr.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    swap(arr, currentIndex, randomIndex);
  }
  return arr;

  /*for(let { length } = arr,i = length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    swap(arr, i, randomIndex);
    // [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;*/
}

let arr = [11,12,13,14,15,16,17,18];
let t1 = window.performance.now();
console.log(shuffle(arr));
let t2 = window.performance.now();
console.log(`shuffle: ${t2 - t1}ms`);

/* 随机生成指定长度数组 */
function random(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}

let t3 = window.performance.now();
console.log(random(10));
let t4 = window.performance.now();
console.log(`random: ${t4 - t3}ms`);