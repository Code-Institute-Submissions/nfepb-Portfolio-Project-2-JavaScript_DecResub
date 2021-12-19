/** Constants */

const signChoices = [
    "Rock",
    "Paper",
    "Sissors",
    "Lizard",
    "Spock"
]

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    const onSelectButtonClick = document.querySelector(".select-btn")
    selectButton.addEventListener("click", function(){
        getComputerSignChoice();
        compareSignChoice();
        displayMessageBattleOutcome();
        incrementPlayerScore();
        incrementComputerScore();
    });
});

/** Function defining randomly the computer sign */

function getComputerSignChoice () {
    const randomIndex = Math.floor(Math.random() * 5);
    return signChoices[randomIndex];
}

/** function comparing player choice and computer choice, returns "user" when the user wins */

function compareSignChoice(userSignChoice, getComputerSignChoice) {
    let winner = "";
    if (userSignChoice === getComputerSignChoice) {
        winner = "draw";
        return "It's a draw! Go again!"
    } else if (userSignChoice === "Rock" && getComputerSignChoice === "Scissors") {
        winner = "Player";
        return "Rock crushes scissors... ${winner} is the winner this round!";
    } else if (userSignChoice === "Rock" && getComputerSignChoice === "Lizard") {
        winner = "Player"
        return "Rock crushes lizard... ${winner} is the winner this round!";
    } else if (userSignChoice === "Rock" && getComputerSignChoice === "Paper") {
        winner = "Computer"
        return "Paper covers rock... You lose this round!";
    } else if (userSignChoice === "Rock" && getComputerSignChoice === "Spock") {
        winner = "Computer"
        return "Spock vaporizes rock... You lose this round!";
    } else if (userSignChoice === "Paper" && getComputerSignChoice === "Rock") {
        winner = "Player";
        return "Paper covers rock... ${winner} is the winner this round!";
    } else if (userSignChoice === "Paper" && getComputerSignChoice === "Spock") {
        winner = "Player";
        return "Paper disproves Spock... ${winner} is the winner this round!";
    } else if (userSignChoice === "Paper" && getComputerSignChoice === "Scissors") {
        winner = "Computer";
        return "Scissors cuts paper... ${winner} is the winner this round!";
    } else if (userSignChoice === "Paper" && getComputerSignChoice === "Lizard") {
        winner = "Computer";
        return "Lizard eats paper... ${winner} is the winner this round!";
    }
        
}


function incrementPlayerScore () {
    let playerScore = parseInt(document.getQuery("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

function incrementComputerScore () {
    let computerScore = parseInt(document.getQuery("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}
