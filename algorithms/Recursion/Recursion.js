/* 循环实现阶乘 */
console.time('factorial')
function factorial(number) {
  if (number < 0) return;
  let num = 1;
  for (let i = number; i > 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial(5));
console.timeEnd('factorial')

/* 递归实现阶乘 */
console.time('Factorial');
function Factorial(number) {
  if (number <= 1) return 1;
  return number * Factorial(number - 1);
}
console.log(Factorial(5));
console.timeEnd('Factorial');

/* 循环实现斐波那契数列 */
// 0、 1、 1、 2、 3、 5、 8、 13、 21、34
console.time('fibonacci');
function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let num1 = 0,
      num2 = 1,
      count;
  for (let i = 1; i < n; i++) {
    // next是前两位的和
    count = num1 + num2;
    num1 = num2;
    num2 = count;
  }
  return count;
}
console.log(fibonacci(8));
console.timeEnd('fibonacci');

/* 递归实现斐波那契数列 */
console.time('Fibonacci');
function Fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return Fibonacci(n-1) + Fibonacci(n-2);
}
console.log(Fibonacci(8));
console.timeEnd('Fibonacci');


let arr = [1,2,3,4,5,6];
/* 递归删除指定元素 */
function rem(arr, v) {
  if (arr.length < 1) return [];
  if (v === arr[0]) {
    return arr
  }
  arr.splice(0,1);
  return rem(arr, v);
}
console.log(rem(arr, 3));// [3, 4, 5, 6]

let arr2 = [1,2,3,4,5,6];
/* 递归删除指定元素 */
function del(arr, value) {
  if (arr.length < 1) return [];
  if (arr[0] === value) {
    arr.shift();
    return arr;
  } else {
    return [...arr.splice(0, 1), ...del(arr, value)];
  }
}
console.log(del(arr2, 3));// [1, 2, 4, 5, 6]

function firsts(arr) {
  if (arr.length < 1) return [];
  return [...arr[0].splice(0, 1), ...firsts(arr.slice(1))];
}
let arr3 = [[1, 2], [3, 4], [5, 6, 7], [8]];
console.log(firsts(arr3));// [1, 3, 5, 8]

function seconds(arr) {
  if (arr.length < 1) return [];
  return [...arr[0].splice(1, 1), ...seconds(arr.slice(1))];
}
let arr4 = [[1, 2], [3, 4], [5, 6, 7], [8]];
console.log(seconds(arr4));// [2, 4, 6]

// 普通方法
function insert(arr, index, value) {
  for(let { length } = arr,i = length; i > index; i--) {
    arr[i] = arr[i - 1]
  }

  arr[index] = value;
  return arr;
}
console.log(insert([1, 2, 3, 4, 5, 6, 7, 8], 5, 1.5));

function insertR(arr, index, newV) {
  if (arr.length <= index) {
    arr.push(newV);
    return arr;
  }
  if (!index--) {
    arr.unshift(newV);
    return arr;
  }
  return [arr.shift(), ...insertR(arr,index, newV)];
}
console.log(insertR([1, 2, 3, 4, 5, 6, 7, 8], 5, 3.5));


function multiRemBer(arr, value) {
  if (arr.length < 1) return [];

  while (arr[0] === value) arr.shift();

  return [arr.shift(), ...multiRemBer(arr, value)];
}
console.log(multiRemBer([1, 2, 3, 4, 7, 4, 7, 5, 6, 7, 6, 7, 7, 8], 7));

function multiRemBerR(arr, value) {
  if (arr.length < 1) return [];
  if (arr[0] === value) {
    arr.shift();
    return multiRemBerR(arr, value);
  }
  return [arr.shift(), ...multiRemBerR(arr, value)];
}
console.log(multiRemBerR([1, 2, 3, 4, 7, 4, 7, 5, 6, 7, 6, 7, 7, 8], 7));


function multiInsertR(arr, oldV, newV) {
  if (arr.length < 1) return [];
  if (arr[0] === oldV) {
    arr.splice(1, 0, newV);
    multiInsertR(arr.slice(2), oldV, newV);
  }
  return [arr.shift(), ...multiInsertR(arr, oldV, newV)];
}
console.log(multiInsertR([1, 2, 3, 4, 3, 5, 3, 6, 3, 7], 3, 3.5));

