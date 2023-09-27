function solution(id_pw, db) {
  let answer = '';
  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] == db[i][0]) {
      //아이디 일치
      if (id_pw[1] == db[i][1]) {
        //비밀번호 일치
        answer = 'login';
      } else if (id_pw[1] !== db[i][1]) {
        answer = 'wrong pw';
      }
    } else if (id_pw[0] !== db[i][0] && id_pw[1] === db[i][1]) {
      //아이디와 비번 둘다 불일치
      answer = 'fail';
    }
  }
  return answer;
}

//test case 1에서 계속 실패하는 이유가 알고싶네요...
