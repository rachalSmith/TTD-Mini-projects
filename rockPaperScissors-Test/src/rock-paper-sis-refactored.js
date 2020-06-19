//TODO: Write DocString comments returns: Argument:
//TODO: tests for each function 


const ROCK = 'paper'
const PAPER = 'paper'
const SCISSORS = 'scissors'


const validateUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === ROCK || userInput === PAPER || userInput === SCISSORS) {
    return console.log (`You chose ${ userInput.toUpperCase() }.`);
  } else {
    return console.log('there\'s been an error, check your spelling.');
  }
};


userChoice = validateUserChoice('SCISSoRS')


const makeComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    console.log('The computer chose ROCK')
    return ROCK;
  } else if (randomNumber === 1) {
    console.log('The computer chose PAPER')
    return PAPER;
  } else {
    console.log('The computer chose SCISSORS')
    return SCISSORS;
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie.'
  };
  if ( userChoice === ROCK) {
    if (computerChoice === PAPER) {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  };
 if (userChoice === PAPER) {
   if (computerChoice === SCISSORS) {
     return 'The computer won!'
   } else {
     return 'You won!'
   }
 };
  if (userChoice === SCISSORS) {
    if (computerChoice === ROCK) {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
};


const playGame = () => {
   const computerChoice = makeComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
