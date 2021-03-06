/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  贪心算法遵循一种近似解决问题的技术，期盼通过每个阶段的局部最优选择（当前最好的解），从而达到全局的最优（全局最优解）。它不像动态规划算法那样计算更大的格局。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function minCoinChange(coins, amount) {
  const change = [];
  let total = 0;

  for(let i = coins.length; i >= 0; i--) {
    // 从最大面额开始，过大就选择小的
    const coin = coins[i];
    // 将每次的结果保存到total中
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  }
  return change;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  比起动态规划算法而言，贪心算法更简单、更快。然而，它并不总是得到最优答案。但是综合来看，它相对执行时间来说，输出了一个可以接受的解。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

console.log(minCoinChange([1, 5, 10, 50], 48));