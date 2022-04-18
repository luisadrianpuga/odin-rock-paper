//Title for the console
console.log("Hello World, Welcome to Luis Puga Rock Paper Scissors");

/* This function takes care of generating the random output */
function computerPlay(){
    let random = ["rock", "paper", "scrissors"];
    return random[Math.floor(Math.random() * 3)];
}

/* Compare the input to the randomly generated computer input */
/* Return a result of win or loss for to the console */
function playRound(playerSelection, computerSelection) {
   
    let playerPoint = 0 //Holds the player point 
    //Decides wether the player won
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
    {
        playerPoint = 1 //give the player a point
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection) //print the win
    }
    else {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)// print the loss
    }

    return playerPoint //return the value for the player point
}

function game(roundsTotal = 5) {
    let roundsPlayed = 0 //Holds the amount of rounds played
    let playerScore = 0 //holds the player score

    //While loop will run the game a total of five times
    while (roundsPlayed < roundsTotal) {
        let playerSelection = prompt('rock, paper, or scissors?')//Prompts user for input
        playerSelection = playerSelection.toLowerCase();//Coverts it to lowercase 
        //Continue of the input is not equal to a valid choice
        if ((playerSelection != 'rock') &&
            (playerSelection != 'paper') &&
            (playerSelection != 'scissors'))
        { continue }
        //Choose a position for the computer
        let computerSelection = computerPlay()
        //Check if the answer is a tie
        if (playerSelection == computerSelection) {
            console.log('It\'s a tie. You both chose ' + playerSelection)
            continue
        }
        
        playerScore += playRound(playerSelection, computerSelection)//Get player score
        roundsPlayed++ //Increment the round counter
    }
    //If the player won more than half  of the games than they one the whole game
    if (playerScore > (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You win!')
    }
    //If the player tied in the games one and lost it was a tie
    else if (playerScore == (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You tied.')
    }
    //Else the player lost
    else {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You lost!')
    }
    return
}

//Runs the game function
game();

