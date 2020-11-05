const readline = require("readline-sync");

const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

const SHORTHAND_CHOICES = ["r", "p", "sc", "l", "sp"];

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

const gameScore = {
  computer: 0,
  human: 0,
};

let roundNumber = 1;
let winningScore = 5;

const prompt = (message) => console.log(`-> ${message}`);

const displayWelcomeMessage = () => {
  prompt(`Welcome to Rock Paper Scissors vs The Computer!`);
  prompt(`First to score ${winningScore} wins.`);
  prompt(`Good luck! 👍`);
};

const displayRoundChoices = () => {
  console.log("\n");
  prompt(`------ | Round ${roundNumber} | ------`);
  prompt(
    `Choose one: [r]: rock, [p]: paper, [sc]: scissors, [l]: lizard, [sp]: spock`
  );
};

const shorthandChoiceValidation = (choice) => {
  if (choice[0] === "r") choice = "rock";
  else if (choice[0] === "p") choice = "paper";
  else if (choice.substring(0, 2) === "sc") choice = "scissors";
  else if (choice[0] === "l") choice = "lizard";
  else if (choice.substring(0, 2) === "sp") choice = "spock";
  return choice;
};

const getUserChoice = () => {
  let choice = readline.question().toLowerCase();
  while (!SHORTHAND_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }
  choice = shorthandChoiceValidation(choice);
  return choice;
};

const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
};

const updateRoundScore = (roundWinner) => {
  gameScore[roundWinner] += 1;
};

const displayRoundWinner = (choice, computerChoice) => {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    prompt("You win this round!");
    updateRoundScore("human");
  } else if (computerChoice === choice) {
    prompt("This round was a tie");
  } else {
    prompt("Computer wins this round");
    updateRoundScore("computer");
  }
};

const isAWinner = () => {
  return (
    gameScore.human === winningScore || gameScore.computer === winningScore
  );
};

const displayWinnerOfGame = () => {
  if (gameScore.human === 5) {
    console.log("\n");
    prompt(
      `Congrats! You Won! 🥳\nThe score was ${gameScore.human} to ${gameScore.computer}`
    );
  } else {
    console.log("\n");
    prompt(
      `The computer won :(\nThe score was ${gameScore.human} to ${gameScore.computer}`
    );
  }
};

const resetGameScore = () => {
  gameScore.human = 0;
  gameScore.computer = 0;
  roundNumber = 0;
};

const playAgain = () => {
  console.log("\n");
  prompt("Do you want to play again? Y: yes. N: no.");
  let decision = readline.question().toLowerCase();

  while (decision !== "n" && decision !== "y") {
    prompt("Do you want to play again? Y: yes. N: no.");
    decision = readline.question().toLowerCase();
  }
  if (decision === "n") {
    prompt("Thanks for playing!");
    return "n";
  }
  console.clear();
  return "y";
};

console.clear();

displayWelcomeMessage();

while (true) {
  displayRoundChoices();

  let choice = getUserChoice();
  let computerChoice = getComputerChoice();

  console.clear();

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayRoundWinner(choice, computerChoice);
  prompt(`SCORE: You: ${gameScore.human} vs Computer: ${gameScore.computer}`);

  if (isAWinner()) {
    displayWinnerOfGame();
    resetGameScore();
    let answer = playAgain();
    if (answer === "n") break;
  }

  roundNumber += 1;
}
