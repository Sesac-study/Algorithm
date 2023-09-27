function solution(s, skip, index) {
  let arr = 'abcdefghijklmnopqrstuvwxyz'.split(''); //전체 알파벳이 저장된 array 생성
  let skipArr = skip.split(''); //skip을 array 형태로
  let sArr = s.split('');

  let answerArr = [];
  // let divide = 26 - skip.length;

  for (let i = 0; i < skip.length; i++) {
    //전체 알파벳 array에서 skip array에 포함된 알파벳 제외
    let skipchar = skipArr[i];
    arr.splice(arr.indexOf(skipchar), 1);
  }

  for (let i = 0; i < s.length; i++) {
    let filteredindex = arr.indexOf(sArr[i]); //s의 각 알파벳이 어떤 index에 있는 지 확인
    answerArr.push(arr[(filteredindex + index) % arr.length]); //해당 index에 '변수 index'에 저장한 값 만큼 이동 후 그 알파벳을 answer array에 push
    //(filteredindex 값 + 변수 index 값)이 arr.length보다 큰 경우 남은 값 만큼 다시 앞에서부터 탐색해야 하므로 % 처리
  }

  let answer = answerArr.join('');
  return answer;
}
