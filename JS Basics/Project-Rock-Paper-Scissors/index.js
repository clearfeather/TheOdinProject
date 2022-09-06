const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Rules: Rock beats Scissors, Paper beats Rock, Scissors beats Paper

// Generate random computer choice
function getComputerChoice() {
    return randomChoice = choices[Math.floor(Math.random() * choices.length)];
}
// Set random computer choice function to var to access via variable
const computerSelection = getComputerChoice();

// Get player selection function
function getPlayerChoice() {
    playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
}

// Play a Round function. Two params set for passthru
function playRound(playerSelection, computerSelection) {

    // Checking Selections
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You Win, Rock smashes Scissors';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You Lose, Paper covers Rock';
    }
    if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You Win, Paper covers Rock';
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You Lose, Scissors cuts Paper';
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You Win, Scissors cuts Paper';
    } if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You Lose, Rock smashes Scissors';
    }
    else return `Please input a valid choice`;
}

// const playerSelection = getPlayerChoice();


// Set scores for both player and computer
let playerScore = 0;
let computerScore = 0;

// Create game
function game() {
    

    // Loop 5 times
    for (let i = 1; i <= 5; i++) {

        // Bring in User and Computer choices
        getComputerChoice();
        getPlayerChoice();

        // Call Playround in for loop
        console.log(playRound(playerSelection, computerSelection));

        // Display choices
        console.log(`Computer's Choice: ${randomChoice}`);
        console.log(`Player's Choice: ${playerSelection}`);

        // Display scores
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}

 game();

// console.log(playRound(playerSelection, computerSelection));