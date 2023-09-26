function solution(s, skip, index) {
  let ary = [];
  var answer = '';
  // a ~ z 저장
  for (let i = 97; i <= 122; i++) {
    ary.push(String.fromCharCode(i));
  }
  // skip에 있는거 제외
  for (let c of skip) {
    ary = ary.filter((w) => w !== c);
  }
  ary = ary.concat(ary);
  ary = ary.concat(ary);
  for (let q of s) {
    for (let j = 0; j < ary.length; j++) {
      if (ary[j] === q) {
        answer += ary[j + index];
        break;
      }
    }
  }
  return answer;
}
