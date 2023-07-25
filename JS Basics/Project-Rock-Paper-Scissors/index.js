// Rules: Rock beats Scissors, Paper beats Rock, Scissors beats Paper

// Three Choices
const choices = ['ROCK', 'PAPER', 'SCISSORS'];


// Set scores for both player and computer
let playerScore = 0;
let computerScore = 0;


// Generate random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


// Play a Round function. Two params set for passthru
function playRound(playerSelection, computerSelection) {

    // Checking Selections

    // Check if Tie
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


// Select DOM elements to update

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');

const playerCurrentScore = document.querySelector('#playerCurrentScore');
const computerCurrentScore = document.querySelector('#computerCurrentScore');


// Add Event Listeners for buttons

let rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    playerSelection = 'ROCK';
});

let paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    playerSelection = 'PAPER';
});

let scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
});


// Create game
function game() {

    // Loop 5 times
    for (let i = 1; i <= 5; i++) {

        // Set random computer choice function to var to access via variable to call/run each time in loop
        const computerSelection = getComputerChoice();

        // Set player selection variable
        let playerSelection;

        // Display choices
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;

        // Display/Update scores
        playerCurrentScore.textContent = playerScore;
        computerCurrentScore.textContent = computerScore;

        // Call Playround in for loop
        playRound(playerSelection, computerSelection);

        if (i === 5) {
            console.log('Game Over');
            if (playerScore > computerScore) {
                console.log('You win!');
            } else console.log('You lose');
        }
    }
}

// Run game
game();