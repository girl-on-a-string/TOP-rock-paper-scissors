function getComputerChoice () {
    // return rock paper or scissors
    // use math random

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
    }
}

function getHumanChoice () {
    // get one of the valid choices
    //use prompt

    let ans = prompt('Choose "Rock", "Paper", or "Scissors"').toLowerCase;
    return ans;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
 
    if (computerChoice == "rock") {

        if (humanChoice == "paper") {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win!`);

        } else if (humanChoice == "scissors") {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You lose!`);

        } else {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. It's a tie!`);

        }

    } else if (computerChoice == "paper") {

        if (humanChoice == "rock") {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You lose!`);

        } else if (humanChoice == "scissors") {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win!`);

        } else {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. It's a tie!`);

        }

    } else {

        if (humanChoice == "rock") {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win!`);

        } else if (humanChoice == "paper") {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You lose!`);

        } else {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. It's a tie!`);

        }

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);