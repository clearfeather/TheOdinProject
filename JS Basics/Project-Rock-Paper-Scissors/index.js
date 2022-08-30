let choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper

function playRound(playerSelection, computerSelection) {

    // Bring in User and Computer choices
    getComputerChoice();
    getPlayerSelection();

    // Checking Selections
    if (playerSelection === computerSelection) {
        return `It's a tie!`
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You Win, Rock smashes Scissors'
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You Lose, Paper covers Rock'
    }
    if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You Win, Paper covers Rock'
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You Lose, Scissors cuts Paper'
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You Win, Scissors cuts Paper'
    } if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You Lose, Rock smashes Scissors'
    }
    else return `Please input a valid choice`;
};

// Generate random computer choice
function getComputerChoice() {
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
};
// Set random computer choice function to var
const computerSelection = getComputerChoice();

// Get player selection var
function getPlayerSelection() {
    playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase()
}

// Create game
function game() {
    // Set scores for both player and computer
    playerScore = 0;
    computerScore = 0;

    // Loop 5 times
    for (let i = 1; i <= 5; i++) {
        // Call Playround in for loop
        playRound();

        // Display choices
        console.log(`Computer's Choice: ${randomChoice}`);
        console.log(`Player's Choice: ${playerSelection}`);

        // Display scores
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}


game();