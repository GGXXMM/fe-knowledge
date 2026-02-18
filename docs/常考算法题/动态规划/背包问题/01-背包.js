/**
 * 题目：有 n 件物品和1个最多能背重量为 w 的背包，第 i 个物品重量为 weight[i]，价值value[i]
 * 要求：每件物品只能用1次
 * @param {*} n n件物品
 * @param {*} w 最多能背重量
 * @param {*} weight 物品重量集合
 * @param {*} value 物品价值集合
 */
// 递推公式：
// i件物品的最大价值 = 第i-1件物品：把i物品放进去和不把i物品放进去，求最大价值
// dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j- weight[i-1]] + value[i])
// i：前 i 个物品，j：当前背包容量
// 例子：n = 3，w = 4，weight = [1,3,4]，value = [15,20,30]
function bagProblem(n, w, weight, value) {
  // 初始化dp
  let dp = Array.from(new Array(n+1), ()=> new Array(w+1).fill(0));
  dp[0][0] = 0;

  for(let i = 1;i<= n;i++) {
    for(j = 1;j<=w;j++) {
      // 排除边界
      if(j - weight[i-1] < 0) {
        // 选择不装入物品i
        dp[i][j] = dp[i-1][j]
      }else{
        dp[i][j] = Math.max(
          // 把第 i 个物品装进背包
          dp[i-1][j- weight[i-1]] + value[i-1],
          // 不把第 i 个物品装进背包
          dp[i-1][j]
        )
      }
    }
  }
  return dp[n][w]
}
console.log(bagProblem(3, 4, [1,3,4], [15,20,30]))// 35