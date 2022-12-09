/*jshint esversion: 6 */

/** Constants */

const signChoices = ["rock", "paper", "scissors", "lizard", "spock"];

const ROCK = signChoices[0];
const PAPER = signChoices[1];
const SCISSORS = signChoices[2];
const LIZARD = signChoices[3];
const SPOCK = signChoices[4];

const SCORE_TO_WIN = 5;

let playerName = "";
let playerSignChoice = "";
let difficultyLevel = "easy";
let countdownId;
let countdownPaused = false;

const hiddenClassName = "hidden";

// HTML elements

const gameArea = document.getElementsByClassName("game-area")[0];
const scoreboardArea = document.getElementsByClassName("scoreboard-area")[0];
const gameSettingArea = document.getElementsByClassName("game-setting")[0];
const playerNameInput = document.getElementById("player-name");
const timerElement = document.getElementById("timer");
const outcomeMessageElement = document.getElementById("outcome-message");
const entryForm = document.getElementById("entry-form");
const choiceButtons = document.querySelectorAll(".choice-btn");
const closeButton = document.getElementById("close");
const continueButton = document.getElementById("continue");

/* Default value for the score */

let playerScore = 0;
let computerScore = 0;

const gameOutcomeBannerDisplay = document.querySelector("#game-outcome");
const gameOutcomeBannerHeader = document.querySelector(
  "#game-outcome > div > h2"
);
const gameOutcomeBannerParagraph = document.querySelector(
  "#game-outcome > div > p"
);

const roundOutcomeBannerDisplay = document.querySelector("#round-outcome");
const roundOutcomeBannerParagraph = document.querySelector(
  "#round-outcome > div > p"
);

// Difficulty level

const easyDifficultyTimeInSeconds = 10;
const mediumDifficultyTimeInSeconds = 5;
const hardDifficultyTimeInSeconds = 3;

// Start value for the countdown timer

let timeRemaining = 0;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  entryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    gameArea.classList.remove(hiddenClassName);
    scoreboardArea.classList.remove(hiddenClassName);
    gameSettingArea.classList.add(hiddenClassName);
    playerName = playerNameInput.value;
    displayPlayerName();
    const checkRadioBtnElement = document.querySelector(
      'input[name="difficulty"]:checked'
    );
    difficultyLevel = checkRadioBtnElement.value;
    countdownStart();
  });

  choiceButtons.forEach(function (choiceButton) {
    choiceButton.addEventListener("click", function (event) {
      playerSignChoice = event.currentTarget.id;
      clearSelectedChoiceButton();
      event.currentTarget.classList.add("selected-choice-btn");
    });
  });

  continueButton.addEventListener("click", function () {
    hideRoundOutcomeBanner();
    countdownPaused = false;
  });

  /** Launch the game on "sign choice" button click and calls on function to calculate outcome */

  const selectButton = document.querySelector(".select-btn");
  selectButton.addEventListener("click", function () {
    const computerChoice = getComputerSignChoice();
    displayComputerChoice(computerChoice);

    const outcomeMessage = getOutcomeMessage(playerSignChoice, computerChoice);
    displayOutcomeMessage(outcomeMessage);
    countdownStart();
  });
  closeButton.addEventListener("click", function () {
    resetGame();
    closeBanner();
  });
});

function hideRoundOutcomeBanner() {
  roundOutcomeBannerDisplay.classList.add("hidden");
}

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

function displayOutcomeMessage(messageToDisplay) {
  const winnerBannerShown =
    !gameOutcomeBannerDisplay.classList.contains("hidden");
  if (winnerBannerShown) return;
  roundOutcomeBannerDisplay.classList.remove("hidden");
  roundOutcomeBannerParagraph.textContent = messageToDisplay;
  countdownPaused = true;
}

/** function comparing player choice and computer choice */

