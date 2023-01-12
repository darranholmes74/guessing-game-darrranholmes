
"Use strict";

let person = prompt("What is your name?");
alert("Let's Play a game " + person + "!")

let correctAnswers = 0
let answer1 = "yes";
let answer2 = "no";
let answer3 = "yes";
let answer4 = "yes";
let answer5 = "no";

   

let question1 = prompt("Is my last name Holmes? Answer yes or no");
    if (answer1 == question1.toLowerCase()) {
        // console.log("That's Correct!")
    alert ("That's Correct!");
    correctAnswers++
    } else {
    alert ("wrong try again");
    }
let question2 = prompt("Am I over 6ft tall? Answer yes or no");  
    if (answer2 == question2.toLowerCase()) {
       // console.log("That's Correct!")
        alert ("That's Correct!");
        correctAnswers++
        } else {
        alert ("wrong try again");
        }
let question3 = prompt("Is my favorite color blue? Answer yes or no");
    if (answer3 == question3.toLowerCase()) {
        // console.log("That's Correct!")
        alert ("That's Correct!");
        correctAnswers++
        } else {
        alert ("wrong try again");
        }
let question4 = prompt("Am I 28 years old? Answer yes or no");
        if (answer4 == question4.toLowerCase()) {
            // console.log("That's Correct!")
            alert ("That's Correct!");
            correctAnswers++
            } else {
            alert ("wrong try again");
            }
let question5 = prompt("Have I ever been to Germeny Answer yes or no");
    if (answer5 == question5.toLowerCase()) {
        // console.log("That's Correct!")
        alert ("That's Correct!");
        correctAnswers++
        } else {
        alert ("wrong try again");
         }
/// alert("Thanks For Playing " + person + "!"); 

let numberGuess = prompt("Guess a nummber between 1-10.");
let numberAnswer = 7;
//let listAnswers = ['dog', 'cheetah', 'cat', 'tiger', 'wolf', 'elephant'];
//let bigQuestion = prompt("Guess what my favorite animals are from this list? There are 2 possible answers. Pick on of the numbers between 1-6 attached to the answer and type the number in prompt. 1: Dog , 2: cheetah , 3: cat , 4: tiger , 5: wolf , 6: elephant")
//let bigAnswer = [listAnswers[1], listAnswers[4]];

if (numberGuess == numberAnswer){
alert("That's Correct!")
correctAnswers++
} else {
    for(count = 4; count > 0; count--){
        if(numberGuess > numberAnswer) {
            alert("Wrong Answer! Too high! Try Again! " + count);
            numberGuess = prompt("Guess a nummber between 1-10.")
        } else if (numberGuess < numberAnswer) {
            alert("Wrong Answer! Too low! Try Again! " + count)
            numberGuess = prompt("Guess a nummber between 1-10.")
        }
        if(numberGuess == numberAnswer) {
            alert("That's Correct!")
            correctAnswers++
            break;
        }
    
    } if (count == 0) {
        alert("Sorry no more attempts!");
        
    }

} 

let listAnswers = ['dog', 'cheetah', 'cat', 'tiger', 'wolf', 'elephant'];
let bigQuestion = prompt("Guess what my favorite animals are from this list? There are 2 possible answers. Pick on of the numbers between 1-6 attached to the answer and type the number in prompt. 1: Dog , 2: cheetah , 3: cat , 4: tiger , 5: wolf , 6: elephant");
let bigAnswer = [listAnswers[1], listAnswers[4]];
let userResponse = listAnswers[bigQuestion-1];
console.log(userResponse)


/* while(bigQuestion == (listAnswers[bigQuestion-1] == bigAnswer)){
    alert("Great Job " + person + "!");
    
  } */
if(userResponse === bigAnswer[0] || userResponse === bigAnswer[1]) {
    alert("That's Correct! Great Job "  + person + "!" );
    correctAnswers++
 } else {
  while(userResponse !== bigAnswer[0] || userResponse !== bigAnswer[1]){
     for (let count = 6; count >= 1; count--){
        if  (userResponse == bigAnswer[0] || userResponse == bigAnswer[1]){
            alert("That's Correct");
            correctAnswers++
           break;
        }
        if(userResponse != bigAnswer[0] || userResponse !== bigAnswer[1]) {
        //console.log("Sorry try again! " + count + " attempts left!")
         alert("Sorry try again! " + count + " attempts left!");
       bigQuestion = prompt("Guess what my favorite animals are from this list? There are 2 possible answers. Pick on of the numbers between 1-6 attached to the answer and type the number in prompt. 1: Dog , 2: cheetah , 3: cat , 4: tiger , 5: wolf , 6: elephant");
       console.log(bigQuestion)
       userResponse = listAnswers[bigQuestion-1]
            //console.log(userResponse)
            //console.log(bigAnswer[0])
            
        console.log(count)
        }   if (count == 1){
            //console.log("Sorry out of attempts! Welcome to my website " + person + "!")
            alert("Sorry out of attempts! Welcome to my website "  +  person + "!");
            
        }
        
        }
        //alert("Sorry out of attempts! Welcome to my website "  + "!");
       break;
     } 
     //alert(`You got ${correctAnswers} answers correct!`)
        
    
     
}
alert(`You got ${correctAnswers} answers correct!`)
