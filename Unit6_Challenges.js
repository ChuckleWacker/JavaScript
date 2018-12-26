// Reverse array with an arrow function
const reverseArray = (arr) => {return arr.reverse()};
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)); 


// Iterate through array and log comment
const greetAliens = arr => {
      for (let i = 0; i < arr.length; i++) {
            console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
      }
}
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens)


// Iterate through array and .push() "baby" text with array item
const convertToBaby = arr => {
      const babyArray = [];
      for (let i = 0; i < arr.length; i++) {
            babyArray.push('baby ' + arr[i]);
      }
      return babyArray
}
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 


// "Smallest Power of Two" function
const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}
console.log(smallestPowerOfTwo(numbers)) 


//  politelyDecline arrow function
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
// declineEverything arrow function
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}
// acceptEverything arrow function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}


