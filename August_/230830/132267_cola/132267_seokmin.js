function solution(a, b, n) {
  let newCoke = Math.floor(n / a) * b;
  let newN = newCoke + (n % a);
  if (n > a) {
    newCoke += solution(a, b, newN);
  }
  return newCoke;
}
