console.log("hi");
const input = "bomb";

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log("Input error!");
  }
};

const getComputerChoice = () => {
  randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (user, computer) => {
  if (user === computer) {
    return "It's a tie!";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock") ||
    user === 'bomb'
  ) {
    return "You won!!";
  } else {
    return "You lost";
  }
};

const playGame = (input) => {
  console.log(`You chose: ${input}`);

  let computer = getComputerChoice();
  console.log(`The computer chose: ${computer}`);

  console.log(determineWinner(input, computer));
};

playGame(input);
