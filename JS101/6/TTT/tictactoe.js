const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let winningScore;
let currentPlayer = "Player";

const prompt = (msg) => console.log(`-> ${msg}`);

const displayGameInfo = (scores) => {
  console.log(`You are ${HUMAN_MARKER} and Computer is ${COMPUTER_MARKER}`);
  console.log(`First to ${winningScore} wins!`);
  console.log(`Score: You: ${scores.player} to Computer: ${scores.computer}`);
};

const displayBoard = (board, scores) => {
  console.clear();
  displayGameInfo(scores);
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
};

const initializeBoard = () => {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
};

const resetGameScores = (scores) => {
  scores["player"] = 0;
  scores["computer"] = 0;
};

const joinOr = (arr, separator = ", ", lastWord = "or") => {
  if (!arr.length) return "";
  else if (arr.length === 1) return arr.join("");
  else if (arr.length === 2) return arr.join(` ${lastWord} `);

  let lastValue = arr.splice(arr.length - 1, 1);
  return arr.join(separator) + `${separator}${lastWord} ${lastValue}`;
};

const emptySquares = (board) => {
  return Object.keys(board).filter((key) => board[key] === " ");
};

const playerChoosesSquare = (board) => {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
};

const findAtRiskSquare = (line, board, marker) => {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
};

const computerChoosesRandom = (board) => {
  let square;
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  square = emptySquares(board)[randomIndex];
  return square;
};

const computerChoosesSquare = (board) => {
  let square;
  if (!square) {
    for (let idx = 0; idx < WINNING_LINES.length; idx += 1) {
      let line = WINNING_LINES[idx];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }
  for (let idx = 0; idx < WINNING_LINES.length; idx += 1) {
    let line = WINNING_LINES[idx];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  if (!square && board["5"] === INITIAL_MARKER) square = "5";

  if (!square) square = computerChoosesRandom(board);

  board[square] = COMPUTER_MARKER;
};

const boardFull = (board) => {
  return emptySquares(board).length === 0;
};

const detectWinner = (board) => {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }
  return null;
};

const someoneWon = (board) => {
  return detectWinner(board);
};

const updateScore = (score, winner) => (score[winner] += 1);

const determineNumberOfGames = () => {
  console.clear();
  prompt("How many games would you like to play?");

  let response = readline.question();

  while (!Number.isInteger(Number(response)) || !(Number(response) > 0)) {
    prompt(
      "How many games would you like to play?\nPlease enter a number greater than 0"
    );
    response = readline.question();
  }
  winningScore = Number(response);
};

const chooseSquare = (board, currentPlayer) => {
  return currentPlayer === "Player"
    ? playerChoosesSquare(board)
    : computerChoosesSquare(board);
};

const alternatePlayer = (currentPlayer) => {
  return currentPlayer === "Player" ? "Computer" : "Player";
};

const determineFirstPlayer = () => {
  prompt("Who would you like to go  first?");
  prompt("(1: Player) : (2: Computer)");
  let answer = readline.question();
  while (Number(answer) !== 1 && Number(answer) !== 2) {
    prompt("Please enter either 1 or 2");
    answer = readline.question();
  }
  return answer === "1" ? "Player" : "Computer";
};

while (true) {
  const scores = {
    player: 0,
    computer: 0,
  };

  determineNumberOfGames();
  currentPlayer = determineFirstPlayer();

  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board, scores);
      chooseSquare(board, currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
      currentPlayer = alternatePlayer(currentPlayer);
    }

    displayBoard(board, scores);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      updateScore(scores, winner.toLowerCase());
      displayBoard(board, scores);
      prompt(`${winner} won!`);
    } else {
      prompt("It's a tie!");
    }

    if (scores.computer !== winningScore && scores.player !== winningScore) {
      prompt("Hit any key to start the next game");
      readline.prompt();
    }

    if (scores.computer >= winningScore || scores.player >= winningScore) {
      prompt("Play again? (Y: Yes) (N: No)");
      let answer = readline.question().toLowerCase();
      while (answer !== "y" && answer !== "n") {
        prompt("Please choose either Y: Yes or N: No");
        answer = readline.question().toLowerCase();
      }
      if (answer === "n") break;
      resetGameScores(scores);
    }
  }
  break;
}

prompt("Thanks for playing Tic Tac Toe!");
