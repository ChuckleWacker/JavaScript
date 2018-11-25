// If Statement
let sale = true; //If set to true, the condition below prints to screen.
if (sale) {
  console.log("Time to buy!");
}


//Else Statement
let sale = true;
sale = false;
if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}


//Else Statement with Comparison Operator
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

//Identity Operator checks if they are the same thing
'apples' === 'oranges' // false


//&& equals, || or, ! not
let mood = 'sleepy';
let tirednessLevel = 6;
//if mood equals sleepy and tirednesslevel greater than 8
if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
	console.log("not bed time yet"); 
}


//ShortCircuit Writing Example 1
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = "Stranger";
}
//The above is the same as below, we check if username exists first or use "stranger" as default
let defaultName = username || "Stranger";


//ShortCircuit Writing Example 2
let tool = 'marker';
let writingUtensil = tool || "pen";
console.log(`The ${writingUtensil} is mightier than the sword.`);


//Ternary Operators simplify if...else statements with ? :
//Ternary Operator Example 1
let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

//Ternary Operator Example 2
let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

//Ternary Operator Example 3
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


//Else If Example
let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
	console.log('It\'s fall! Leaves are falling!'); 
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


//Switch Example, uses cases instead of multiple If Then statements
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}
