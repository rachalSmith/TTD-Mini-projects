// USE FORMATTING
// USE FORMATTING
// USE FORMATTING


// all functions should do one thing, and one thing only.
// functions should either return something or change something
// functions should never return something AND change something


// global constants at the top in capitals
// if you write a string more than once, lift it up here and pass them around
// like this
const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

// this name was incorrect, it doesn't get anything, it validates it

// YOU'VE .toUpperCase() BUT THE GLOBAL V IS LOWER?
const validateUserChoice = (userInput) => {
  if (userInput === ROCK || userInput === PAPER || userInput === SCISSORS) {
    console.log(`You chose ${ userInput.toUpperCase() }.`);
  } else {
    // you could log back the value if you wanted to so they can see the error
    //I DON'T KNOW WHAT THIS MEANS
    // not a big deal though
    console.log('there\'s been an error, check your spellerooseys.');
  }
}

const makeComputerChoice = (randomNumber) => {
  // not ()*3, add the space so we can read it
  randomNumber = Math.floor(Math.random() * 3);
  // could also be a switch case
  if (randomNumber === 0) {
    console.log('The computer chose ROCK')
    return ROCK
  } else if (randomNumber === 1) {
    console.log('The computer chose PAPER')
    return PAPER
  } else {
    // (randomNumber === 2)
    console.log('The computer chose SCISSORS')
// USE FORMATTING
// USE FORMATTING
// USE FORMATTING


// all functions should do one thing, and one thing only.
// functions should either return something or change something
// functions should never return something AND change something


// global constants at the top in capitals
// if you write a string more than once, lift it up here and pass them around
// like this
const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

// this name was incorrect, it doesn't get anything, it validates it

// YOU'VE .toUpperCase() BUT THE GLOBAL V IS LOWER?
const validateUserChoice = (userInput) => {
  if (userInput === ROCK || userInput === PAPER || userInput === SCISSORS) {
    console.log(`You chose ${ userInput.toUpperCase() }.`);
  } else {
    // you could log back the value if you wanted to so they can see the error
    //I DON'T KNOW WHAT THIS MEANS
    // not a big deal though
    console.log('there\'s been an error, check your spellerooseys.');
  }
}

const makeComputerChoice = (randomNumber) => {
  // not ()*3, add the space so we can read it
  randomNumber = Math.floor(Math.random() * 3);
  // could also be a switch case
  if (randomNumber === 0) {
    console.log('The computer chose ROCK')
    return ROCK
  } else if (randomNumber === 1) {
    console.log('The computer chose PAPER')
    return PAPER
  } else {
    // (randomNumber === 2)
    console.log('The computer chose SCISSORS')
    return SCISSORS
  }
  // this needed a return value
  // you could never hit the final else, so remove it
  // SO WAS IT FUCKED BECAUSE OF THIS??
}

const determineWinner = (userChoice, computerChoice) => {
  // tie
  if (userChoice === computerChoice) {
    return 'It\'s a tie.'
  }
  // rock vs
  if ( userChoice === ROCK) {
    if (computerChoice === PAPER) {
      return 'The computer won!'
    } else {
      // computer chose scissors
      // this string returns to the user, the use is "you", not user
      return 'You won!'
    }
  }
 // paper vs
 if (userChoice === PAPER) {
   if (computerChoice === SCISSORS) {
     return 'The computer won!'
   } else {
     return 'You won!'
   }
 }
 // scissors vs
 // techinally sissors is now redudent, but I think it is ok to have in because
 // it makes it more explicit
  if (userChoice === SCISSORS) {
    if (computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
}


const playGame = () => {
    // set the user choice here
    const userChoice = SCISSORS
    // validate returns null, so don't assign it
    // not really needed now we're using global constants
    //I DON'T UNDERSTAND THIS
    validateUserChoice(userChoice)

    // computerChoice can not be invalid, so no worries
    const computerChoice = makeComputerChoice()

    // good first class func func, but you're logging a console.log console.log(console.log)
    // don't do this
    // return a string from determineWinner and log it (see above)
    console.log(determineWinner(userChoice, computerChoice))
};

playGame();

module.exports = validateUserChoice;
const validateUserChoice = require('./rock-paper-sis-refactored.js')
