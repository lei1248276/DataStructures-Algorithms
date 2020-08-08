export function knapsack(capacity, weights, values) {
  const n = values.length;
  let val = 0,
      load = 0;
  for (let i = 0; i < n && load < capacity; i++) {
    // 可以完整装入时的重量
    if (weights[i] <= capacity - load) {
      val += values[i];
      load += weights[i];
    } else {
      // 不能完整装入时计算占比率
      const r = (capacity - load) / weights[i];
      val += r * values[i];
      load += weights[i];
    }
  }
  return val;
}

let capacity = 6,
    weights = [2, 3, 4],
    values = [3, 4, 5]
console.log(knapsack(capacity, weights, values));