# PEDAC

## Understand the Problem

- Input:
  Numbers as strings (readline)
- Output:
  String (interpolated numbers)

- Rules / Requirements:
  Take loan amount, APR, loan duration
  Calculate monthly interest rate, load duration in months
  Use formula given to calculate monthly payments
  Print out monthly payments
  Interest rates as integers
  Years for loan duration
  No no-interest loans

- Mental Model:
  Ask user for their inputs using readline sync.
  Check the inputs with validation functions.
  Calculate and return monthly payments.

## Test Cases / Examples

loan amount: 1000
APR rate: 10%
loan duration: 10 years
=> over 120 months, pay \$13.22 per month

loan amount: 18234
APR rate: 2.653
loan duration: 1.8 years
=> over 21.6 months, pay \$865.42 per month

loan amount: 0
=> error: input valid number greater than 0
APR rate: 0
=> error: input valid number greater than 0
loan duration: 0.1
=> error: input valid number greater than 0

## Data Structure

- Number(as string)
  Input
- While loop
  Continue calculation based on input
- String
  Interpolated string(output)

## Algorithm

Using readline, ask user for their inputs. Validate inputs with functions.
Wrap validation process in loop so that if user enters invalid code loop will run asking again until the user inputs a valid value.
Calculate correct values in function and return/print them.

## Code
