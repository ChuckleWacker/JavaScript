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


//FOREACH try using the arrow function, option #2
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

