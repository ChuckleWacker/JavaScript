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


// Looping through Objects
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// Iterates through spaceship.crew and logs crew roles/names
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};
// Iterates through spaceship.crew and logs crews names/degrees
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};



// THIS keyword allows a method to access other properties of an object, otherwise you get an undefined error
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  },
};
console.log(robot.provideInfo());


// DONT USE ARROW FUNCTIONS inside objects, they cause issues 
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}
robot.checkEnergy();  // Energy is currently at 100%


// GETTERS method, get and return internal properties of an object
// Getters can perform an action on the data when getting a property.
// Getters can return different values using conditionals.
// In a getter, we can access the properties of the calling object using this.
// The functionality of our code is easier for other developers to understand.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};
console.log(robot.energyLevel);


// SETTER methods which reassign values of existing properties within an object
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);


// FACTORY functions
