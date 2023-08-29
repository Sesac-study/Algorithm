function solution(n) {
  const result = [];

  const hanoi = (n, from, by, to) => {
    if (n === 1) {
      result.push([from, to]);
    } else {
      hanoi(n - 1, from, to, by);
      result.push([from, to]);
      hanoi(n - 1, by, from, to);
    }
  };
  hanoi(n, 1, 2, 3);

  return result;
}
