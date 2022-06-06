/** Constants */

const signChoices = ["rock", "paper", "scissors", "lizard", "spock"];

const ROCK = signChoices[0];
const PAPER = signChoices[1];
const SCISSORS = signChoices[2];
const LIZARD = signChoices[3];
const SPOCK = signChoices[4];

let playerName = "";
let playerSignChoice = "";
let difficultyLevel = "easy";

const hiddenClassName = "hidden";

// HTML elements

const gameArea = document.getElementsByClassName("game-area")[0];
const scoreboardArea = document.getElementsByClassName("scoreboard-area")[0];
const gameSettingArea = document.getElementsByClassName("game-setting")[0];
const playerNameInput = document.getElementById("player-name");
const timerElement = document.getElementById("timer");

/* Default value for the score */

let playerScore = 0;
let computerScore = 0;

const bannerDisplay = document.getElementsByClassName("banner-display")[0];
const bannerHeader = document.getElementsByClassName("banner-header")[0];
const bannerParagraph = document.getElementsByClassName("banner-result")[0];

// Difficulty level

const easyDifficultyTimeInSeconds = 10;
const mediumDifficultyTimeInSeconds = 5;
const hardDifficultyTimeInSeconds = 3;

// Start value for the countdown timer

let timeRemaining = 0;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  const startGameButton = document.getElementById("launch-game");
  const choiceButtons = document.querySelectorAll(".choice-btn");

  startGameButton.addEventListener("click", (e) => {
    gameArea.classList.remove(hiddenClassName);
    scoreboardArea.classList.remove(hiddenClassName);
    gameSettingArea.classList.add(hiddenClassName);
    playerName = playerNameInput.value;
    displayPlayerName();
    const checkRadioBtnElement = document.querySelector(
      'input[name="difficulty"]:checked'
    );
    difficultyLevel = checkRadioBtnElement.value;
    console.log(difficultyLevel);
    countdownStart();
  });

  choiceButtons.forEach(function (choiceButton) {
    choiceButton.addEventListener("click", function (event) {
      playerSignChoice = event.currentTarget.id;
    });
  });

  /** Launch the game on "sign choice" button click and calls on function to calculate outcome */

  const selectButton = document.querySelector(".select-btn");
  selectButton.addEventListener("click", function () {
    const computerChoice = getComputerSignChoice();
    displayComputerChoice(computerChoice);
    document.getElementById("computer-sign").innerHTML = computerChoice;

    const outcomeMessage = getOutcomeMessage(playerSignChoice, computerChoice);
    document.getElementById("outcome-message").innerHTML = outcomeMessage;
    displayPlayerScore();
    displayComputerScore();
    showWinner();
    countdownStart();
  });
  const closeButton = document.getElementById("close");
  closeButton.addEventListener("click", function () {
    resetGame();
    closeBanner();
  });
});

/** Function defining randomly the computer sign */

function getComputerSignChoice() {
  const randomIndex = Math.floor(Math.random() * 5);
  return signChoices[randomIndex];
}

/** Display computer choice */

function displayComputerChoice(computerChoice) {
  let computerChoiceIcon = document.getElementById("computer-sign");
  computerChoiceIcon.className = `fas fa-hand-${computerChoice}`;
}

/** function comparing player choice and computer choice */

function getOutcomeMessage(userSignChoice, computerSignChoice) {
  if (userSignChoice === computerSignChoice) {
    outcomeMessage = "It's a draw! Go again!";
  }

  switch (userSignChoice) {
    case ROCK:
      switch (computerSignChoice) {
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
      switch (computerSignChoice) {
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
      switch (computerSignChoice) {
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
      switch (computerSignChoice) {
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
      switch (computerSignChoice) {
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

// Display player name in score area

function displayPlayerName() {
  document.getElementById("player-name-display").innerText = playerName;
}

/** Outcome of the comparison logic */

const gameWinner = document.querySelector("#gameWinner");

function displayPlayerScore() {
  document.getElementById("player-score").innerText = playerScore;
}

function displayComputerScore() {
  document.getElementById("computer-score").innerText = computerScore;
}

/** Check if player/computer score is equal to 5.
 * Displays the winner block.
 * Header will display if the player has won or lost the game with the final scores.
 */

function showWinner() {
  if (playerScore === 5) {
    bannerDisplay.style.display = "block";
    bannerHeader.textContent = "You Win The Game!";
    bannerParagraph.textContent = `You: ${playerScore} > Computer: ${computerScore}`;
  } else if (computerScore === 5) {
    bannerDisplay.style.display = "block";
    bannerHeader.textContent = "You Lose The Game!";
    bannerParagraph.textContent = `Computer: ${computerScore} > You: ${playerScore}`;
  }
}

function closeBanner() {
  bannerDisplay.style.display = "none";
}

/**
 * Player score and Computer score are set to 0.
 * Computer icon is set back to a question mark. */

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  displayPlayerScore();
  displayComputerScore();
  outcomeMessage.innerHTML = "Ready for the next round?";
  document.getElementById("computer-sign").className = "fas fa-question";
}

// Countdown Timer function to start from the first click on "select sign" button

function countdownStart() {
  switch (difficultyLevel) {
    case "easy":
      timeRemaining = easyDifficultyTimeInSeconds;
      break;
    case "medium":
      timeRemaining = mediumDifficultyTimeInSeconds;
      break;
    case "hard":
      timeRemaining = hardDifficultyTimeInSeconds;
      break;
    default:
      timeRemaining = easyDifficultyTimeInSeconds;
  }
  timerElement.innerHTML = timeRemaining;
  const countdownId = setInterval(() => {
    timeRemaining--;
    timerElement.innerHTML = timeRemaining;
    if (timeRemaining <= 0) clearInterval(countdownId);
  }, 1000);
}
