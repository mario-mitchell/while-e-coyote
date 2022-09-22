// In a file called number-summer.js file, write a program that continually prompts the user for numbers until the user enters the keyword "done" at which point the sum of all the inputted numbers is logged out.
// const prompt = require('prompt-sync')({ sigint: true });


// // let input = prompt("> ") //variable for user inputted data
// let numChoice = prompt("Enter some numbers,then type 'done' when complete ");
// let sum = 0; //vairable for current total
// if (numChoice === "done") {
//     console.log("You are fast")
// } else {
//     while (numChoice !== "done") {
//         sum = sum + Number(numChoice)
//         numChoice = prompt("Pick another Number ");
//     }
// }
// console.log(sum)




//  Number Doubler 
//Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.



// const prompt = require('prompt-sync')({ sigint: true });

// let numChoice = Number(prompt("Enter a number for the doubler to use. "));


// while (numChoice < 100){
//     numChoice = numChoice * 2
//     console.log(numChoice)
// }




//  String Repeater Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.

// const prompt = require('prompt-sync')({ sigint: true });

// let newString = prompt("Enter a short string we can repeat till its over 10 characters: ");
// let conString = newString
// console.log(newString);
// console.log("The string is: " + newString.length + " character(s) long");

// while (conString.length < 10){
//     conString = newString + conString
//     console.log(conString)
// }





//  Make Divisble Write a program that prompts the user for two numberx, x and y. The program should add one to x until it is divisble by y.

// const prompt = require('prompt-sync')({ sigint: true });

// let x = Number(prompt("Enter a number for X: "));
// let y = Number(prompt("Enter a number for Y: "));

// while (x%y !== 0 ) {

//     console.log("lets add 1 to X till its divisible by Y: " + x);
//     x++;
// }
// console.log(x + " is divisible by " + y)





// Fibonacci Write a program, fibonacci.js that accepts a number, n, from the user and consequently logs the first n values in the fibonacci sequence.

// const prompt = require('prompt-sync')({ sigint: true });

// let n = Number(prompt("Enter a value for 'n': "));


// // 1st iteration
// // 0 1 1 2
// // p c t

// // 2nd iteration
// // 0 1 1 2
// //   p c t

// // 3rd iteration
// // 0 1 1 2 3
// //     p c t

// let prevNum = 0;
// let currentNum = 1;
// let total = 0; //preNum + currentNum;


// console.log(prevNum); //account for the first 0 in the sequence

// let count = 1; 
//start at one to accopunt for the first 0 in the sequence
// while (count < n) { //loop runs n times

//     console.log(currentNum);
//     total = prevNum + currentNum
//     prevNum = currentNum;
//     currentNum = total;

//     count++;
// }

