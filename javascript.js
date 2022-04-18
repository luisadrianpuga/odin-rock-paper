console.log("Hello World, Welcome to Luis Puga Rock Paper Scissors");

/* This function takes care of generating the random output */
function computerPlay(){
    let random = ["rock", "paper", "scrissors"];
    return random[Math.floor(Math.random() * 3)];
}

/* Ask the user for input */
var userChoice = prompt("Do you choose rock, paper or scissors?");
// This line will convert the input to lowercase so that the program is NOT case sensative
userChoice = userChoice.toLowerCase();

/* Compare the input to the randomly generated computer input */
/* Return a result of win or loss for to the console */
computerChoice = computerPlay()
//This line is for testing purposes to see what the function generated so to check for a bug
console.log(computerChoice)
//This line will compare the results for a tie
if(userChoice == computerChoice){
    "Tie"
}
//These lines will check for other scenerios
if(userChoice == "rock"){
    if(computerChoice == "paper"){
        console.log("You lose")
    }
    else{
        console.log("You Win")
    }
}
if(userChoice == "paper"){
    if(computerChoice == "scrissors"){
        console.log("You lose")
    }
    else{
        console.log("You Win")
    }
}
if(userChoice == "scrissors"){
    if(computerChoice == "rock"){
        console.log("You lose")
    }
    else{
        console.log("You Win")
    }
}

