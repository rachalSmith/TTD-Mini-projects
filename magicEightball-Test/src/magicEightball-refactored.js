//ToDo: test for each function


let userName = '';
userName = 'Rachal';


defaultName =  userName || 'stranger';
  console.log(`Well hello there ${defaultName}.`)

/**
 * Format user name and question.
 * @param {string}  user.
 * @param {string}  question.
 * @return {string} formatted question.
 */
formatUserQuestion = (user, question) => {
  return `${user}\'s question: ${question.toUpperCase()}`;
};

/**
 * Generating an answer to user's question.
 * @return {string} answer.
 */
eightBallAnswer = () => {
    randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber === 0) {
        return 'NEVER.';
    } else if (randomNumber === 1) {
        return 'NOPE.';
    } else if (randomNumber === 2) {
        return 'WE CAN ONLY PRAY...';
    } else if (randomNumber === 3) {
        return 'IT DID ONCE, 2006.';
    } else {
        return 'JUST INVEST IN A GOOD UMBRELLA AND STOP COMPLAINING.';
    }
};


console.log(formatUserQuestion(defaultName, 'Will it ever stop raining in Manchester?'));


console.log(`Eight ball says: ${eightBallAnswer()}`);
