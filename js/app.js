
"Use strict";

let person = prompt("What is your name?");
if (person === null){
alert("Please Refresh and try again");
} else {
let isReady = confirm("Are you ready to play a game " + person + "!");
    }
 

let answer1 = "yes";
let answer2 = "no";
let answer3 = "yes";
let answer4 = "yes";
let answer5 = "no";


/*if (answer1 == question1) {
    alert ("That's Correct!");
        } else  if (question1 !== answer1) {
        alert("Great! " + person + ! "Let's get Started!");
        } else {
        alert("I'm sorry " + person + " comeback when your ready");
        } {
        alert ("wrong try again");
        }
        */
    

let question1 = prompt("Is my last name Holmes? Answer yes or no");
    if (answer1 == question1.toLowerCase()) {
        // console.log("That's Correct!")
    alert ("That's Correct!");
    } else {
    alert ("wrong try again");
    }
let question2 = prompt("Am I over 6ft tall? Answer yes or no");  
    if (answer2 == question2.toLowerCase()) {
       // console.log("That's Correct!")
        alert ("That's Correct!");
        } else {
        alert ("wrong try again");
        }
let question3 = prompt("Is my favorite color blue? Answer yes or no");
    if (answer3 == question3.toLowerCase()) {
        // console.log("That's Correct!")
        alert ("That's Correct!");
        } else {
        alert ("wrong try again");
        }
let question4 = prompt("Am I 28 years old? Answer yes or no");
        if (answer4 == question4.toLowerCase()) {
            // console.log("That's Correct!")
            alert ("That's Correct!");
            } else {
            alert ("wrong try again");
            }
let question5 = prompt("Have I ever been to Germeny Answer yes or no");
    if (answer5 == question5.toLowerCase()) {
        // console.log("That's Correct!")
        alert ("That's Correct!");
        } else {
        alert ("wrong try again");
         }

alert("Thanks For Playing " + person + "!");