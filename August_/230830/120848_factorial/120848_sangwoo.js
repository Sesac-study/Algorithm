function solution(n) {
    var answer = 0;
    for (let i = 1; i <= 10; i++) {
        if (n >= fac(i)) {
            answer = i;
            continue;
        } else {
            break;
        }
    }
    return answer;
}

function fac(num) {
    if (num == 1) {
        return num;
    } else {
        return num * fac(num - 1);
    }
}
