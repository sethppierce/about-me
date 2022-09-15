'use strict';

console.log('Yo world');

let numRight = 0;

let userName = prompt('Hello! What is your name?');

alert(`Thanks for visiting my site ${userName}! Please answer these questions yes or no.`);

function quesOne() {

  let answerOne = prompt('Was I in the Army?').toLowerCase();

  if (answerOne === 'y' || answerOne === 'yes') {
    // console.log(`Sorry! That's wrong ${userName}`);
    alert(`Sorry! That's wrong ${userName}`);
  } else if (answerOne === 'n' || answerOne === 'no') {
    // console.log(`That's right ${userName}! I was in the Marine Corps`);
    alert(`That's right ${userName}! I was in the Marine Corps`);
    numRight++;
  }
}

quesOne();

function quesTwo() {

  let answerTwo = prompt('Have I ever left the US?').toLowerCase();

  if (answerTwo === 'y' || answerTwo === 'yes') {
    // console.log(`Good guess ${userName}! I have! I've been to Norway!`);
    alert(`Good guess ${userName}! I have! I've been to Norway!`);
    numRight++;
  } else if (answerTwo === 'n' || answerTwo === 'no') {
    // console.log(`Sorry ${userName}! That's wrong. I've been to Norway!`);
    alert(`Sorry ${userName}! That's wrong. I've been to Norway!`);
  }
}

quesTwo();

function quesThree() {

  let answerThree = prompt('Is cereal a soup?').toLowerCase();

  if (answerThree === 'y' || answerThree === 'yes') {
    // console.log(`That's the only right answer, thank you for being smart ${userName}!`);
    alert(`That's the only right answer, thank you for being smart ${userName}!`);
    numRight++;
  } else if (answerThree === 'n' || answerThree === 'no') {
    //   console.log(`Oof ${userName}, it most definitely is a soup.`);
    alert(`Oof ${userName}, it most definitely is a soup.`);
  }
}

quesThree();

function quesFour() {

  let answerFour = prompt('Am I from Georgia??').toLowerCase();

  if (answerFour === 'y' || answerFour === 'yes') {
    // console.log(`Nope ${userName}! I am from Louisiana, but I do live in Georgia!`);
    alert(`Nope ${userName}! I am from Louisiana, but I do live in Georgia!`);
  } else if (answerFour === 'n' || answerFour === 'no') {
    // console.log(`Good guess ${userName}! I am from Louisiana but I do live in Georgia now!`);
    alert(`Good guess ${userName}! I am from Louisiana but I do live in Georgia now!`);
    numRight++;
  }
}

quesFour();

function quesFive(){

  let answerFive = prompt('Was I a Diesel Mechanic before this?').toLowerCase();

  if (answerFive === 'y' || answerFive === 'yes') {
    // console.log(` Yes I was ${userName}! I was also an Ammunition Technician!`);
    alert(` Yes I was ${userName}! I was also an Ammunition Technician!`);
    numRight++;
  } else if (answerFive === 'n' || answerFive === 'no') {
    // console.log(`Sorry ${userName} I was a Diesel Mechanic! I was also an Ammunition Technician!`);
    alert(`Sorry ${userName} I was a Diesel Mechanic! I was also an Ammunition Technician!`);
  }
}

quesFive();

function quesSix() {

  let ranNum = Math.floor((Math.random() * 100) + 1);

  console.log(ranNum);

  let answerSix = prompt('Please guess a number from 1 - 100, You have 4 guesses.');

  answerSix = Number(answerSix);

  let i = 3;

  while (answerSix !== ranNum) {
    if (isNaN(answerSix)) {
      answerSix = prompt('Please guess a NUMBER from 1 - 100');
    } else if (answerSix < ranNum && i > 0) {
      answerSix = prompt(`Oops, too low. Guess again. You have ${i} guesses remaining. `);
      i--;
    } else if (answerSix > ranNum && i > 0) {
      answerSix = prompt(`Too High! Guess again! You have ${i} guesses remaining.`);
      i--;
    } else if (i === 0) {
      alert(`Sorry! The answer was ${ranNum}!`);
      break;
    }
  }

  if (answerSix === ranNum) {
    alert(`That's right ${userName}! Lucky guess!`);
    numRight++;
  }
}

quesSix();

function quesSeven(){

  let answerArr = ['bengals', 'saints'];

  let answerSeven = prompt('Which NFL teams do I like?').toLowerCase();

  for (let n = 5; n > 0; n--) {
    if (answerSeven === answerArr[0]) {
      alert(`They aren't my favorite but I do like the bengals, my favorite team is ${answerArr[1]}`);
      numRight++;
      break;
    } else if (answerSeven === answerArr[1]) {
      alert(`They are my favorite team! But I also root for the ${answerArr[0]}`);
      numRight++;
      break;
    } else if (answerSeven !== answerArr[0] || answerSeven !== answerArr[1]) {
      answerSeven = prompt(`Sorry guess again! You have ${n} guesses remaining!`);
    }
  }
}

quesSeven();

let scorePer = Math.round((numRight / 7) * 100);


alert(`Thanks for taking my quiz ${userName}! You got ${numRight} questions out of 7 correct! Your score is ${scorePer}%!`);
