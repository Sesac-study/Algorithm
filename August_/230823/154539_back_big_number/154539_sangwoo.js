function solution(numbers) {
    // 정답 참조
    const length = numbers.length;
    const answer = Array.from({ length }, () => -1);
    const stack = [];

    for (let i = length - 1; i >= 0; i--) {
        while (stack.length !== 0 && numbers[i] >= stack.at(-1)) {
            stack.pop();
        }
        if (stack.length !== 0) {
            answer[i] = stack.at(-1);
        }
        stack.push(numbers[i]);
        console.log(stack);
    }
    return answer;
}

// 시간초과
// function solution(numbers) {
//     const answer = [];
//     const len = numbers.length;
//     for(let i = 0; i < len; i++){
//         let num = numbers.shift();
//         let pushed = false;
//         for(let j = 0; j < numbers.length; j++){
//             if(numbers[j] > num){
//                 answer.push(numbers[j])
//                 pushed = true;
//                 break;
//             }
//         }
//         if(!pushed){
//             answer.push(-1);
//         }
//     }
//     return answer;
// }
