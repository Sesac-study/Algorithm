function solution(myString) {
  var answer = myString
    .split('x')
    .sort()
    .filter((a) => a !== '');
  return answer;
}
