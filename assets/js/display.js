// Function waiting for DOM to load

document.addEventListener("DOMContentLoaded", function () {
  let navigationIcons = document.getElementById("navigation").children;

  for (let navigationIcon of navigationIcons) {
    let messageContent = navigationIcon.children[0].getAttribute("data-type");
    navigationIcon.addEventListener("click", function () {
      displayMessage(messageContent);
    });
  }
});

// Display welcoming message
displayMessage("welcome");

function displayMessage(messageType) {
  // Create & Display message container
  let messageContainer = document.createElement("div");
  messageContainer.id = "message-container";
  messageContainer.style.animation = "slide-in 0.8s ease-out";
  document.body.appendChild(messageContainer);

  // Adds to innerHTML in container
  if (messageType === "rules") {
    messageContainer.innerHTML = `
        <button class="icons close-container" aria-label="Close rules"><i class="fas fa-times"></i></button>
        <h2>How to Play</h2>
        <p>Use the game buttons to select your sign.
        The computer is your opponent. 5 winning rounds wins the game!
        Outsmart it to win the game!</p>
        <ul id="how-to-play">
        <li>Rock<i class="fa-solid fa-hand-back-fist"></i> smashes Scissors<i class="fa-solid fa-hand-scissors"></i> and crushes Lizard<i class="fa-solid fa-hand-lizard"></i></li>
        <li>Paper<i class="fa-solid fa-hand"></i> covers Rock<i class="fa-solid fa-hand-back-fist"></i> and disproves Spock<i class="fa-solid fa-hand-spock"></i></li>
        <li>Scissors<i class="fa-solid fa-hand-scissors"></i> cut Paper<i class="fa-solid fa-hand"></i> and decapitates Lizard<i class="fa-solid fa-hand-lizard"></i></li>
        <li>Lizard<i class="fa-solid fa-hand-lizard"></i> eats Paper<i class="fa-solid fa-hand"></i> and bites Spock<i class="fa-solid fa-hand-spock"></i></li>
        <li>Spock<i class="fa-solid fa-hand-spock"></i> vaporizes Rock<i class="fa-solid fa-hand-back-fist"></i> and breaks Scissors<i class="fa-solid fa-hand-scissors"></i></li>
        </ul>
        <button id="rules">Rules</button>
        <button>Start!</button>
        </div>
        `;
  } else {
    messageContainer.innerHTML = `
        <button class="icons close-container" aria-label="Close rules"><i class="fas fa-times"></i></button>
        <h2>What do you want to do?!</h2>
        `;
  }

  // Adds button to close container message
  let closeWindow = document.getElementsByClassName("close-container");
  for (let i = 0; i < closeWindow.length; i++) {
    closeWindow[i].addEventListener("click", function () {
      closeContainerMessage();
    });
  }
}

function populateButtons(messageType) {
  // -- add event listeners to toggle upgrades from settings menu
  if (messageType == "rules") {
    // -- no buttons present in rules message
    // -- all other buttons close the current message
    let messageButtons = document.getElementById("message-buttons").children;
    for (let i = 0; i < messageButtons.length; i++) {
      messageButtons[i].addEventListener("click", function () {
        closeContainerMessage();

        if (messageButtons[i].id === "rules") {
          // -- add event listener to open game rules
          messageButtons[i].addEventListener("click", function () {
            setTimeout(function () {
              displayMessage("rules");
            }, 500);
          });
        }
      });
    }
  }
}

function closeContainerMessage() {
  // Hides and removes container message
  let messageContainer = document.getElementById("message-container");
  messageContainer.style.animation = "slide-out 0.5s linear";
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    messageContainer.remove();
  }, 750);
  setTimeout(function () {
    document.body.style.overflow = "visible";
  }, 750);

  // Displays navigation icons after time out
  setTimeout(function () {
    document.getElementById("navigation").style.display = "flex";
  }, 500);
}
