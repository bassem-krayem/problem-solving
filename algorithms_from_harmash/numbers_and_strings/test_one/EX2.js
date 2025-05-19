/*
This algorithm:
1. Takes a number as input from the user
2. Returns it in reverse order
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const reverseNumber = (number) => {
  /*
    My approach:
    - Convert the number to a string.
    - Split the string into an array of characters.
    - Use the .reverse() method to reverse the array.
    - Join the array back into a string.
    - Convert the result back to a number and return it.
  */

  // return Number(number.split("").reverse().join(""));

  /*
    Their approach (math-based):
    - Convert the input string to a number.
    - Initialize `reversedNumber` to 0.
    - While the original number is not 0:
      - Get the last digit using `% 10`.
      - Shift the current reversed number one place to the left by multiplying it by 10.
      - Add the last digit to the reversed number.
      - Remove the last digit from the original number using `Math.floor(originalNumber / 10)`.
    - Return the reversed number.
  */

  let originalNumber = Number(number);
  let reversedNumber = 0;

  /*
  for (; originalNumber !== 0; ) {
    let lastDigit = originalNumber % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    originalNumber = Math.floor(originalNumber / 10);
  } */

  while (originalNumber !== 0) {
    reversedNumber = reversedNumber * 10 + (originalNumber % 10);
    originalNumber = Math.floor(originalNumber / 10);
  }

  return reversedNumber;
};

rl.question("Please enter the number that you want to reverse: ", (number) => {
  console.log(
    `The reversed version of the number: ${number}.\n Is: ${reverseNumber(
      number
    )}`
  );
  rl.close();
});
