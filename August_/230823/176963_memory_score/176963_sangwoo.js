const search = (ary, name) => {
    for (ele of ary) {
        if (ele.name === name) {
            return ele.money;
        }
    }
    return 0;
};

function solution(name, yearning, photo) {
    const arr = [];
    for (let i = 0; i < name.length; i++) {
        arr.push({ name: name[i], money: yearning[i] });
    }
    let answer = [];
    for (let array of photo) {
        let sum = 0;
        for (e of array) {
            sum += search(arr, e);
        }
        answer.push(sum);
    }

    return answer;
}
