import {defaultToString,ValuePair} from "../../Util.js";

export class HashTable {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  /* 散列函数 */
  djb2HashCode(key) {
    if (typeof key === 'number') return key;
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  hashCode(key) {
    return this.djb2HashCode(key);
  }

  /* 添加或更新散列表 */
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  /* 获取散列表元素 */
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  /* 删除散列表元素 */
  remove(key) {
    const hash = this.hashCode(key);
    if (this.table[hash] != null) {
      return delete this.table[hash];
    }
    return false;
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (!this.size()) return '';
    const keys = Object.keys(this.table);
    let objStr = `${keys[0]} => ${this.table[keys[0]].toString()}`;
    for (let i = 1; i < keys.length; i++) {
      objStr = `${objStr}\n${keys[i]} => ${this.table[keys[i]].toString()}`
    }
    return objStr;
  }
}

let hashMap = new HashTable();
hashMap.put('name', 'Jaye');
hashMap.put('jamie', 'zhangsan');
hashMap.put('sue', 'lisi');
hashMap.put('age', 25);
hashMap.put('job', '程序猿');
hashMap.put('sex', 'man');
console.log(hashMap.get('name'));
console.log(hashMap.get('age'));
// console.log(hashMap.remove('age'));
// console.log(hashMap.remove('name'));
console.log(hashMap.get('name'));
console.log(hashMap.toString());
console.log(hashMap);

let a = {};
let index = 0;
a[index] = {a:1,b:2};
console.log(a);

function F(name, age, sex) {
  const map = new WeakMap();
  this.age = age;
  this.sex = sex;
  map.set(this,{_name: name});
  F.prototype.getName = function () {
    return map.get(this)._name;
  }
}
let f = new F('Jaye', 25, 'man');
console.log(f);
console.log(f.getName());
