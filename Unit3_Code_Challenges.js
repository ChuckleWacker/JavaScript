// Can I Vote function
function canIVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(canIVote(19)) // Prints true
console.log(canIVote(17)) // Prints false


// Agree/Disagree function
function agreeOrDisagree(firstString, secondString) {
  if (firstString === secondString) {
    return "You agree!";
  } else {
    return "You disagree!"
  }
}
console.log(agreeOrDisagree("yep", "yep")) //Prints "You agree!"
console.log(agreeOrDisagree("no", "nope")) //Prints "You disagree!"


// Life Phase function
function lifePhase(age) {
  if (age >= 0 && age <= 3) {
    return "baby";
  } else if (age >= 4 && age <= 12) {
    return "child";
  } else if (age >= 13 && age <= 19) {
    return "teen";
  } else if (age >= 20 && age <= 64) {
    return "adult";
  } else if (age >= 65 && age <= 140) {
    return "senior citizen";
  } else {
    return "This is not a valid age";
  }
}
console.log(lifePhase(0)) //Print 'baby'
console.log(lifePhase(4)) //Print 'child'
console.log(lifePhase(13)) //Print 'teen'
console.log(lifePhase(20)) //Print 'adult'
console.log(lifePhase(65)) //Print 'senior citizen'
console.log(lifePhase(150)) //Print 'This is not a valid age'


// Final Grade Average function:
function finalGrade(grade1, grade2, grade3) {
  if (grade1 > 100 || grade2 > 100 || grade3 > 100 || grade1 < 0 || grade2 < 0 || grade3 < 0) {
    return "You have entered an invalid grade."
  }
  
  let average = (grade1 + grade2 + grade3) / 3;

  if (average >= 0 && average <= 59) {
    return "F";
  } else if (average >= 60 && average <= 69) {
    return "D";
  } else if (average >= 70 && average <= 79) {
    return "C";
  } else if (average >= 80 && average <= 89) {
    return "B";
  } else if (average >= 90 && average <= 100) {
    return "A";
  } else {
    return "Error";
  }
}
console.log(finalGrade(110, 105, 130)) // Print 'You have entered an invalid grade.'
console.log(finalGrade(1, 2, 3)) // Print 'F'
console.log(finalGrade(61, 62, 63)) // Print 'D'
console.log(finalGrade(79, 72, 75)) // Print 'C'
console.log(finalGrade(89, 82, 85)) // Print 'B'
console.log(finalGrade(99, 92, 95)) // Print 'A'


// Reporting For Duty function:
function reportingForDuty(rank, lastName) {
  return `${rank} ${lastName} reporting for duty!`;
}
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'


//Roll Dice function
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = (Math.random()) * 6 + 1
    let die2 = (Math.random()) * 6 + 1
    return die1 + die2
}
console.log(rollTheDice()) //Print random number


//Calculate Weight By Planet function
function calculateWeight(earthWeight, planet) {
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
    case "Venus":
      return earthWeight * 0.907;
    case "Mars":
      return earthWeight * 0.377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
}
console.log(calculateWeight(100, 'Jupiter')) // Print 236


//Truthy or Falsey arrow function
const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}


//Truthy or Falsey declaration function
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}

//Truthy or Falsey ternary function
const truthyOrFalsy = value => value ? true : false


//Calculate Imaginary Friends whichis 33% of your real friends function
function numImaginaryFriends(totalFriends) {
  return Math.round(totalFriends * .33);
}
console.log(numImaginaryFriends(18)) // Print 6


//Sentence function
function sillySentence(string1, string2, string3) {
  return `I am so ${string1} because I ${string2} coding! Time to write some more awesome ${string3}!`;
}
console.log(sillySentence('excited', 'love', 'functions')) //Print "I am so excited because I love coding! Time to write some more awesome functions!


//How Old function (function expression w/ string interpolation)
const howOld = (age, year) => {
// The following two lines make it so that our function always knows the current year.
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}


//What Relation DNA function
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}
console.log(whatRelation(34)) //Print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3)) // Print 'You are likely 2nd cousins.'


//Tip Calculator function (case function)
function tipCalculator(quality, total) {
  switch (quality) {
    case "bad":
      return total * .05;
    case "ok":
      return total * .15;
    case "good":
      return total * .20;
    case "excellent":
      return total * .30;
    default:
      return total * .18;
  }
}
console.log(tipCalculator("good", 100)) //should return 20


//Emoticon string function
function toEmoticon(string1) {
  switch (string1) {
    case "shrug":
      return `|_{"}_|`;
    case "smiley face":
      return `:)`;
    case "frowny face":
      return `:(`;
    case "winky face":
      return `;)`;
    case "heart":
      return `<3`;
    default:
      return `|_(* ~ *)_|`;
  }
}
console.log(toEmoticon("whatever")) //Print  '|_(* ~ *)_|'
