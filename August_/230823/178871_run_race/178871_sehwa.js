function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    for (let j = 1; j < players.length; j++) {
      if (callings[i] === players[j]) {
        [players[j - 1], players[j]] = [players[j], players[j - 1]];
      } else continue;
    }
  }

  // callings[0] === players[1] 일치하면
  // 앞에 원소와 순서 변경

  // [a, b] = [b, a]

  // let a = players[0], b = players[1]
  // [players[0], players[1]] = [players[1], players[0]]

  return players;
}
