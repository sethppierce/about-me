'use strict';

console.log('Yo world');

let userName = prompt('Hello! What is your name?');

alert(`Thanks for visiting my site ${userName}! Please answer these questions yes or no.`);

let answerOne = prompt('Was I in the Army?').toLowerCase();

if (answerOne === 'y' || answerOne === 'yes'){
  // console.log(`Sorry! That's wrong ${userName}`);
  alert(`Sorry! That's wrong ${userName}`);
}else if(answerOne === 'n' || answerOne === 'no'){
  // console.log(`That's right ${userName}! I was in the Marine Corps`);
  alert(`That's right ${userName}! I was in the Marine Corps`);
}

let answerTwo = prompt('Have I ever left the US?').toLowerCase();

if (answerTwo === 'y' || answerTwo === 'yes'){
  // console.log(`Good guess ${userName}! I have! I've been to Norway!`);
  alert(`Good guess ${userName}! I have! I've been to Norway!`);
}else if (answerTwo === 'n' || answerTwo === 'no'){
  // console.log(`Sorry ${userName}! That's wrong. I've been to Norway!`);
  alert(`Sorry ${userName}! That's wrong. I've been to Norway!`);
}

let answerThree = prompt('Is cereal a soup?').toLowerCase();

if (answerThree === 'y' || answerThree === 'yes'){
  // console.log(`That's the only right answer, thank you for being smart ${userName}!`);
  alert(`That's the only right answer, thank you for being smart ${userName}!`);
}else if(answerThree === 'n' || answerThree === 'no'){
//   console.log(`Oof ${userName}, it most definitely is a soup.`);
  alert(`Oof ${userName}, it most definitely is a soup.`);
}


let answerFour = prompt('Am I from Georgia??').toLowerCase();

if (answerFour === 'y' || answerFour === 'yes'){
  // console.log(`Nope ${userName}! I am from Louisiana, but I do live in Georgia!`);
  alert(`Nope ${userName}! I am from Louisiana, but I do live in Georgia!`);
}else if(answerFour === 'n' || answerFour === 'no'){
  // console.log(`Good guess ${userName}! I am from Louisiana but I do live in Georgia now!`);
  alert(`Good guess ${userName}! I am from Louisiana but I do live in Georgia now!`);
}

let answerFive = prompt('Was I a Diesel Mechanic before this?').toLowerCase();

if (answerFive === 'y' || answerFive === 'yes'){
  // console.log(` Yes I was ${userName}! I was also an Ammunition Technician!`);
  alert(` Yes I was ${userName}! I was also an Ammunition Technician!`);
}else if(answerFive === 'n' || answerFive === 'no'){
  // console.log(`Sorry ${userName} I was a Diesel Mechanic! I was also an Ammunition Technician!`);
  alert(`Sorry ${userName} I was a Diesel Mechanic! I was also an Ammunition Technician!`);
}

alert(`Thanks for taking my quiz ${userName} enjoy my site!`);

