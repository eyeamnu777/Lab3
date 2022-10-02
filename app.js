'use strict';

console.log('Hey world Eye Am Nù');

let visitorname = prompt('What is your name?');

alert(`You are now entering a Nù dimension ${visitorname}! Guess yes or no to the following questions`);

let questionOneGuess = prompt('Do I have a pet?' + 'Yes or no').toLowerCase();

if (questionOneGuess === 'y' || questionOneGuess === ' yes ') {
  alert('You are correct.'); score++;
} else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
  alert('Sorry, answer incorrect');
}

questionOneGuess();

let questionTwoGuess = prompt('Did I graduate college?' + 'Yes or no').toLowerCase();

if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
  alert('Ding Ding Ding!'); score++;
} else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
  alert('Nope, not quite');
}


questionTwoGuess();

let questionThreeGuess = prompt('Are you present?' + 'Yes or No.').toLowerCase();

if (questionThreeGuess === 'y' || questionThreeGuess === ' yes ') {
  alert('You are correct.'); score++;
} else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
  alert('Ahh ah ah. Try again.');
}

questionFourGuess();
let questionFourGuess = prompt('Green is my favorite color.' + 'Yes or no.').toLowerCase();

if (questionFourGuess === 'y' || questionFourGuess === ' yes ') {
  alert('You are correct.'); score++;
} else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
  alert('Almost, not quite');
}


questionFourGuess();


let questionFiveGuess = prompt('Green is my favorite color. ' + 'Yes or no.').toLowerCase();

if (questionFiveGuess === 'y' || questionFiveGuess === ' yes ') {
  alert('You are correct.'); score++;
} else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
  alert('Last guess.');
}

questionFiveGuess();

let num = 17;
// let count = 0;

function questionSixGuess() {
  for (let i = 0; i < 4; i++) {
    let question6Guess = Number(prompt('Guess a number from 10 - 30.'));
    if (question6Guess === num) {
  
      // console.log(`${userName}'s guess is correct!`);
      alert('You are CORRECT!'); score++;
      break;
    } else if (question6Guess < num) {
      alert('Too low!');
      
    } else if (question6Guess > num) {
      alert('Too high!');
    
    }
    alert(`The number I have is ${num}`);
  }
}

questionSixGuess();


let guessChance = 6;
let correctAns = false
let favoriteFruit = ['mango', 'blueberry', 'banana', 'orange', 'peach'];
function questionSevenGuess() {
  for (let i = 0; i <6; i++) {
    let question7Guess = prompt(`Alright ${userName}, you only have 6 tries! Try to a favorite fruit of mine!`).toLowerCase();
    for (let j = 0; j < arr.length; j++) {
      if (question7Guess === favoriteFruit[j]) {
        score++;
        alert(`Congrats ${userName}!I do love ${question7Guess}!`);
        correctAns = true;
        break;
      }
    } if (correctAns === true){
      break;
  }alert(`That's a nice try. Here are my favorites: ${favoriteFruit[0]}, ${favoriteFruit[1]}, ${favoriteFruit[2]}, ${favoriteFruit[3]}, and ${favoriteFruit[4]}. `);
}

questionSevenGuess();

alert(`Say cheese. Participation much obliged ${visitorname}. You got ${score} correct answers out of 7! Nice!`)

// Me llama Nù Harley and I only took a couple of classes of Spanish in high school. What's funny is I got in trouble in my junior/senior year of college for overly participating; how funny is that. I graduated from The Central State University, a historically black university, with a Bachelor's Degree of Science in Psychology and a minor in Business Administration. Always enjoyed school and a garden tool for knowledge. I love the brain and all of its functions.  Out of college I started out as a substitute teacher at a local city high school by my school and eventually assisted younger grade levels. I fell for the first graders as I had pessismistic thoughts. Firt corporate job was with Huntington National Bank as a teller.  A goal I have is to become the most thorough, efficient web developer/coder I work myself to be. Networking is my second highest priority aside from learning code. Lastly, creating a legacy for generations after me.
