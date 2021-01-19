const readline = require("readline-sync");

const SUITS = ["H", "S", "C", "D"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const prompt = (message) => console.log(message);

function total(cards) {
  let values = cards.map((card) => card[1]);

  let sum = 0;
  values.forEach((value) => {
    if (value === "A") {
      sum += 11;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values
    .filter((value) => value === "A")
    .forEach((_) => {
      if (sum > 21) sum -= 10;
    });

  return sum;
}

const shuffle = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
};

const initializeDeck = () => {
  let deck = SUITS.map((suit) => {
    return VALUES.map((value) => {
      return [suit, value];
    });
  });
  return shuffle(deck.flat(1));
};

const busted = (cards) => {
  return total(cards) > 21;
};

const removeTwoFromDeck = (deck) => {
  return [deck.pop(), deck.pop()];
};

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return "PLAYER_BUSTED";
  } else if (dealerTotal > 21) {
    return "DEALER_BUSTED";
  } else if (dealerTotal < playerTotal) {
    return "PLAYER";
  } else if (dealerTotal > playerTotal) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function hand(cards) {
  return cards.map((card) => `${card[1]}${card[0]}`).join(" ");
}

function playAgain() {
  console.log("-------------");
  prompt("Do you want to play again? (y or n)");
  let answer = readline.question();
  return answer.toLowerCase()[0] === "y";
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("You busted! Dealer wins!");
      break;
    case "DEALER_BUSTED":
      prompt("Dealer busted! You win!");
      break;
    case "PLAYER":
      prompt("You win!");
      break;
    case "DEALER":
      prompt("Dealer wins!");
      break;
    case "TIE":
      prompt("It's a tie!");
  }
}

while (true) {
  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  playerCards.push(...removeTwoFromDeck(deck));
  dealerCards.push(...removeTwoFromDeck(deck));

  console.clear();
  prompt("How many games would you like to play to?");
  let answer = readline.prompt();
  while (Number.isNaN(answer) || !Number(answer)) {
    prompt("Please input a number greater than 0");
    answer = readline.prompt();
  }
  console.clear();
  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(
    `You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${total(
      playerCards
    )}.`
  );
  while (true) {
    let playerTurn;
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      playerTurn = readline.question().toLowerCase();
      if (["h", "s"].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === "h") {
      playerCards.push(deck.pop());
      prompt("You chose to hit!");
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === "s" || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${total(playerCards)}`);
  }

  // dealer turn
  prompt("Dealer turn...");

  while (total(dealerCards) < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now: ${total(dealerCards)}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }

  // both player and dealer stays - compare cards!
  console.log("==============");
  prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
  console.log("==============");

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}
