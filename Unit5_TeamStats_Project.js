// Create empty object
let team = {
  
};

// Add _players and _games properties as empty arrays
team._players = []
team._games = []

// Add 3 players including firstName, lastName, age
team._players = [
  {
    firstName: "Pablo",
    lastName: "Sanchez",
    age: 11
  },
  {
  	firstName: "Danno",
  	lastName: "Boog",
  	age: 12
  },
  {
    firstName: "Kory",
    lastName: "Kane",
    age: 13   
  }
]

// Add 3 games including opponent, teamPoints, opponentPoints
team._games = [
  {
    opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27
  },
  {
		opponent: "Rams",
    teamPoints: 14,
    opponentPoints: 14
  },
  {
    opponent: "Seahawks",
    teamPoints: 21,
    opponentPoints: 3   
  }
]

// .ENTRIES saves keys & values into an array
const teamEntries = Object.entries(team)
console.log(teamEntries);
const _playersEntries = Object.entries(team._players)
console.log(_playersEntries);
const _gamesEntries = Object.entries(team._games)
console.log(_gamesEntries);
