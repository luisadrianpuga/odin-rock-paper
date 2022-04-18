//Title for the console
console.log("Hello World, Welcome to Luis Puga Rock Paper Scissors");

/* This function takes care of generating the random output */
function computerPlay(){
    let random = ["rock", "paper", "scrissors"];
    return random[Math.floor(Math.random() * 3)];
}

/* Ask the user for input */
// This line will convert the input to lowercase so that the program is NOT case sensative
const playerSelection =  prompt("Do you choose rock, paper or scissors?").toLowerCase();

// This line gets the computer selection
const computerSelection = computerPlay();

/* Compare the input to the randomly generated computer input */
/* Return a result of win or loss for to the console */
function playRound(playerSelection, computerSelection) {
    //Play five games
    //This line will compare the results for a tie
    let result = "";
    //This line will validate the entry for a win scenerio
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        //This line displays the win method
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
    }
    //This line checks for a tie scenerio
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection)
    }
    //This final else statement is for the scenerio when the user loses
    else {
        
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)

       
    }
    console.log(result)
}//End of play round

//This line will print the results
console.log(playRound(playerSelection, computerSelection));
