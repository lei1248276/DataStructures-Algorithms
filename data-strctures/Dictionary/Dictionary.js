export class Dictionary {
  constructor() {
    this.table = {}
  }

  set(key, value) {
    if (key != null && value != null && typeof key != 'object') {
      this.table[key] = value;
      return true;
    }
    return false;
  }

  has(key) {
    return Object.prototype.hasOwnProperty.call(this.table, key);
  }

  remove(key) {
    if (this.has(key)) {
      return delete this.table[key];
    }
    return false;
  }

  get(key) {
    if (this.has(key)) {
      return this.table[key];
    }
    return undefined;
  }

  keys() {
    /*if (Object.keys(this.table).length) {
      return Object.keys(this.table);
    }*/

    /* 兼容方法 */
    /*if (Object.getOwnPropertyNames(this.table).length) {
      return Object.getOwnPropertyNames(this.table);
    }
    return undefined;*/

    /* 简写法 */
    let [[key1],[key2],[key3]] = map.entries();
    return [key1,key2,key3];
  }

  values() {
    /*if (Object.values(this.table).length) {
      return Object.values(this.table);
    }
    return undefined;*/

    /* 兼容方法*/
    /*if (Object.getOwnPropertyNames(this.table).length) {
      let arr = [];
      for (let key in this.table) {
        if (this.has(key)) arr.push(this.table[key]);
      }
      return arr;
    }
    return undefined;*/

    /* 简写法 */
    let [[,key1],[,key2],[,key3]] = map.entries();
    return [key1,key2,key3];
  }

  entries() {
    /*if (Object.entries(this.table).length) {
      return Object.entries(this.table);
    }
    return undefined;*/

    /* 兼容方法 */
    if (Object.getOwnPropertyNames(this.table).length) {
      let arr = [];
      for (let key in this.table) {
        if (this.has(key)) arr.push([key,this.table[key]])
      }
      return arr;
    }
    return undefined;
  }

  forEach(cb) {
    const keyValues = this.entries(),
        key = this.keys(),
        value = this.values();
    for (let i = 0; i < keyValues.length; i++) {
      cb(value[i], key[i]);
    }
  }

  size() {
    return Object.getOwnPropertyNames(this.table).length;
  }

  clear() {
    this.table = {};
    return true;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.size()) {
      return this.entries().join(',');
    }
  }
}

console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof ' ');
console.log(typeof 1);
console.log(typeof true);
console.log(typeof function () {});

let map = new Dictionary();
map.set('name','Jaye');
map.set('sex','man');
map.set('age',25);
map.set('sayHello',function () {
  console.log('hello world');
})
console.log(map.has('name'));
console.log(map.has('sayHello'));
console.log(map.remove('name'));
console.log(map.get('name'));
console.log(map.get('sayHello'));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
map.forEach(function (value, key) {
  console.log(`Key: ${key}, Value: ${value}`);
})
console.log(map.toString());
console.log(map.size());
console.log(map.isEmpty());
console.log(map.clear());
console.log(map.isEmpty());
console.log(map.size());
console.log(map);


console.log([1, 2, 3, [12, 12, [2, 24, [77], [8, 9], 5, 6], 415, 56], 1].join(',').split(','));
