function solution(myString) {
  const answer = myString.split('x').sort();
  return answer.filter((v) => v !== '');
}
