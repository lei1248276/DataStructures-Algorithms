export function knapsack(capacity, weights, values, n) {
  const KS = [];

  for (let i = 0; i <= n; i++) {
    KS[i] = [];
  }

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      // 初始化
      if (i === 0 || w === 0) {
        KS[i][w] = 0;
        // 不能超过背包重量
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + KS[i - 1][w - weights[i - 1]];
        const b = KS[i - 1][w];
        KS[i][w] = a > b ? a : b;
      } else {
        KS[i][w] = KS[i - 1][w];
      }
    }
  }
  return KS[n][capacity];
}

let values = [3, 4, 5],
    weights = [2, 3, 4],
    capacity = 5,
    n = values.length;
let t1 = window.performance.now();
console.log(knapsack(capacity, weights, values, n));
let t2 = window.performance.now();
console.log(`knapsack: ${t2 - t1}ms`);



export function knapsackR(capacity, weights, values, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }
  if (weights[n - 1] > capacity) {
    return knapsackR(capacity, weights, values, n - 1);
  }
  const a = values[n - 1] + knapsackR(capacity - weights[n - 1], weights, values, n - 1);
  const b = knapsackR(capacity, weights, values, n - 1);
  return a > b ? a : b;
}

let t3 = window.performance.now();
console.log(knapsackR(capacity, weights, values, n));
let t4 = window.performance.now();
console.log(`knapsackR: ${t4 - t3}ms`);

