'use strict';

let userName = prompt('What is your name?');
let score = 0;

alert(`Welcome to my site ${userName}! Enjoy this guessing game about me!`);

let questionOne = prompt('Do I have any children?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes'){
  alert('Wrong, people would have to find me not repellant.');
} else if (questionOne === 'n' || questionOne === 'no'){
  score++;
  alert('Correct, I have successfully managed to not breed.');
} else {
  alert('You didn\'t answer in the proper format');
}

let questionTwo = prompt('Am I a veteran?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes'){
  score++;
  alert('Correct, for some reason I chose to join the Marine Corps.');
} else if (questionTwo === 'n' || questionTwo === 'no'){
  alert('Wrong, I mean you had a 50/50 shot.');
} else {
  alert('You didn\'t answer in the proper format');
}

let questionThree = prompt('Do I eat pork?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes'){
  alert('Wrong, I don\'t dine on swine');
} else if (questionThree === 'n' || questionThree === 'no'){
  score++;
  alert('Correct, you realize pigs are smarter than dogs - right?');
} else {
  alert('You didn\'t answer in the proper format');
}

let questionFour = prompt('Am I orginally from Seattle?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes'){
  alert('Wrong, while the PNW if beautiful I am orginally from New England.');
} else if (questionFour === 'n' || questionFour === 'no'){
  score++;
  alert('Correct, I am orginally from Connecticut');
} else {
  alert('You didn\'t answer in the proper format');
}

let questionFive = prompt('Does Brian consume coffee?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes'){
  score++;
  alert('Correct, Brian can be a total jerk before he gets his coffee.');
} else if (questionFive === 'n' || questionFive === 'no'){
  alert('No. No. No. Brian is sadly quite addicted to caffine.');
} else {
  alert('You didn\'t answer in the proper format');
}

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

let answers = ['chickadee', 'spot', 'tater tot', 'chicory', 'petuna', 'rose', 'patches', 'mochi', 'dosa'];
let myNum2 = 'petuna';
let clueGuesses1 = 5;
console.log(!myNum2);

let userGuess1 = prompt(`What was Chickpea's name when we first got her? Choose your answer from the following list ${answers}`);
if (userGuess1 === myNum2) {
  alert('You WIN!');
} else {
  while (clueGuesses1 && userGuess1 !== myNum2) {
    if (userGuess1 !== myNum2) {
      userGuess1 = prompt(`Awww, Guess Again. The choices again were: ${answers}`);
      clueGuesses1--;
    }
    if (userGuess1 === myNum2) {
      score++;
      alert('You WIN!');
    }
    if (clueGuesses1 === 0) {
      alert(`Good try but the answer was ${myNum2}`);
    }
  }
}
if (userGuess === myNum){
  score++;
}
if (userGuess1 === myNum2){
  score++;
}
alert(`Thanks for answering ${userName}! You scored a ${score}/7`);

document.getElementById('nameScript').textContent='Thanks for visiting '+userName + '! I hope you learned something about me!';
