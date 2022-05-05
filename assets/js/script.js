/** Constants */

const signChoices = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
]

const ROCK = signChoices[0];
const PAPER = signChoices[1];
const SCISSORS = signChoices[2];
const LIZARD = signChoices[3];
const SPOCK = signChoices[4];

let playerSignChoice = "";

let playerScore = 0;
let computerScore = 0;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    const choiceButtons = document.querySelectorAll(".choice-btn");

    choiceButtons.forEach(function(choiceButton) {
        choiceButton.addEventListener("click", function(event) {
            playerSignChoice = event.currentTarget.id;
        });
    });

    /** Launch the game on "sign choice" button click and calls on function to calculate outcome */ 

    const selectButton = document.querySelector(".select-btn")
    selectButton.addEventListener("click", function() {
        const computerChoice = getComputerSignChoice();
        document.getElementById("computer-sign").innerHTML = computerChoice;

        // ??? Image choice to fix: 
        // computerChoiceIcon.className = "fas fa-hand-${computerChoice} ${computerChoice}-btn"; 

        const outcomeMessage = getOutcomeMessage(playerSignChoice, computerChoice);
        console.log(outcomeMessage);
        document.getElementById("outcome-message").innerHTML = outcomeMessage;
        incrementPlayerScore();
        incrementComputerScore();
    });
});

/** Function defining randomly the computer sign */

function getComputerSignChoice () {
    const randomIndex = (Math.floor(Math.random() * 5));
    return signChoices[randomIndex];
}

/** Display computer choice */

let computerChoiceIcon = document.getElementById("computer-sign");
document.getElementById("computer-sign").classList= "fas fa-hand-${computerChoice}";

/** function comparing player choice and computer choice */

function getOutcomeMessage(userSignChoice, computerSignChoice) {
    if (userSignChoice === computerSignChoice) {
        outcomeMessage = "It's a draw! Go again!"
    }

    switch(userSignChoice) {
        case ROCK:
            switch(computerSignChoice) {
                case SCISSORS:   
                    playerScore++;
                    return "Rock crushes scissors... You win this round!";
                case LIZARD:
                    playerScore++;
                    return "Rock crushes lizard... You win this round!";
                case PAPER:
                    computerScore++;
                    return "Paper covers rock... You lose this round!";
                case SPOCK:
                    computerScore++;
                    return "Spock vaporizes rock... You lose this round!";
            }
        case PAPER:
            switch(computerSignChoice) {
                case ROCK:
                    playerScore++;
                    return "Paper covers rock... You win this round!";
                case SPOCK:
                    playerScore++;
                    return "Paper disproves Spock... You win this round!";
                case SCISSORS:
                    computerScore++;
                    return "Scissors cut paper... You lose this round!";
                case LIZARD:
                    computerScore++;
                    return "Lizard eats paper... You lose this round";
            }
        case SCISSORS:
            switch(computerSignChoice) {
                case PAPER:
                    playerScore++;
                    return "Scissors cut paper... You win this round!";
                case LIZARD:
                    playerScore++;
                    return "Scissors decapitates lizard... You win this round!";
                case ROCK:
                    computerScore++;
                    return "Rock crushes scissors... You lose this round!";
                case SPOCK:
                    computerScore++;
                    return "Spock smashes scissors... You lose this round!";
            }
        case LIZARD:
            switch(computerSignChoice) {
                case ROCK:
                    computerScore++;
                    return "Rock crushes lizard... You lose this round!";
                case PAPER:
                    playerScore++;
                    return "Lizard eats paper... You win this round!";
                case SCISSORS:
                    computerScore++;
                    return "Scissors decapitates lizard... You lose this round!";
                case SPOCK:
                    playerScore++;
                    return "Lizard poisons Spock... You win this round!";
            }
        case SPOCK:
            switch(computerSignChoice) {
                case ROCK:
                    playerScore++;
                    return "Spock vaporizes rock... You win this round!";
                case PAPER:
                    computerScore++;
                    return "Paper disproves Spock... You lose this round!";
                case SCISSORS:
                    playerScore++;
                    return "Spock smashes scissors... You win this round!";
                case LIZARD:
                    computerScore++;
                    return "Lizard poisons Spock... You lose this round!"; 
            }
        }
    }  
    

/** Outcome of the comparison logic */ 

const gameWinner = document.querySelector("#gameWinner")


function incrementPlayerScore() {
    document.getElementById("player-score").innerText = playerScore;
   }
    
   function incrementComputerScore() {
    document.getElementById("computer-score").innerText = computerScore;
   }
   
