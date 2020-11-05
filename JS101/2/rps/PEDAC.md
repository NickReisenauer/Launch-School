# PEDAC

## Understand the Problem

- Input:
  String(rock, paper, scissors)
- Output:
  String(winner of round, game score, winner of game)

- Rules / Requirements:
  User picks either rock paper scissors
  Computer picks one of the three based on a random number
  Use if comparison to check who wins

- Mental Model:
  Ask user for their input each round and display who won.
  If a user wins, display winning message
  Keep track of score

## Examples / Test Cases

User:rock Computer:paper => Computer wins round
User: paper Computer: paper => tie
User: scissors Computer: paper => Player wins round

User:5 Computer:4 Player wins game

## Data Structures

- String
  Input
- String
  Output
- Objects
  Score
- Template Literals
  Displaying Score

## Algorithm

Ask user for input
Calculate who won the round
Show user score and round score
Increment score of whoever won
Increment round number
Check after each round if any scores === winningScore
If they are, display message saying who won
Ask user if they want to play again

## Code
