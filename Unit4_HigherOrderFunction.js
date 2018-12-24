//A higher-order function is a function that either accepts functions as parameters, returns a function, or both!

//MAKE A SHORTER NAME (functions as Data)
// Assign long named function as the variable to a new function which is shorter in name
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// invoke new function
is2p2(); 
// .name property helps us determine what function we assigned to is2p2, which is "checkThatTwoPlusTwoEqualsFourAMillionTimes"
console.log(is2p2.name); 




/EXAMPLE of creating a higher order function and calling it within a new function to check things like...
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;
// checks the time it took for the function to run, using this higher order function
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

function checkConsistentOutput(func, val) {
  let firstTry = func(val);
  let secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  } else {
    return "This function returned inconsistent results";
  }
};

console.log(checkConsistentOutput(addTwo, 1));
