function solution(s, skip, index) {
    // 1. 알파벳 배열 생성
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    // 2. skip에 포함된 문자를 제외한 문자열 생성
    let filteredS = '';
    for (let i = 0; i < s.length; i++) {
      // 문자열 s를 한 글자씩 확인하며 skip에 포함되지 않는 경우만 filteredS에 추가
      if (!skip.includes(s[i])) {
        filteredS += s[i];
      }
    }
  
    let result = '';
    for (let i = 0; i < filteredS.length; i++) {
      // filteredS의 각 문자를 가져와서 밀어서 새로운 문자를 생성
      const char = filteredS[i]; // 현재 문자
      const currentIndex = alphabet.indexOf(char); // 현재 문자의 알파벳 배열에서의 인덱스
      const newIndex = (currentIndex + index) % 26; // 밀어서 새로운 인덱스 계산 (26은 알파벳 길이)
      const shiftedChar = alphabet[newIndex]; // 새로운 문자
      result += shiftedChar; // 결과 문자열에 추가
    }
  
    return result; 
  }

  // 틀림 ㅎㅎ