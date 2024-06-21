
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
    
    let ans = prompt('Choose "Rock", "Paper", or "Scissors"');
    humanChoice = ans.toLowerCase();
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
 
    if (computerChoice == "rock") {

        if (humanChoice == "paper") {

            humanScore++;
            computerScore--;
            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win! You now have ${humanScore} points vs the computer's ${computerScore} points!`);


        } else if (humanChoice == "scissors") {

            humanScore--;
            computerScore++;
            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You lose! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        } else {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. It's a tie! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        }

    } else if (computerChoice == "paper") {

        if (humanChoice == "rock") {

            humanScore--;
            computerScore++;
            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You lose! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        } else if (humanChoice == "scissors") {

            humanScore++;
            computerScore--;
            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        } else {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. It's a tie! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        }

    } else {

        if (humanChoice == "rock") {

            humanScore++
            computerScore--;
            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You win! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        } else if (humanChoice == "paper") {

            humanScore--;
            computerScore++;
            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. You lose! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        } else {

            alert(`Computer chose ${computerChoice}, you chose ${humanChoice}. It's a tie! You now have ${humanScore} points vs the computer's ${computerScore} points!`);

        }

    }
}

// play 5 rounds 

function playGame () {
    for (let i = 0; i <= 5; i++) {

        playRound(humanSelection, computerSelection);

    }

    if (humanScore > computerScore) {

        let winVal = humanScore - computerScore;
        alert(`Congrats! You won the game by ${loseVal}! You had ${humanScore} points and the computer had ${computerScore} points.`);

    } else {

        let loseVal = computerScore - humanScore;
        alert(`Oh no! You lost the game by ${loseVal} points! You had ${humanScore} points and the computer had ${computerScore} points.`);

    }
}

playGame();