// 시간 초과
// function solution(n) {
//     const fibo = [0, 1]

//     for(let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i-1]+fibo[i-2]
//     } return fibo[n] % 1234567
// }

function solution(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }
  return fibo[n];
}
