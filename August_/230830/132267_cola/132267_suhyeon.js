// while 문
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const newCoke = Math.floor(n / a) * b;
    answer += newCoke;
    n = newCoke + (n % a);
  }

  return answer;
}
