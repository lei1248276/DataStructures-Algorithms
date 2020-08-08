/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  动态规划：动态规划则是将问题分解成相互依赖的子问题

  使用动态规划解决问题时，要遵循三个重要步骤：
  (1) 定义子问题；
  (2) 实现要反复执行来解决子问题的部分（这一步要参考前一节讨论的递归的步骤）；
  (3) 识别并求解出基线条件。
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* 最少硬币找零问题
*   例如，美国有以下面额（硬币）： d1 = 1， d2 = 5， d3 = 10， d4 = 25。
如果要找 36 美分的零钱，我们可以用 1 个 25 美分、 1 个 10 美分和 1 个便士（ 1 美分）。
如何将这个解答转化成算法？ */
export function minCoinChange(coins, amount) {
  const cache = [];

  const makeChange = value => {
    if (!value) return [];
    if (cache[value]) return cache[value];
    let min = [],
        newMin,
        newAmount;

    for (let i = 0, { length } = coins; i < length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
        // console.log(newMin);
      }
      if (newAmount >= 0
          && (newMin.length < min.length - 1 || !min.length)
          && (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + newMin);
      }
    }
    return cache[value] = min;
  }
  return makeChange(amount);
}

console.log(minCoinChange([1, 5, 10, 50, 100], 24));
