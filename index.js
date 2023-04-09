
//Creating questions database 

const chalk = require("chalk");


questionOne = {
  question: chalk.yellow.underline.bold("Have I achieved a goal that I set for myself recently? \nA) Yes\nB)No\n"),
  answer: "B",
}

questionTwo = {
  question: chalk.yellow.underline.bold("Am I taking good care of my physical health? \nA) Yes\nB) No\n"),
  answer: "A",
}

questionThree = {
  question: chalk.yellow.underline.bold("Do I have a positive outlook on life? \nA) Yes\nB) No\n"),
  answer: "A",
}

questionFour = {
  question: chalk.yellow.underline.bold("Have I learned something new in the past week? \nA) Yes\nB) No\n"),
  answer: "A",
}

questionFive = {
  question: chalk.yellow.underline.bold("Am I satisfied with my current job or career path? \nA) Yes\nB) No\n"),
  answer: "A",
}

var questionsarr = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var readlineSync = require('readline-sync');
var score = 0;

//function definition
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (answer.toUpperCase() === userAnswer.toUpperCase()) {
    console.log(chalk.green.bgGreen.bold("You are right!"));
    score = score + 1;
    console.log("Your score is ", score);
  } else {
    console.log(chalk.red.bgRed.bold("You are wrong!"));
    score = score - 1;
    console.log("Your score is ", score);
  }
}

for (var i = 0; i < questionsarr.length; i++) {
  quiz(questionsarr[i].question, questionsarr[i].answer);
}

console.log(chalk.yellow.bold("Your final score is ", score));
