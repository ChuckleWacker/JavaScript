//GLOBAL & LOCAL SCOPE EXAMPLE
const city = "New York City";  //Global scope variable

const logCitySkyline = () => {  //Arrow Function
  let skyscraper = "Empire State Building";  //Local scope variable
  return "The stars over the " + skyscraper + " in " + city;
};
console.log(logCitySkyline());  //Call Arrow function with additional parenthesis


//GLOBAL SCOPE EXAMPLE
const satellite = "The Moon";  //Global scope variable
const galaxy = "The Milky Way";  //Global scope variable
const stars = "North Star";  //Global scope variable

const callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}
console.log(callMyNightSky());


//LOCAL (BLOCK) SCOPE EXAMPLE, when a variable is defined with a block of code
const logVisibleLightWaves = () => {
  const lightWaves = "Moonlight";  //Block Scope Variable
  console.log(lightWaves);
};
logVisibleLightWaves();  //Call function and outputs "Moonlight"
console.log(lightWaves);  //Unable to log variable lightWaves outside of the function/block it exists in


//EXAMPLE OF GLOBAL SCOPE GETTING OVERWRITTEN BY LOCAL/BLOCK SCOPE
//  General rule of thumb is to limit usage of Global Variables to avoid scope pollution, which causes...
//  consumes namespace, can cause overlap in use of variables as shown below, difficulty managing variables.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = "Sirius";
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log(callMyNightSky());
console.log(stars);


//BEST PRACTICE WITH "TIGHT" SCOPING
//  Tightly scoping your variables will greatly improve your code in several ways:
//  1. It will make your code more legible since the blocks will organize your code into discrete sections.
//  2. It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
//  3. It's easier to maintain your code, since your code will be modular.
//  4. It will save memory in your code because it will cease to exist after the block finishes running.
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; //Define Variable within block/function
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
console.log(color); // ReferenceError, since color doesnt exist Globally
