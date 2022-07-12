'use strict';

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Enjoy this guessing game about me!`);

let questionOne = prompt('Do I have any children?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes'){
  alert('Wrong, people would have to find me not repellant.');
} else if (questionOne === 'n' || questionOne === 'no'){
  alert('Correct, I have successfully managed to not breed.');
} else {
  alert('You didn\'t answer in the proper format');
}

let questionTwo = prompt('Am I a veteran?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes'){
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
  alert('Correct, you realize pigs are smarter than dogs - right?');
} else {
  alert('You didn\'t answer in the proper format');
}

let questionFour = prompt('Am I orginally from Seattle?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes'){
  alert('Wrong, while the PNW if beautiful I am orginally from New England.');
} else if (questionFour === 'n' || questionFour === 'no'){
  alert('Correct, I am orginally from Connecticut');
} else {
  alert('You didn\'t answer in the proper format');
}

let questionFive = prompt('Does Brian consume coffee?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes'){
  alert('Correct, Brian can be a total jerk before he gets his coffee.');
} else if (questionFive === 'n' || questionFive === 'no'){
  alert('No. No. No. Brian is sadly quite addicted to caffine.');
} else {
  alert('You didn\'t answer in the proper format');
}

alert(`Thanks for answering ${userName}!`);

document.getElementById('nameScript').textContent='Thanks for visiting '+userName + '! I hope you learned something about me!';
