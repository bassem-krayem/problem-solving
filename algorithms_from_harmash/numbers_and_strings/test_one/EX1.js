/*
this algorithm is:
1: take a number as input
2: return the sum of the digits in this number
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addNumbers = (number) => {
  /*
  In the challenge, they used a math-based approach:
  - First, they took the last digit using `% 10`
  - Then removed the last digit using integer division `// 10`
  - They kept adding digits this way until the number became 0

  But I used a string-based approach:
  - First, I split the number string into an array of characters
  - Then I looped through the array
    - Inside the loop, I converted each character to a number using `Number()`
    - Then I added it to the total sum
  - Finally, I returned the sum
*/
  // Initialize sum to 0
  let sum = 0;
  // Convert the number to a string and split it into an array of characters
  const numberArr = number.split("");

  // Loop through the array of characters
  for (let number of numberArr) {
    // Convert each character to a number and add it to the sum
    sum += Number(number);
  }
  return sum;
};

rl.question(
  "Please enter a number to know the sum of it's digits",
  (answer) => {
    console.log(
      `The sum of digits in the number: ${answer} is: ${addNumbers(answer)}`
    );
    rl.close();
  }
);
