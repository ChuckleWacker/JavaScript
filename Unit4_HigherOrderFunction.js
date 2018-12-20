//A higher-order function is a function that either accepts functions as parameters, returns a function, or both!

//MAKE A SHORTER NAME (functions as Data)
// Assign long named function as the variable to a new function which is shorter in name
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// invoke new function
is2p2(); 
// .name property helps us determine what function we assigned to is2p2, which is "checkThatTwoPlusTwoEqualsFourAMillionTimes"
console.log(is2p2.name); 


