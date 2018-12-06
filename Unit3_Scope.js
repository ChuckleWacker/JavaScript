const city = "New York City";  //Global scope variable

//Arrow Function
const logCitySkyline = () => {
  let skyscraper = "Empire State Building";  //Local scope variable
  return "The stars over the " + skyscraper + " in " + city;
};

//Call Arrow function with additional parenthesis
console.log(logCitySkyline());
