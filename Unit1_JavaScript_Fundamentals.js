//String Interpolation is an easy way to concatenate strings with variables
let myName = "Daniel";
let myCity = "Olympia";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);


//TypeOf helps determine what the variable type is
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);


//My Age in Dog Years project
const myAge = 29; //Declare variable age to not change
let earlyYears = 2; //Declare variable to change

earlyYears *= 10.5;
console.log(earlyYears); //Outputs 21

laterYears = myAge - 2; //Subtract 2 years from myAge
console.log(laterYears); //Outputs 27
laterYears *= 4;
console.log(laterYears); //Outputs 108

myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears); //Outputs 21 + 108 = 129

myName = "Daniel".toLowerCase();
console.log(myName); //Outputs daniel

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
