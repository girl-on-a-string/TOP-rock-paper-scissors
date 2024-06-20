function getComputerChoice () {
    // return rock paper or scissors
    // use math random

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
    }
}

function getHumanChoice () {
    // get one of the valid choices
    //use prompt

    let ans = prompt('Choose "Rock", "Paper", or "Scissors"');
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);