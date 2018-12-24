//FOREACH method, does function to each item in current array
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//MAP method, creates new array usig old array and function
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

//FILTER method, creates new array by filtering out items based on function
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

//FINDINDEX method, returns first element that evaluates as true, if nothing is found then returns -1
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal == "elephant";
})
console.log(foundAnimal); // 7
console.log(animals[foundAnimal]); // elephant

const startsWithS = animals.findIndex(animal => {
  return animal[0] == "s";
})
console.log(startsWithS); // 3
console.log(animals[startsWithS]); // seal 

//REDUCE method, returns a single value after iterating through the elements of an array.
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ' + accumulator);
  console.log('The value of currentValue: ' + currentValue);
  return accumulator + currentValue;
}, 10)
console.log(newSum); // Prints 16, or 26 if we added 10 as the second argument to set a start number

//SOME & EVERY methods, check if there are "some or everthing" of something
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// SOME
console.log(words.some((word) => { return word.length < 6 })); // True
// Use filter to create a new array of words with more than 6 characters
const interestingWords = words.filter(word => { return word.length > 5 });
// EVERY
console.log(interestingWords.every((word) => { return word.length > 5 } )); // True


// ************************************************************* //

//MORE EXAMPLES:
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

//  forEach method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// filter method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// reduce method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)

// map method that will return a new array
const smallerNums = nums.map(num => num - 5);

// every (or some) method that will return a boolean value
nums.every(num => num < 0);


// ************************************************************* //


//FOREACH Examples: use the arrow function, option #2
//FOREACH option #1
groceries.forEach(function(groceryItem) {
  console.log(" - " + groceryItem);
});

//FOREACH option #2 - We can pass a callback for .forEach() is to use arrow function syntax.
groceries.forEach(groceryItem => console.log(groceryItem));

//FOREACH option #3 - We can also define a function beforehand to be used as the callback function.
function printGrocery(element){
  console.log(element);
}
groceries.forEach(printGrocery);


//MAP Examples
// Example #1: Create the secretMessage array below
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
  return animal[0];
})
console.log(secretMessage.join('')); //Prints HelloWorld

// Example #2: Create the smallNumbers array below
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumber => {
  return bigNumber / 100;
})
console.log(smallNumbers); //Prints [1, 2, 3, 4, 5]


//FILTER Examples
// Example #1: call .filter() on words below
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
const shortWords = words.filter(word => {
  return word.length < 6;
});
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

// Example #2: Call .filter() on randomNumbers below
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(randomNumber => {
  return randomNumber < 250;
})
console.log(randomNumbers); // 375, 200, 3.14, 7, 13, 852
console.log(smallNumbers); // 200, 3.14, 7, 13

// Example #3: Call .filter() on favoriteWords below
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
})
console.log(favoriteWords); // nostalgia, hyperbole, fervent, esoteric, serene
console.log(longFavoriteWords); // nostalgia, hyperbole, esoteric
