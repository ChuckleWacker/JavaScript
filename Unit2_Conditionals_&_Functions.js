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
