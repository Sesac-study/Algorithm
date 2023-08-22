function solution(num, n, m) {
  if (num % n === 0 && num % m === 0) {
    return 1;
  } else {
    return 0;
  }
}
