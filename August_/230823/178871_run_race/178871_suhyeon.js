function solution(players, callings) {
  const playerIdx = {};
  // 선수 인덱스를 담는 객체 생성
  for (let i = 0; i < players.length; i++) {
    playerIdx[players[i]] = i;
  } // { mumu: 0, soe: 1, ... , player: idx }

  callings.forEach((value) => {
    let currIdx = playerIdx[value]; // 선수의 최근 인덱스 변수 설정
    let frontPlayer = players[currIdx - 1];
    // 앞선 선수와 callings 선수 교환
    players[currIdx - 1] = players[currIdx];
    players[currIdx] = frontPlayer;

    // players 원소 교환 -> playerIdx 원소(인덱스) 교환
    playerIdx[value]--;
    playerIdx[players[currIdx]]++;
  });
  return players;
}
