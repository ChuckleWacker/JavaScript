//Starter Object A
let spaceship = {
  homePlanet: "Earth",
  "Fuel Type": "diesel",
  color: "silver",
  numCrew: 5,
  "Secret Message": "Discover life outside of Earth."
  flightPath: ["Venus", "Mars", "Saturn"]
};

// DOT Notation to access Object A's properties
let crewCount = spaceship.numCrew
console.log(crewCount)
let planetArray = spaceship.flightPath
console.log(planetArray)

// BRACKET Notation to access Object A's properties
let isActive = spaceship["Active Mission"]
console.log(isActive) // true, uses bracket notation
let propName =  'Active Mission'; // variable with object key's name
console.log(spaceship[propName]) // true, uses bracket notation & variable

// NEW/UPDATE/DELETE Object A's properties
spaceship.color = "glorious gold" // Update color property
spaceship.numEngines = 10 // Add new object property
delete spaceship["Secret Mission"] // Delete object property
console.log(spaceship) 

// FUNCTIONS Added as object properties
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = {
  retreat () {console.log(retreatMessage)},
  takeOff () {console.log("Spim... Borp... Glix... Blastoff!")}
}
console.log(alienShip.retreat())
console.log(alienShip.takeOff())


// Starter Object B, has nested objects
let spaceship = {
  passengers: [{name: 'Space Dog'}], 
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0]; // returns "cookies"
let firstPassenger = spaceship.passengers[0]; // returns { name: 'Space Dog' }


// Functions that update an object using passby reference
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
let greenEnergy = (obj) => {obj["Fuel Type"] = "avocado oil"} // Updates Fuel Type of object
let remotelyDisable = (obj) => {obj.disabled = true} // Updates disabled object property to true
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship)
