/*ex01: output your name
console.log("Umar")
---------------------------------------*/
/*ex02: read the name of your user and 
print it 
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log(userName);
---------------------------------------*/
/*ex03: welcome your user
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome '+ userName +'!');
---------------------------------------*/
/*ex05: print right/wrong if greater than 25
var readlineSync = require('readline-sync');
var question = readlineSync.question('Are you older than 25 ?');

if(question==="yes"){
  console.log("You are Right")
}
else {
  console.log("You are Wrong ")
}
---------------------------------------*/
/*ex06: increment score if the right answer
var readlineSync = require('readline-sync');
var score =0;
var question = readlineSync.question('Are you older than 25 ?');

if(question==="yes"){
  console.log("You are Right")
  score=score+1;
  console.log("Your Score is",score)
}
else {
  console.log("You are Wrong ")
  score=score-1;
  console.log("You Score :",score)
}

---------------------------------------*/

/*ex07: function to add two numbers
function add (parameterOne, parameterTwo) {
 outputValue=parameterOne+parameterTwo;
  return outputValue;
}
var sum =add(2,5);
console.log ("The sum of 2 and 5 is ",sum );
--------------------------------------- */

/*ex08: function to check the answer
var readlineSync = require('readline-sync');
var score =0;
function quiz (question, answer) {
  var userAnswer = readlineSync.question(question);
  if (answer===userAnswer){
    console.log("you are right");
    score=score+1;
    console.log ("You Score is ", score);
  }  
  else{
    console.log("you are Wrong");
    score=score-1;
    console.log ("You Score is ", score);
  }
}

quiz("Are you my friend Answer it in yes or now :","yes");
quiz("Are you my bestfiend :","yes");

--------------------------------------- */


/*
ex09: print your name 5 times

for (var i=1; i<6; i++) {
  console.log("Umar")
}
--------------------------------------- */

/*
homework: star pattern

for (let i = 1; i <= 5; i++) {
  var line = '';
  for (let j = 1; j <= i; j++) {
    line =line+'*';
  }
  console.log(line);
}

Bonus :
for (let i = 1; i <= 5; i++) {
  var line = '';
  for (let j = 5; j >= i; j--) {
    line =line+'*';
  }
  console.log(line);
}

--------------------------------------- */
/*
ex10: list grocery items to buy
var arraygrocery = ["Eggs","Followers","Milk","Apple","Salt"];
console.log("First Item :", arraygrocery[0]);
console.log("First Item :", arraygrocery[2]);
console.log("First Item :", arraygrocery[arraygrocery.length-1]);
--------------------------------------- */

/*ex11: print every item on the list
var arraygrocery = ["Eggs","Followers","Milk","Apple","Salt"];

for (var i=0; i<5; i++) {
 console.log("array Items :", arraygrocery[i],"\n");
}
--------------------------------------- */
/*ex12: club info about a superhero together
superHero=
{
name:"Ali",
country:"Pak"  
}
console.log(superHero.name);
--------------------------------------- */

/* ex 13

questionOne = {
  question: "Who is my favorite superhero?",
  answer: "Dhruv",
}

questionTwo = {
  question: "Which is my favorite sad song?",
  answer: "Channa Meraya",
}

var questionsarr =[questionOne,questionTwo]
console.log(questionsarr[0].question)
*/


/*ex14: club everything to make the game 


//Creating questions database 


const chalk = require("chalk");


questionOne = {
  question: chalk.yellow.underline.bold("Are NFTs a type of cryptocurrency?\nA) Yes\nB) No\n"),
  answer: "B",
}

questionTwo = {
  question: chalk.yellow.underline.bold("Can NFTs be used to authenticate and prove ownership of digital assets?\nA) Yes\nB) No\n"),
  answer: "A",
}

questionThree = {
  question: chalk.yellow.underline.bold("Do NFTs only exist on the blockchain?\nA) Yes\nB) No\n"),
  answer: "A",
}

questionFour = {
  question: chalk.yellow.underline.bold("Can NFTs be traded on online marketplaces?\nA) Yes\nB) No\n"),
  answer: "A",
}

questionFive = {
  question: chalk.yellow.underline.bold("Are NFTs a new concept that was introduced in the last decade?\nA) Yes\nB) No\n"),
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

 */