function getOutcomeMessage(userSignChoice, computerSignChoice) {
  if (userSignChoice === computerSignChoice) {
    return "It's a draw! Go again!";
  }

  switch (userSignChoice) {
    case ROCK:
      switch (computerSignChoice) {
        case SCISSORS:
          incrementPlayerScore();
          return "Rock crushes scissors... ✅ You WIN this round!";
        case LIZARD:
          incrementPlayerScore();
          return "Rock crushes lizard... ✅ You WIN this round!";
        case PAPER:
          incrementComputerScore();
          return "Paper covers rock... ❌ You LOSE this round!";
        case SPOCK:
          incrementComputerScore();
          return "Spock vaporizes rock... ❌ You LOSE this round!";
      }
    /* falls through */
    case PAPER:
      switch (computerSignChoice) {
        case ROCK:
          incrementPlayerScore();
          return "Paper covers rock... ✅ You WIN this round!";
        case SPOCK:
          incrementPlayerScore();
          return "Paper disproves Spock... ✅ You WIN this round!";
        case SCISSORS:
          incrementComputerScore();
          return "Scissors cut paper... ❌ You LOSE this round!";
        case LIZARD:
          incrementComputerScore();
          return "Lizard eats paper... ❌ You LOSE this round";
      }
    /* falls through */
    case SCISSORS:
      switch (computerSignChoice) {
        case PAPER:
          incrementPlayerScore();
          return "Scissors cut paper... ✅ You WIN this round!";
        case LIZARD:
          incrementPlayerScore();
          return "Scissors decapitates lizard... ✅ You WIN this round!";
        case ROCK:
          incrementComputerScore();
          return "Rock crushes scissors... ❌ You LOSE this round!";
        case SPOCK:
          incrementComputerScore();
          return "Spock smashes scissors... ❌ You LOSE this round!";
      }
    /* falls through */
    case LIZARD:
      switch (computerSignChoice) {
        case ROCK:
          incrementComputerScore();
          return "Rock crushes lizard... ❌ You LOSE this round!";
        case PAPER:
          incrementPlayerScore();
          return "Lizard eats paper... ✅ You WIN this round!";
        case SCISSORS:
          incrementComputerScore();
          return "Scissors decapitates lizard... ❌ You LOSE this round!";
        case SPOCK:
          incrementPlayerScore();
          return "Lizard poisons Spock... ✅ You WIN this round!";
      }
    /* falls through */
    case SPOCK:
      switch (computerSignChoice) {
        case ROCK:
          incrementPlayerScore();
          return "Spock vaporizes rock... ✅ You WIN this round!";
        case PAPER:
          incrementComputerScore();
          return "Paper disproves Spock... ❌ You LOSE this round!";
        case SCISSORS:
          incrementPlayerScore();
          return "Spock smashes scissors... ✅ You WIN this round!";
        case LIZARD:
          incrementComputerScore();
          return "Lizard poisons Spock... ❌ You LOSE this round!";
      }
  }
}

// Display player name in score area

function displayPlayerName() {
  document.getElementById("player-name-display").innerText = playerName;
}

/** Outcome of the comparison logic */

function displayPlayerScore() {
  document.getElementById("player-score").innerText = playerScore;
}

function displayComputerScore() {
  document.getElementById("computer-score").innerText = computerScore;
}

/** Check if player/computer score is equal to SCORE_TO_WIN.
 * Displays the winner block.
 * Header will display if the player has won or lost the game with the final scores.
 */

function showWinner() {
  if (playerScore >= SCORE_TO_WIN) {
    showTextInBanner(
      "You Win The Game!",
      `You: ${playerScore} > Computer: ${computerScore}`
    );
  } else if (computerScore >= SCORE_TO_WIN) {
    showTextInBanner(
      "You Lose The Game!",
      `Computer: ${computerScore} > You: ${playerScore}`
    );
  }
}

function showTextInBanner(headerContent, bodyContent) {
  gameOutcomeBannerDisplay.classList.remove("hidden");
  gameOutcomeBannerHeader.textContent = headerContent;
  gameOutcomeBannerParagraph.textContent = bodyContent;
  countdownPaused = true;
}

function incrementPlayerScore() {
  playerScore++;
  displayPlayerScore();
  showWinner();
}

function incrementComputerScore() {
  computerScore++;
  displayComputerScore();
  showWinner();
}

function closeBanner() {
  gameOutcomeBannerDisplay.classList.add("hidden");
  countdownPaused = false;
}

/**
 * Player score and Computer score are set to 0.
 * Computer icon is set back to a question mark. */

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  displayPlayerScore();
  displayComputerScore();
  clearSelectedChoiceButton();
  document.getElementById("computer-sign").className = "fas fa-question";
}

function clearSelectedChoiceButton() {
  choiceButtons.forEach(function (choiceButton) {
    choiceButton.classList.remove("selected-choice-btn");
  });
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
  clearInterval(countdownId);
  countdownId = setInterval(() => {
    if (countdownPaused) return;
    timeRemaining--;
    if (timeRemaining < 0) {
      clearInterval(countdownId);
      incrementComputerScore();
      outcomeMessageElement.innerHTML =
        "You ran out of time, ❌ you LOSE this round!";
      return;
    }
    timerElement.innerHTML = timeRemaining;
  }, 1000);
}
