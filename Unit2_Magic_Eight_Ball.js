let userName = "Daniel";

//Ternary Expression
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "Will tommorrow rain?";
console.log(`${userName} asked: ${userQuestion}`);

//Generate variable with random number from Math Library
let randomNumber = Math.floor(Math.random() * 8);

//Variable to store eight ball number generated
let eigthBall = "";

//Switch Control Flow
switch (randomNumber) {
  case 0:
    eightBall = "Is that your wish?";
    break;
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "unclear";
    break;
}

console.log(eightBall);
