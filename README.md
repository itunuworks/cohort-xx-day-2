# PROJECT cohort-xx-day-2

## About the project

This project contains 2 Andelabs functions 

- words 

  - This computes the number of occurrences of each word in a string and returns a JSON object with every word instance and the number of occurrence it has. e.g. For the line of code

    `words("Always come go come and stay");`

    the return value would be 

    `{'Always': 1, 'come': 2, 'go': 1, 'and': 1, 'stay': 1}`

- reverseString

  - This function checks if a string is a **palindrome** and returns a value `true` if it is. 	

    If it is not a palindrome, the value fed the function is returned.

    E.g. For the line of code

    `reverseString("momom");`

    return value would be `true`

    while for `reverseString("Itunu")`,

    return value would be `'Itunu'`

## How to install

1. Copy https://github.com/itunuworks/cohort-xx-day-2

2. Clone the repo on your local file system using 

   `git clone https://github.com/itunuworks/cohort-xx-day-2`

3. Navigate into the cloned directory using `cd cohort-xx-day-2`

4. Enter the command `npm install` to install all dependencies

## How to run tests

From the root directory, just enter the command `npm run test`

