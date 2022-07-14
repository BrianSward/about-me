'use strict';

let userName = prompt('What is your name?');
let score = 0;

alert(`Welcome to my site ${userName}! Enjoy this guessing game about me!`);

function questionOne(){
  let answerOne = prompt('Do I have any children?').toLowerCase();

  if (answerOne === 'y' || answerOne === 'yes'){
    alert('Wrong, people would have to find me not repellant.');
  } else if (answerOne === 'n' || answerOne === 'no'){
    score++;
    alert('Correct, I have successfully managed to not breed.');
  } else {
    alert('You didn\'t answer in the proper format');
  }
}

function questionTwo() {
  let answerTwo = prompt('Am I a veteran?').toLowerCase();

  if (answerTwo === 'y' || answerTwo === 'yes'){
    score++;
    alert('Correct, for some reason I chose to join the Marine Corps.');
  } else if (answerTwo === 'n' || answerTwo === 'no'){
    alert('Wrong, I mean you had a 50/50 shot.');
  } else {
    alert('You didn\'t answer in the proper format');
  }
}

function questionThree() {
  let answerThree = prompt('Do I eat pork?').toLowerCase();

  if (answerThree === 'y' || answerThree === 'yes'){
    alert('Wrong, I don\'t dine on swine');
  } else if (answerThree === 'n' || answerThree === 'no'){
    score++;
    alert('Correct, you realize pigs are smarter than dogs - right?');
  } else {
    alert('You didn\'t answer in the proper format');
  }
}

function questionFour(){
  let answerFour = prompt('Am I orginally from Seattle?').toLowerCase();

  if (answerFour === 'y' || answerFour === 'yes'){
    alert('Wrong, while the PNW if beautiful I am orginally from New England.');
  } else if (answerFour === 'n' || answerFour === 'no'){
    score++;
    alert('Correct, I am orginally from Connecticut');
  } else {
    alert('You didn\'t answer in the proper format');
  }
}

function questionFive() {
  let answerFive = prompt('Does Brian consume coffee?').toLowerCase();

  if (answerFive === 'y' || answerFive === 'yes'){
    score++;
    alert('Correct, Brian can be a total jerk before he gets his coffee.');
  } else if (answerFive === 'n' || answerFive === 'no'){
    alert('No. No. No. Brian is sadly quite addicted to caffine.');
  } else {
    alert('You didn\'t answer in the proper format');
  }
}

function questionSix(){
  let myNum = 6;
  let clueGuesses = 3;
  console.log(!myNum);

  let userGuess = parseInt(prompt('Please choose a number between 1 - 11: '));
  if (userGuess === myNum) {
    alert('You WIN!');
  } else {
    while (clueGuesses && userGuess !== myNum) {
      if (userGuess > myNum) {
        userGuess = parseInt(prompt('You\'re too high - Guess Again.'));
        clueGuesses--;
      } else if (userGuess < myNum) {
        userGuess = parseInt(prompt('You\'re too low - Guess Again.'));
        clueGuesses--;
      } if (userGuess === myNum) {
        alert('You WIN!');
      }
      if (clueGuesses === 0) {
        alert(`Good try but the answer was ${myNum}`);
      }
    }
  }
  if (userGuess === myNum){
    score++;
  }
}

function questionSeven(){
  let answers = ['chickadee', 'spot', 'tater tot', 'chicory', 'petuna', 'rose', 'patches', 'mochi', 'dosa'];
  let myNum2 = 'petuna';
  let clueGuesses1 = 5;
  console.log(!myNum2);

  let userGuess1 = prompt(`What was Chickpea's name when we first got her? Choose your answer from the following list ${answers}`);
  console.log(userGuess1);
  console.log(myNum2);
  if (userGuess1 === myNum2) {
    alert('You WIN!');
  } else {
    while (clueGuesses1 && userGuess1 !== myNum2) {
      if (userGuess1 !== myNum2) {
        userGuess1 = prompt(`Awww, Guess Again. The choices again were: ${answers}`);
        clueGuesses1--;
      }
      if (userGuess1 === myNum2) {
        alert('You WIN!');
      }
      if (clueGuesses1 === 0) {
        alert(`Good try but the answer was ${myNum2}`);
      }
    }
  }
  if (userGuess1 === myNum2){
    score++;
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();


alert(`Thanks for answering ${userName}! You scored a ${score}/7`);

document.getElementById('nameScript').textContent='Thanks for visiting '+userName + '! I hope you learned something about me!';
