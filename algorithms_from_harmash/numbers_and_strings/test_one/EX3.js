/*
  This algorithm:
  1. Takes a number as input.
  2. Checks if this number is a palindrome.
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isPalindrome = (number) => {
  /*
  This function checks whether a number is a palindrome.

  Website's solutions:
  The website presented two solutions:
  1. A math-based approach (which is implemented below).
  2. A string-based approach (explained below in comments).

  My approach (math-based, same as their first solution):
  1. Store the input number in a variable called `originalNumber`.
  2. Initialize a variable `reversedNumber` and set it to 0.
  3. Use a `while` loop that continues as long as `number` is not equal to 0:
     a. Take the last digit of `number` using `number % 10`.
     b. Shift the digits of `reversedNumber` to the left by multiplying it by 10.
     c. Add the last digit from step (a) to `reversedNumber`.
     d. Remove the last digit from `number` using `Math.floor(number / 10)`.
  4. After the loop ends, compare `reversedNumber` with `originalNumber`:
     - If they are equal, return "is a palindrome".
     - Otherwise, return "is not a palindrome".

  Their second approach (string-based):
  1. Convert the number to a string.
  2. Create a boolean variable `isPalindrome` and set it to `true`.
  3. Loop from index `i = 0` to the middle of the string (`Math.floor(str.length / 2)`):
     a. In each iteration, compare the character at index `i` with the character at index `str.length - i - 1`.
     b. If they don't match, set `isPalindrome` to `false` and break the loop.
  4. Return the result based on the value of `isPalindrome`.
  */

  let originalNumber = number;
  let reversedNumber = 0;

  while (number !== 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return reversedNumber === originalNumber
    ? "is a palindrome"
    : "is not a palindrome";
};

rl.question(
  "Please enter the number that you want to check if it's a palindrome: ",
  (number) => {
    console.log(`The number: ${number}\n${isPalindrome(Number(number))}`);
    rl.close();
  }
);
