// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const num = parseInt(input[0]);

const num = 3;

const lines = [];
printStars(num);
console.log(lines.join(''));

function printStars(num) {
  //1. 2차원 배열이기에 이중 for 문
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      console.log(i, j);
      star(i, j, num);
    }
    lines.push('\n');
    console.log(lines, 'pushed!'); // 6. j의 for문을 한차례 돌면 한 줄이 완성되며 push
  }
}

function star(i, j, num) {
  //2. 규칙에 따라 *를 입력해주는 star function
  if (i % 3 == 1 && j % 3 == 1) {
    // 가운데의 빈 칸을 형성하는 if문 by "3n + 1"
    lines.push(' '); // 4. 종료 부분
    console.log('star 함수 " " pushed');
    // console.log(i, j);
  } else {
    console.log('num==1?>>', num); // 3. 왜 num이 1일 때만 *?-> 하나의 벽돌 단위까지
    if (num == 1) {
      //3.
      lines.push('*'); //4. 종료 부분
      console.log('star 함수 "*" pushed');
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3)); //4. 재귀 부분
      console.log('star 재귀'); //5. num = 9일 경우 3**2이기에 재귀를 두 번 거침
    }
  }
}
