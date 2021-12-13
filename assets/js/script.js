// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-sign") === "select") {
                checkAnswer();
            } else {
                let compareSignChoice = this.getAttribute("data-sign");
                runGame(compareSignChoice);
            }
        });
    }
});

/** Function defining randomly the computer sign */

function computerSignChoice() {
    return Math.floor((Math.random() * 5) + 1);
}

/** function comparing player choice and computer choice */

function compareSignChoice () {
}

function calculateWinner () {
}

function incrementPlayerScore () {
}

function incrementComputerScore () {
}

/** Constant for the signs */

const sign = [
    {
        name: "Rock",
        value: "1"
    }
]