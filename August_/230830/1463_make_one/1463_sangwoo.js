const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);
// const num = 10;
// index 위치에는 해당 위치값이 1이 되기 위해 거치는 계산횟수가 저장됨
const dp = Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
    // 1을 빼는 경우의 수를 가정하여 먼저 계산
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }

    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
}

console.log(dp[num]);
