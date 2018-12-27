// Create empty object, add _players & _games properties with empty arrays, then add GETTER methods for _players and _games properties
let team = {
  _players: [],  // empty _players array
	_games: [],  // empty _games array
  
  // GETTER method for players
  get players() {
    return this._players;
  },
  
  // GETTER method for games
  get games() {
    return this._games;
  },
  
  // Method for adding players
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
  
  // Method for adding games
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game);
  },
};

// Add _players and _games properties as empty arrays
// team._players = []
// team._games = []

// Add 6 players including firstName, lastName, age
team.addPlayer("Pablo", "Sanchez", 11)
team.addPlayer("Danno", "Boog", 12)
team.addPlayer("Kory", "Kane", 13)
team.addPlayer("Steph", "Curry", 28)
team.addPlayer("Lisa", "Leslie", 44)
team.addPlayer("Bugs", "Bunny", 76)

// Add 6 games including opponent, teamPoints, opponentPoints
team.addGame("Broncos", 42, 27)
team.addGame("Rams", 14, 14)
team.addGame("Seahawks", 21, 3)

/* .ENTRIES saves keys & values into an array
const teamEntries = Object.entries(team)
console.log(teamEntries);
const _playersEntries = Object.entries(team._players)
console.log(_playersEntries);
const _gamesEntries = Object.entries(team._games)
console.log(_gamesEntries); */

// Console Log Players and Games
console.log(team.players)
console.log(team.games)
