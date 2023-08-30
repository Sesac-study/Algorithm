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
// 1. 재귀함수의 구조

//function recursive (인자) {
// if (종결 조건) {
//   return 결과
//} else {
// return recursive(작업이 이루어져야 할 인자)
//}

// 2. 하노이의 재귀 구조

// 핵심: 가장 큰 원판을 끝에

// 3. from, by, to -> 시작축(이동 전) 보조축 끝축(이동 후)

// 시작에서 끝을 가려면 반드시 보조축을 거쳐야 함
// https://mgyo.tistory.com/185
// 1단계: from by to / 전 보조 후
// 4단계: by from to / 보조 전 후
