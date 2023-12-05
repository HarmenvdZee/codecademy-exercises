let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, targetNum) => {
  distanceUser = Math.abs(targetNum - userGuess);
  distanceComputer = Math.abs(targetNum - computerGuess);

  return distanceUser <= distanceComputer;
};

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore++;
      break;
    case "computer":
      computerScore++;
      break;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
