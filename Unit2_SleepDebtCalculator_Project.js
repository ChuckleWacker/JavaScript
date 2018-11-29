//If...Else Function for how much sleep each day I got
function getSleepHours (day) {
  if (day === "Sunday") {
    return 8;
  } else if (day === "Monday") {
   	return 8;
  } else if (day === "Tuesday") {
   	return 8;
  } else if (day === "Wednesday") {
   	return 8;
  } else if (day === "Thursday") {
   	return 8;
  } else if (day === "Friday") {
   	return 8;
  } else if (day === "Saturday") {
   	return 8;
  } else {
    return "Error";
  }
}

//Implicit Return of all hrs combined from getSleepHours
const getActualSleepHours = () => getSleepHours("Sunday") + getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday");

//Arrow Function of my ideal hours times 7 days a week
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

//Test Outputs
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

//Calculate Sleep Debt with Function Declaration & if...else statements
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect ${idealSleepHours} hrs of sleep!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours}hrs additional sleep than you needed!`);
  } else {
    console.log(`You should get atleast ${idealSleepHours - actualSleepHours}hrs additional rest!`)
  }
}

//Start Program by calling function
calculateSleepDebt();
