function solution(myString) {
    const split = myString.split("x");  // x를 기준으로 배열
    const nonEmpty = split.filter(item => item !== "");  // 빈 문자열 제외, 배열 요소만 필터링
    const sorted = nonEmpty.sort(); // 배열을 사전 순으로 정렬
    
    return sorted;
}