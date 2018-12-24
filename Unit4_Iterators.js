//FOR EACH method
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//MAP Method
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

//FILTER Method
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});


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
