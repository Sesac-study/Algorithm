function solution(number, n, m) {
    if (number % n === 0 && number % m === 0) {
        return 1; // n과 m의 배수인 경우
    } else {
        return 0; // 조건을 만족하지 않는 경우
    }

   // 주어진 number가 n과 m의 배수인지를 판별하여 해당하는 값을 반환
   // 배수 조건을 만족한다면 1을 반환 조건을 만족하지 않으면 0 반환