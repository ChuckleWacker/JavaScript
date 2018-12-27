// How you call the method in the object below
let myObj = {
  sayHello() {
    return 'Hello there!';
  }
}
myObj.sayHello()

// Object.assign() method can be used to copy all of the properties of an object into a new object

// Expression will evaluatae to "apples"
const refrigerator = {
  dairy: ['cheese', 'milk', 'sour cream'],
  temperature: 35,
  'produce drawer': {
    vegetables: ['lettuce', 'broccoli', 'peas'],
    fruit: ['apples', 'berries', 'grapes'] 
  }
}
refrigerator['produce drawer'].fruit[0] 

// A method is property with a function as its value.
// Objects store unordered data if any type as key-value pairs.

/* Evalues to:
numDoors
isDirty
color */

const car = {
  numDoors: 4,
  isDirty: true,
  color: 'red'
}
for (let key in car) {
  console.log(key)
}

// Creating object literal syntax
let myObject = {
  greeting: 'hello'
};

// Destructured assignment example
const myDog = {
  name: 'Tadpole',
  breed: 'mutt',
  color: 'tan',
  weight: 32
}
let {name} = myDog

// Add a property to existing object
let bikes = {
  schwinn: 'blue',
  trek: 'black'
}
bikes['specialized'] = 'red';
