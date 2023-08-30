// function solution(n) {
//     let answer = 1;

//     for (let i = 1; i<=10; i++) {
//         answer *= i
//         if(answer === n) {
//             return i
//         } else if (answer > n) {
//             return i - 1
//         }
//     }
// }

function fact(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
function solution(n) {
  var answer = 0;
  for (let num = 1; num <= 10; num++) {
    if (n >= fact(num)) {
      answer = num;
    }
  }
  return answer;
}
