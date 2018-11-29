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