function multiInsert(arr, oldV, newV) {
  if (arr.length < 1) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldV) {
      arr.splice(++i, 0, newV);
    }
  }

  return arr;
}
console.log(multiInsert([1, 2, 3, 4, 3, 5, 3, 6, 3, 7], 3, 3.5));

// 普通的
function add(arr) {
  if (arr.length < 1) return 0;
  let count = 0;

  for (let i = 0, { length } = arr; i < length; i++) {
    count += arr[i];
  }

  return count;
}
console.log(add([1, 2, 3, 4, 5, 6, 7, 8]));

function addR(arr) {
  if (arr.length < 1) return 0;
  return arr.shift() + addR(arr);
}
console.log(addR([1, 2, 3, 4, 5, 6, 7, 8]));

//普通的
function superposition(arr1, arr2) {
  if (arr1.length < 1 || arr2.length < 1) return [];
  let countArr = [];
  let { length } = arr1 > arr2 ? arr1 : arr2;

  for (let i = 0; i < length; i++) {
    if (!arr1[i]) arr1[i] = 0;
    if (!arr2[i]) arr2[i] = 0;
    countArr[i] = arr1[i] + arr2[i];
  }

  return countArr;
}
console.log(superposition([1, 2, 3], [2, 3, 4, 5]));

function superpositionR(arr1, arr2) {
  // if (arr1.length < 1 || arr2.length < 1) return [];
  if (arr1.length < 1) return arr2;
  if (arr2.length < 1) return arr1;
  return [arr1.shift() + arr2.shift(), ...superpositionR(arr1, arr2)];
}

console.log(superpositionR([1, 2, 3, 4], [2, 3, 4]));

function _flat(arr) {
  if (arr.length < 1) return []
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(_flat(arr[i]))
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
let deepArr = [1, [2, 3], [4,[5, 6, 7, [8, 9]], [10, 11], [12, [13, [14]]]]];
console.log(_flat([1,2,[3,4,[5,6]]]));

function _deepClone(obj) {
  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key] != null && typeof obj[key] === "object" ?
          _deepClone(obj[key]) :
          obj[key];
    }
  }

  return newObj;
}
let person = {
  name: 'Jaye',
  age: 25,
  time: new Date(),
  sayName() {
    return this.name;
  },
  arr: [1, 2, 3, 4, 5, 6],
  friend: {
    one: 'zhangsan',
    two: 'lisi'
  }
}
let person2 = _deepClone(person);
person2.arr.push(7, 8);
console.log(person);
console.log(person2);
console.log(person2.arr === person.arr);


// 普通
function count(arr) {
  let log = {};

  for (let i = 0, { length } = arr; i < length; i++) {
    if (log[arr[i]]) {
      log[arr[i]] += 1;
    } else {
      log[arr[i]] = 1;
    }
  }

  return log;
}
console.log(count([1, 2, 1, 3, 2, 3, 4, 5, 6, 5, 5, 7, 6]));

function countR(arr, log = {}, i = 0) {
  if (i < arr.length) {
    if (!log[arr[i]]) {
      log[arr[i]] = 1
      countR(arr, log, ++i);
    } else {
      log[arr[i]] += 1
      countR(arr, log, ++i);
    }
  }
  return log;
}
console.log(countR([1, 2, 1, 3, 2, 3, 4, 5, 6, 5, 5, 7, 6]));

function search(arr, value) {
  if (arr.length < 1) return false;
  for (let i = 0, { length } = arr; i < length; i++) {
    if (Array.isArray(arr[i])) {
      return search(arr[i], value);
    }
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(search([1, 2, [3, 4, [5, 6]]], 5));

function makeSet(arr) {
  if (arr.length < 1) return [];
  let newArr = [];

  for (let i = 0, { length } = arr; i < length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
console.log(makeSet([1, 1, 2, 3, 4, 4, 5, 6, 7, 6, 6, 7, 8]));

function makeSetR(arr, newArr = [], i = 0) {
  if (arr.length <= i) return [];
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
    makeSetR(arr, newArr, ++i);
  } else {
    makeSetR(arr, newArr, ++i);
  }
  return newArr;
}
console.log(makeSetR([1, 1, 2, 3, 4, 4, 5, 6, 7, 6, 6, 7, 8]));

function rev(arr) {
  if (arr.length < 1) return [];
  return arr.splice(1, 1).concat(arr.splice(0, 1), rev(arr));
}
console.log(rev([1, 2, 3, 4, 5, 6, 7, 8]));