const readline = require("readline-sync");

const VALID_CHOICES = ["rock", "paper", "scissors"];
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
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
};

const getUserChoice = () => {
  let choice = readline.question().toLowerCase();
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }
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
  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    prompt("You win this round!");
    updateRoundScore("human");
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    prompt("Computer wins this round");
    updateRoundScore("computer");
  } else {
    prompt("This round was a tie");
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
