export class Set {
  constructor() {
    this.items = {}
  }
  has(element) {
    /* 只判断实例自身属性所以不使用 "in" operator ：element in this.items || */
    return Object.prototype.hasOwnProperty.call(this.items,element);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) return delete this.items[element];
    return false;
  }

  clear() {
    this.items = {};
    return true;
  }

  size() {
    return Object.keys(this.items).length;

    /* 兼容方法 */
    /*let count = 0;
    for (let key in this.items) {
      if (this.has(key)) count++;
    }
    return count;*/
  }

  values() {
    // return Object.values(this.items);
    
    /* 兼容方法 */
    let arr = [];
    for (let arrKey in this.items) {
      if (this.has(this.items[arrKey])){
        arr.push(this.items[arrKey]);
      }
    }
    return arr;
  }

  /* 集合运算的方法 */
    // 1.并集（合并A集和B集）
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

    // 2.交集（A集于B集都存在的元素）
  intersection(otherSet) {
    /*const intersectionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) intersectionSet.add(values[i]);
    }
    return intersectionSet;*/

    /* 性能优化方法 */
    const intersectionSet = new Set();
    let bigVa = this.values(),
        smallVa = otherSet.values();
    console.log(bigVa.length - smallVa.length);
    if (bigVa.length - smallVa.length < 0) {
      [smallVa,bigVa] = [bigVa,smallVa];
    }
    smallVa.forEach(value => {
      if (bigVa.includes(value)) intersectionSet.add(value);
    })
    return intersectionSet;
  }

    // 3.差集（存在于A集中不存在于B集中）
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) differenceSet.add(value);
    })
    return differenceSet;
  }

    // 4.子集（如果集合A是集合B的子集，那么集合A所有的元素也都存在于集合B中）
  isSubsetOf(superSet) {
    if (this.size() > superSet.size()) return false;
    return this.values().every(value => {
      return superSet.has(value);
    })
  }
}

let set = new Set();
set.add(1);
set.add(9);
set.add(8);
set.add(12);
set.add(5);
set.add(6);
set.add(7);
set.add(15);
console.log(set.delete(5));
console.log(set.size());
console.log(set.values());
console.log(set);

let otherSet = new Set();
otherSet.add(1);
otherSet.add(8);
otherSet.add(12);
otherSet.add(15);
console.log(otherSet.values());
console.log(set.union(otherSet));
console.log(set.intersection(otherSet));
console.log(set.difference(otherSet));

let testSet = new Set();
testSet.add(1);
testSet.add(2);
testSet.add(3);
console.log(testSet.values());
let testSet2 = new Set();
testSet2.add(1);
testSet2.add(2);
testSet2.add(3);
testSet2.add(4);
console.log(testSet2.values());
console.log(testSet.isSubsetOf(testSet2));
let testSet3 = new Set();
testSet3.add(2);
testSet3.add(3);
testSet3.add(5);
testSet3.add(6);
// testSet3.add(1);
console.log(testSet3.values());
console.log(testSet.isSubsetOf(testSet3));
