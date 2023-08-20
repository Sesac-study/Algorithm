function solution(n) {
    let num = 0;
    let answer = [];
    while(n > 1){
        answer.push(n);
        
        if(n % 2 == 0){
        n = n / 2;
        } else {
        n = 3 * n + 1;        
        }
    }
    
    answer.push(n);
    
    return answer;
}