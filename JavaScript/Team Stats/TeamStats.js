const team = {
  _players: [
    { firstName: "Marc", lastName: "Janssen", age: 23 },
    { firstName: "Harmen", lastName: "van der Zee", age: 23 },
    { firstName: "Luc", lastName: "van Deenen", age: 23 },
  ],
  _games: [
    { opponent: "Team A", teamPoints: 4, opponentPoints: 2 },
    { opponent: "Team B", teamPoints: 1, opponentPoints: 2 },
    { opponent: "Team C", teamPoints: 3, opponentPoints: 1 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    this._players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    this._games.push({
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    });
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
