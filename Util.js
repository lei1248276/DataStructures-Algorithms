export function defaultEquals(a, b) {
  return a === b;
}

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUAL: 0
};

export function defaultCompare(a, b) {
  if (a === b) return Compare.EQUAL;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultToString(value) {
  if (value === null) return 'NULL';
  if (value === undefined) return 'UNDEFINED';
  if (typeof value === 'string' || value instanceof String) return `${value}`;
  return value.toString();
}

/* 当作副本的对象，保存原始 key和value */
export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export function swap(arr, a, b) {
  [arr[a],arr[b]] = [arr[b],arr[a]];
}

export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

export function findMaxValue(arr) {
  if (arr.length > 1) {
    const {length} = arr;
    let max = arr[0];
    for (let i = 1; i < length; i++) {
      if (defaultCompare(max, arr[i]) === Compare.LESS_THAN) {
        max = arr[i];
      }
    }
    return max;
  }
}

export function findMinValue(arr) {
  if (arr.length > 1) {
    const {length} = arr;
    let min = arr[0];
    for (let i = 1; i < length; i++) {
      if (defaultCompare(min, arr[i]) === Compare.BIGGER_THAN) {
        min = arr[i];
      }
    }
    return min;
  }
}

export const DOES_NOT_EXIST = -1;

export function lesserEquals(a, b, compareFn) {
  const com = compareFn(a, b);
  return com === Compare.LESS_THAN || com === Compare.EQUAL;
}

export function biggerEquals(a, b, compareFn) {
  const com = compareFn(a, b);
  return com === Compare.BIGGER_THAN || com === Compare.EQUAL;
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b);
}