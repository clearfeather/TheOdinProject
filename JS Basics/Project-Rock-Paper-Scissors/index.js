const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Rules: Rock beats Scissors, Paper beats Rock, Scissors beats Paper

// Generate random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
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

    // Check Tie
    if (playerSelection === computerSelection) {
        return `It's a tie`;
    }
    
    // Player Wins
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        playerScore++;
        return 'You Win, Rock smashes Scissors';
    } 
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        playerScore++;
        return 'You Win, Paper covers Rock';
    } 
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScore++;
        return 'You Win, Scissors cuts Paper';
    }
    
    // Computer Wins
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        computerScore++;
        return 'You Lose, Rock smashes Scissors';
    }
    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        computerScore++;
        return 'You Lose, Paper covers Rock';
    }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        computerScore++;
        return 'You Lose, Scissors cuts Paper';
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
        getComputerChoice(); // Not random, needs fix
        getPlayerChoice();

        // Display choices
        console.log(`Computer's Choice: ${computerSelection}`);
        console.log(`Player's Choice: ${playerSelection}`);

        console.log();

        // Call Playround in for loop
        console.log(playRound(playerSelection, computerSelection));

        console.log();

        // Display scores
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);

        console.log();
        console.log('------------------------');
        console.log();
    }
}

 game();