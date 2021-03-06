//Loops automatically iterate a block of code based on conditions.
//FOR loops are appropriate when looping a predetermined number of times.
//WHILE loops evaluate a condition for however long it’s true and the looping stops when the condition is false.
//DO...WHILE statements will run a code block at least once, then loop as long as a condition remains true
//Nested for loops allow us to run multiple for loops at once.

//FOR LOOP prints 'Instagram', 'Facebook', 'Twitter'
let socialMedia = ['Instagram', 'Facebook', 'Twitter'];
for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
	console.log(socialMedia[socialMediaIndex]);
};

//FOR LOOP prints "c 1 2 3 a 1 2 3 t 1 2 3"
//Each time the outer loop runs, the inner loop completes all iterations.
const animal = 'cat';
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
};

//FOR LOOP counts from 5 to 10
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
};

//FOR LOOP counter backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter)
};

//ARRAY FOR LOOP
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
};

//NESTED LOOP comparing two different arrays for the same number
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

//NESTED LOOP comparing two different arrays for the same followers name
const bobsFollowers = ["Dip", "Duck", "Dodge", "Dive"];
const tinasFollowers = ["Dip", "Dan", "Dodge"];
let mutualFollowers = [];  // write same names here using push()

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
};

//FOR LOOP vs WHILE LOOP
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
};

//WHILE LOOP that keeps updating the card until its a spade
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};


//DO WHILE LOOP that added cups of sugar while cupsAdded is less than CupsNeeded
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);


//FOR BREAK example
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
console.log('Orange you glad I broke out the loop!');

//FOR BREAK Example
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
