// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const num = parseInt(input[0]);

const num = 27;

const lines = [];
printStars(num);
console.log(lines.join(''));

function printStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
      //   console.log(i, j);
    }
    lines.push('\n');
    // console.log('pushed!');
  }
}

function star(i, j, num) {
  if (i % 3 == 1 && j % 3 == 1) {
    lines.push(' ');
    // console.log(i, j);
  } else {
    if (num == 1) {
      lines.push('*');
      //   console.log('num==1');
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
      //   console.log('star 재귀');
    }
  }
}
