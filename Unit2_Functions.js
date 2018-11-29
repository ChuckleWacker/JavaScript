//Console Log Functions
function getReminder() {
  console.log("Water the plants.");
}
function greetInSpanish() {
  console.log("Buenas Tardes.");
}
getReminder(); //Outputs "Water the plants."
greetInSpanish(); //Outputs "Buenas Tardes"


//Default Parameter Functions
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList(); //Outputs the assigned default parameters since nothing was specified
makeShoppingList("lager", "ipa", "stout"); //Outputs the parameters I passed throught he function


//Return Functions
function monitorCount(rows, columns) {
  return rows * columns;
}
let numOfMonitors = monitorCount(5, 4); //Assigned returned value from function to new variable declared
console.log(numOfMonitors); //Outputs 20


//Helper Functions (Using a function within a function)
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost); //Outputs 4000


//Function Expression Example (omits the naming of the function and immediately assigned to variable). Called again by variable name.
const plantNeedsWater = function(day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
}
console.log(plantNeedsWater("Tuesday")); //Outputs False


//Arrow Function Example (same as above but instead of stating "function" you omit this and use => arrow after the parameters
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


//Implicit Return Example (takes the Arrow Function for single parameters to a much cleaner/refactored style)
//This (or the example above)
const plantNeedsWater = (day) => {
  day === "Wednesday" ? true : false;
}
//Turns into this
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
