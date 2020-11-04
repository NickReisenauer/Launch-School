const readline = require("readline-sync");

const VALID_CHOICES = ["rock", "paper", "scissors"];
const gameScore = {
  computer: 0,
  human: 0,
};

let roundNumber = 1;
let winningScore = 5;

const prompt = (message) => console.log(`-> ${message}`);

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

const declareWinner = () => {
  if (gameScore.human === 5) {
    console.log("\n");
    prompt(
      `Congrats! You Won!\nThe score was ${gameScore.human} to ${gameScore.computer}`
    );
  } else {
    console.log("\n");
    prompt(
      `The computer won :(\nThe score was ${gameScore.human} to ${gameScore.computer}`
    );
  }
};

const resetGame = () => {
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
  return "y";
};

console.clear();

while (true) {
  console.log("\n");
  console.log(`--- Round ${roundNumber} | First to score 5 ---`);
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question().toLowerCase();
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayRoundWinner(choice, computerChoice);
  prompt(`SCORE: You: ${gameScore.human} vs Computer: ${gameScore.computer}`);

  if (gameScore.human === winningScore || gameScore.computer === winningScore) {
    declareWinner();
    resetGame();
    let anotherGame = playAgain();
    if (anotherGame === "n") break;
  }
  roundNumber += 1;
}

// Best of 5
// Keep track of scoring
// Display score at start of each round
// Countdown timer
// Check for who's won and display a message
// Instead of 5, use var winningScore
