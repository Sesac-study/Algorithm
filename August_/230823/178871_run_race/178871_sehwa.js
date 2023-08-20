function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (callings[i] === players[j]) {
        [players[j - 1], players[j]] = [players[j], players[j - 1]];
      } else continue;
    }
  }

  return players;
}
