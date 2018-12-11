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


