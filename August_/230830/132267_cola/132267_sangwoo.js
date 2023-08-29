function solution(a, b, n) {
    let sum = 0;
    return cal(a, b, n, sum);
}

function cal(a, b, n, sum) {
    if (n / a < 1) {
        return sum;
    }
    const temp = parseInt(n / a) * b;
    sum += temp;
    const left = n % a;
    return cal(a, b, temp + left, sum);
}
