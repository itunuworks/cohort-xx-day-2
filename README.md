# **PROJECT cohort-xx-day-2**

## About the project

This project contains **2 Andelabs functions** and a **CLI** App that takes in a *goo.gl* shortened URL and then returns the original URL

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

- CLI App

  - This app utilizes the Google URL Shortener API and request.js to query the original URL of any *goo.gl* shortened URL.

    For example if you run `node apps/index.js http://goo.gl/BzpZ54`

    You would get `http://bluerival.com/`

    For example if you run `node apps/index.js https://goo.gl/2q2Wea`

    You would get `http://www.facebook.com/`

## How to install

1. Copy https://github.com/itunuworks/cohort-xx-day-2

2. Clone the repo on your local file system using 

   `git clone https://github.com/itunuworks/cohort-xx-day-2`

3. Navigate into the cloned directory using `cd cohort-xx-day-2`

4. Enter the command `npm install` to install all dependencies

## How to run tests

From the root directory, just enter the command `npm run test`