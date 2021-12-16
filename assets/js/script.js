/** Constants */

const signChoices = [
    "ROCK",
    "PAPER",
    "SCISSORS",
    "LIZARD",
    "SPOCK"
]

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    const selectButton = document.querySelector(".select-btn")
    selectButton.addEventListener("click", function(){
        getComputerSignChoice();
        compareSignChoice();
        incrementPlayerScore();
        incrementComputerScore();
    });
});

/** Function defining randomly the computer sign */

function getComputerSignChoice () {
    const randomIndex = Math.floor(Math.random() * 5);
    return signChoices[randomIndex];
}

/** function comparing player choice and computer choice */

function compareSignChoice () {
}

function calculateWinner () {
}

function incrementPlayerScore () {
    let playerScore = parseInt(document.getQuery("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

function incrementComputerScore () {
    let computerScore = parseInt(document.getQuery("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}

/** Constant for the signs */

const sign = [
    {
        name: "Rock",
        value: "1"
    }
]