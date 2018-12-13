//Define and Print array
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);


//Define and Print array
const hobbies = ["gaming", "coding", "travel"];
console.log(hobbies);


//Accessing Elements in Array
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem); //Print "Fortune favor the brave"
console.log(famousSayings[2]) //Print "Where there is love there is life"
console.log(famousSayings[3]) //undefined as tehre is nothing in this spot in the array


//Update specific items in array
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = "avocados";
console.log(groceryList); //Prints "avocados as second array item

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = "Mayo"; //Update Ketchup to Mayo
console.log(condiments);
condiments = ["Mayo"]; //reassign whole array to just be "Mayo"
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = "Spoon";
console.log(utensils);



//.length() how many elements in array
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); //Prints 3


//.push() adds to an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push("fold clothes", "walk dogs"); //Add two new items to array
console.log(chores); //array now has 5 items


//.pop() removes last element from an array
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();  //Removes last element of array "mop floor"
console.log(chores);


//.shift() removes first item from array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(); //Removes first item from array
console.log(groceryList);

//.unshift() add's to the first item in array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.unshift("popcorn"); //Add "popcorn" as first item in array
console.log(groceryList);

//slice(index1, index2) outputs specific items specified as a range from the array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1, 4)); //Outputs array elements at specified index's
console.log(groceryList); //slice doesnt mutate/alter the actual array

//indexOf("string") finds the index of the string from the array
const pastaIndex = groceryList.indexOf("pasta"); //assign index to variable
console.log(pastaIndex); //Outputs the index of the search parameter

//Arrays can be modified using a function
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept); //will update last item in array "mutated" to "MUTATED" per function
console.log(concept);
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept); //will remove last item in array per functions usage of .pop()
console.log(concept);


//Nested Arrays
let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1]; //First index accesses [5, 6], next index accesses 6.
console.log(target); //Prints 6
