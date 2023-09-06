const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// permu: 현재까지의 순열을 나타내는 배열
// rests: 아직 사용되지 않은 원소들을 나타내는 배열
// output: 순열을 저장하는 배열

const permutation = (permu, rests, output) => {
  // 재귀 호출을 멈추는 조건.
  // rests 배열이 더 이상 남아있는 원소가 없으면 현재까지의 순열을 output 배열에 추가하고 함수를 종료합니다.
  if (rests.length == 0) {
    output.push(permu.join('')); // 1차원 배열로 조인하여 결과에 추가
    return;
  }

  // 아직 사용되지 않은 원소들에 대한 순회를 시작
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};

const output = [];
const arr = input.toString().split('');
permutation([], arr, output);

const result = output.sort((a, b) => a - b).find((num) => input < num);

console.log(result ? result : 0); // 1차원 배열 출력
