function solution(myString) {
    const array = myString.split("x");
    answer = array.filter((e) => e !== "").sort();
    return answer;
}
