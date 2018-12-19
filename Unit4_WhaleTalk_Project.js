//WHALE TALK Translator

// variable to translate
let input = "turpentine and turtles";

// array of vowels to be extracted from input
const vowels = ["a", "e", "i", "o", "u"];

// array to store vowels from input string
let resultArray = [];

// for loop to compare the text of input variable to vowels array
for (i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    	if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
  //console.log("i is " + i); //count iterations done to verify for loop works
}

// Print resultArray joined and all UpperCase
console.log(resultArray.join("").toUpperCase());  // Should print "UUEEIEEAUUEE"
