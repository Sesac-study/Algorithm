function solution(myString) {
    let string = myString.split('x');
    let answer = [];
    answer = string.sort();
    answer = answer.filter((element) => element !=='');
    return answer;
}