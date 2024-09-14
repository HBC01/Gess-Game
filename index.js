#! /usr/bin/env node
import inquirer from "inquirer";
// step 1
// here we used inquirer for user input
const user = await inquirer.prompt([{ message: "Guess the number b/w 1 & 6", type: "number", name: "random number" }]);
// step 2
// generate the number b/w 1 & 6
const randomNumber = Math.floor(Math.random() * 6 + 1);
// step 3
// gived Condition
if (user["random number"] === randomNumber) {
    console.log("Congratulations! You won ");
}
else {
    console.log("You losse!  Try again");
}
