# Portfolio-Project-2-JavaScript: Rock, Paper, Scissors, Lizard, Spock

## Purpose

This Website was created as part of the Code Institute's Software Development (E-commerce Applications) curriculum. It was created using the knowledge gained from the modules HTML, CSS, User Experience Essentials, and JavaScript Essentials. A full list of technologies used can be found in the [technologies](#Technologies-Used) section of this document.

This Website allows users to play rounds of the game "Rock, Paper, Scissors, Lizard, Spock", which is based on the famously known game of "Rock, Paper, Scissors". Many decisions have been made as an outcome of a round or a game of "Rock, Paper, Scissors". The Website should be easy to use for any user.

The aim of the game is to win 5 rounds. After providing his/her/their name, the user can select the difficulty level. The difficulty level impacts how much time the user has during each round. Each round, the player has to select a sign. Based on the user choice sign and the computer choice, a winner is decided. In case the user and the computer select the same sign, it is a draw and no points are allocated.

## Table of Contents

- [User Experience (UX)| User Interface (UI)](#User-Experience-Design)
  - [The Strategy Plane](#The-Strategy-Plane)
    - [User stories](#User-Stories)
  - [The Scope Plane](#The-Scope-Plane)
  - [The Structure Plane](#The-Structure-Plane)
  - [The Skeleton Plane](#The-Skeleton-Plane)
    - [Wireframes](#Wireframes)
  - [The Surface Plane](#The-Surface-Plane)
    - [Design](#Design)
      - [Colour Scheme](#Colour-Scheme)
      - [Typography](#Typography)
      - [Imagery](#Imagery)

* [Features](#Features)
  - [Existing Features](#Existing-Features)
  - [Future Features](#Features-Left-to-Implement)

- [Technologies](#Technologies)

- [Testing](#Testing)

  - [Test Strategy](#Test-Strategy)
  - [Test Results](#Test-Results)
    - [Lighthouse](#lighthouse)
    - [W3c CSS Validator](#w3c-css-validator)
    - [JSHint](#jshint)
    - [Testing game for achievement of user goals](#testing-game-for-achievement-of-user-goals)
  - [Issues and Resolutions](#Issues-and-Resolutions-to-issues-found-during-testing)

- [Deployment](#Deployment)
  - [GitHub Pages](#Using-Github-Pages)
  - [Running locally](#running-locally)
  - [Locally](Run-Locally)
- [Credits](#Credits)

  - [Content](#Content)
  - [Acknowledgements](#Acknowledgements)

  ***

## User Experience Design

### **The 5 Strategy Plane**

This website was created to showcase my knowledge of HTML, CSS & JavaScript. Its secundary objective is to provide users with a form of distraction through a game of "Rock, Paper, Scissors, Lizard, Spock" using my knowledge of HTML, CSS, and JavaScript. Based on a famous and widely known game, the game should be easy to understand, easy to interact with.

Website Goals:

- Showcase the knowledge I have acquired in HTML, CSS, JavaScript.
- Provide users with an interactive game to play that has clear Win / Lose Scenarios.
- Create an fun and interactive game that makes the user want to stay and play again.

#### User stories

As a user, I want to:

- understand the main purpose of the site.
- be able to visualise and interact with the website and content on any device.
- easily understand the rules.
- be able to start a game when I am ready.
- set a difficulty level to choose the challenge.
- know how much time I have left in the round.
- read the outcome of each round.
- know what is the current score of the game.
- be able to start a new game when the current game has come to an end.

As the website's owner, I want to:

- provide entertainment.
- make this game accessible to anyone.
- test my coding abilities through improvement of the script and features.

### **The Scope Plane**

Features delivered:

- Page Heading - A page heading that has a clear caption what the page is about.
- Interactive game of "Rock, Paper, Scissors, Lizard, Spock".
- Input for the user's name.
- Selection of difficulty levels.
- Game Instructions - Clear instructions on how to play and win the game.
- I'm Ready Button.
- Countdown timer.
- Outcome message for each round.
- Score Count.
- Final winner banner with final scores.
- Restart game button after a game.
- Footer Items - Rules of the game.

**Feature Importance/Effort** <br>
![Features]

### **The Structure Plane**

User Story:

> As a user, I want to easily understand the main purpose of the site.

Acceptance Criteria:

- Header displays text 'Studying is hard. Let us take a break and play:'
- Sub heading displayed with text 'Rock, Paper, Scissors, Lizard, Spock!'

Description:<br>
A page heading will be added that reads 'Studying is hard. Let us take a break and play:' with a tag line below it reading 'Rock, Paper, Scissors, Lizard, Spock!'. This will enable the users to immediately identify what the website is about as soon as they enter.

User Story:

> As a user, I want to be able to visualise and interact with the website and content on any device.

Acceptance Criteria:

- Website layout allows users to read the content across all sized devices and interact with it.

Description:<br>
A flex display will be used for the sign selection. It will allow better portability based on the device type used. Mobile first design will be used when coding the project and testing will be required to ensure the layout is clear on all devices. No elements should overlap their containers and all items should be responsive so that no elements are too large to display properly.

User Story:

> As a user, I want to easily understand the rules.

Acceptance Criteria:

- Game Instructions wille be provided upon entering the Website:
  - the Win/Lose criteria will be displayed.
- At the bottom of the page additional information will be provided about the game:
  - How to win the game.
  - How to lose the game.

Description:<br>
Information to be included:
A clear set of instructions about the game will be displayed to the user upon arrival on the website. The user will be able to chose the difficulty and launch the game. The user will know how to win or lose the game.<br>
An outcome message will describe the outcome of the round.<br>
Based on the outcome, the score will be incremented accordingly.<br>
After a score of "5" will be reached, a banner will display announcing the winner of the game and displaying the scores.<br>

User Story:

> As a user, I want to be able to start a game when I am ready.

Acceptance Criteria:

- User can initiate game when he/she/their choses.

Description:<br>
A button will be added to the welcome banner to allow the user to start a game.

User Story:

> As a user, I want to set a difficulty level to choose the challenge.

Acceptance Criteria:

- User can select the diffuclty to define how much of a challenge they need.

Description:<br>
Based on the difficulty level, the user defines how much time he/she/their has to select a sign each round. The timer countdown will launch as soon as the user will submit their choices and have provided their name.

User Story:

> As a user, I want to know how much time I have left in the round.

Acceptance Criteria:

- Display the countdown timer
- See how much time the user has to select a choice

Description:<br>
At the start of each round, the timer should reset based on the difficulty level.<br>
The timer should be easily visible and increment the computer score if it reaches 0.<br>

User Story:

> As a user, I want to read the outcome of each round.

Acceptance Criteria:

- Display who the winner of the round is
- Provide the reasoning of why the player won/lost the round

Description:<br>
After submitting their choice, the user can see what the computer has selected as a sign.<br>
Underneath the computer sign, an outcome message will display the logic of the battle and designate who the winner of the round is.<br>

User Story:

> As a user, I want to know what is the current score of the game.

Acceptance Criteria:

- User and Computer scores are displayed on Screen.

Description:<br>
A score section will be added to the page to show the user how many games they have won and how many games the computer has won. This score will only be displayed for the current session. Once the browser is refreshed, the score will reset.

User Story:

> As a user, I want be able to start a new game when the current game has come to an end.

Acceptance Criteria:

- User has a way to restart the game without refreshing the page.

Description:<br>
A button will be added to the banner upon completion of the game to allow the user to start a new game.

### **The Skeleton Plane**

#### Wireframes

![Figma Skeleton Prototype Welcome](https://github.com/nfepb/Portfolio-Project-2-JavaScript/blob/main/assets/images/Figma%20Skeleton%20Prototype%20Welcome.png)<br>
![Figma Skeleton Prototype Game](https://github.com/nfepb/Portfolio-Project-2-JavaScript/blob/main/assets/images/Figma%20Skeleton%20Prototype%20Game.png)<br>
![Figma Skeleton Prototype Phone Welcome](https://github.com/nfepb/Portfolio-Project-2-JavaScript/blob/main/assets/images/Figma%20Skeleton%20Prototype%20Phone%20Welcome.png)<br>
![Figma Skeleton Prototype Phone Game](https://github.com/nfepb/Portfolio-Project-2-JavaScript/blob/main/assets/images/Figma%20Skeleton%20Prototype%20Phone%20Game.png)<br>

### **The Surface Plane**

### Design

#### Colour Scheme

A pallette of colours were selected in order to bring sufficient contrast.

Background colour: A gradient to bottom right from Green to Blue [rgba(16, 99, 207, 0.5)](https://placehold.it/15/373638/000000?text=+)[rgba(56, 247, 151, 0.5)](https://placehold.it/15/373638/000000?text=+)<br>
Text colour and footer background: A shade of Blue [#34568B](https://placehold.it/15/FFFFFF/000000?text=+)<br>
Game Area background colour: A light grey [#E6E2EC](https://placehold.it/15/868686/000000?text=+)<br>
Footer text color: White [#FFFFFF](https://placehold.it/15/9E5656/000000?text=+)<br>
Banner background color: A shade of Yellow [#f5e780]<br>

#### Typography

The header and the body are using the [Fuzzy Bubbles](https://fonts.google.com/specimen/Fuzzy+Bubbles) font, while the text for the choice buttons is using [Gloria Hallelujah](https://fonts.google.com/specimen/Gloria+Hallelujah)<br>

#### Imagery

The logo displayed at the top of the page is a free icon. It can be found on the website of flaticons under the name [Mental Health free icon](https://www.flaticon.com/free-icon/mental-health_3588658?term=study%20break&page=1&position=1&page=1&position=1&related_id=3588658&origin=search).<br>

---

## Features

### Existing Features

- Heading and Sub-heading so the user knows exactly what this website is for. The icon in the navigation bar has a hover effect to allow the user to know when they are about to click on the rules icon.
  ![Navigation and title with logo](assets/images/features/nav-with-intro.png)
  ![Page title Roack, Paper, Scissors, Lizard Spock](assets/images/features/title.png)

- A banner image appears when clicking on the icon in the navigation of the page to displays the rules, obscuring the rest of the page. This banner appears with a fade in, and can be removed by clicking on the close it or pressing the `Esc` key
  ![rules banner obscuring the rest of the page](assets/images/features/rules-banner.png)

- User input banner that allow the user to provide their username and to select the difficulty level they want to play in. Once ready, the user launches the game through the button at the end of the form.
  ![Input form on page open](assets/images/features/welcome-form.png)

- The user has to input a name in order to advance and launch the game. When the user seeks to advance without input, a validation message appears to guide the user.
  ![User feedback empty username submission](assets/images/features/input-validation-welcome-form.png)

- The game area displays 5 buttons to allow the user to select the sign they want to try to win the round. When a sign is selected, it is circle through a thick red border and the name of the buttons is slightly pushed down. A countdown starts at the beginning of each round. When it reaches 0, the computer wins the round. The time in the countdown is directly linked to the difficulty level. Once the user is happy with their choice, they can submit the sign choice through the submission button. The computer choice is randomly selected. Based on the computer sign choice, an outcome message is both displayed on the game area, and as on a banner (see below).
  ![game area](assets/images/features/game-area.png)

- In order to make it obvious for the user what the round outcome it, a banner is displayed repeating the text in the div from the game area. While this banned is displayed, the game and countdown are stopped.
  ![end of round banner with outcome message](assets/images/features/end-round-result-message.png)

- A scoreboard is displayed below the game area. The username provided by the user is displayed, alongside with their score. The computer and its score is displayed next to it.
  ![scoreboard](assets/images/features/scoreboard.png)

- End of game message with the close button restting the game on closing the banner.
  ![end of round banner with close button](assets/images/features/end-game-banner.png)

---

Modal appearing when clicking on the rules icon in the navigation bar. The script is based on the tutorial of [envatotuts+](https://webdesign.tutsplus.com/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500)

### Features Left to Implement

- Outcome message when the player wants to play the first round without initially selecting a sign.
- While the round outcome banner is displayed, de-activate "Enter" pressdown to continue the game and submit the sign choice for the next round.
- Stop all inputs once the game reaches 5 wins or losses and only allow reset.

---

## Technologies

- [HTML](https://en.wikipedia.org/wiki/HTML)
  - This project uses HTML as the main language used to complete the structure of the Website.
- [CSS](https://en.wikipedia.org/wiki/CSS)
  - This project uses custom written CSS to style the Website.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  - This project uses JavaScript for functionality through the Website, this includes the Rock, Paper, Scissors, Lizard, Spock, the onclick button functions, the timer, the difficulty levels.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts are used throughout the project to import the _Fuzzy Bubbles_ and _Gloria Hallelujah_ fonts.
- [Font Awesome](https://fontawesome.com/)
  - Font Awesome icons are used to display the user choices and the selected computer choice for the signs Rock, Paper, Scissors, Lizard, and Spock.
- [GitHub](https://github.com/)
  - GitHub is the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
- [Git](https://git-scm.com/)
  - Git is used as version control software to commit and push code to the GitHub repository where the source code is stored.
- [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
  - Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and with the JavaScript logic.
- [Excel](https://www.microsoft.com/en-ie/microsoft-365/excel)
  - Excel was used to log the different tests and outcomes during testing phase.

---

## Testing

### Test Strategy

#### **Summary**

Testing is required on Rock, Paper, Scissors, Lizard, Spock JavaScript game created for Milestone Project 2. All features and user stories documented in the README are to be tested.

HTML code must pass through the [W3C HTML Validator](https://validator.w3.org/).

CSS code must pass through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

JavaScript code must pass through the [JSHint Validator](https://jshint.com/).

### Test Results

#### **Lighthouse**

This page was tested using the Lighthouse feature from the Chrome Browser, giving the following results:

- Desktop:
  ![Lighthouse Desktop test result](assets/images/lighthouse-desktop-performance.png)<br>

- Desktop:
  ![Lighthouse Mobile test result](assets/images/lighthouse-mobile-performance.png)<br>

The performance was performing lower due to style elements needed to be downloaded upon entering the website.

#### **W3 HTML Validator**

The html file was tested using the W3 HTML validator showing 0 errors.

[W3 HTML Validator](assets/images/W3C-validation.png)

#### **W3c CSS Validator**

The css file was tested using the W3C CSS validator showing 9 errors.

[W3C CSS Validator](assets/images/w3c-css-validation.png)

- 7 errors are known issues due to vendor extensions from Mozilla ([StackOverflow](https://stackoverflow.com/questions/8765673/moz-box-shadow-0-0-10px-rgba0-0-0-0-3-not-passing-css3-validator)) and Internet Explorer ([Splunktool](https://splunktool.com/css-21-errors-not-a-known-property-name)).
- 2 errors from the import of the favicons stylesheet due to deprecated `clip` property ([StackOverflow](https://stackoverflow.com/questions/23849377/html-5-favicon-support)).

#### **JSHint**

The Javascript file was validated using JSHint, with the following result. The New JavaScript features (ES6) option was ticked in the Configure menu.

[JSHint test result script.js](assets/images/script-js-jshint.png)
[JSHint test result display.js](assets/images/display-js-jshint.png)

#### **Testing game for achievement of user goals**

| Goal                                                                                               | Outcome                                                                             |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| As a user, I want to understand the main purpose of the site.                                      | Header and introduction banner first visible.                                       |
| As a user, I want to be able to visualise and interact with the website and content on any device. | Media queries used to make game accessible across a range of devices.               |
| As a user, I want to easily understand the rules.                                                  | Game rules to win displayed at the top. Further explanation provided in the footer. |
| As a user, I want to be able to start a game when I am ready.                                      | Submit button allows the user to start only when ready.                             |
| As a user, I want to set a difficulty level to choose the challenge.                               | Easy/Medium/Hard difficulty radio options provided.                                 |
| As a user, I want to know how much time I have left in the round.                                  | Timer function displaying time left based on the difficulty for each round.         |
| As a user, I want to read the outcome of each round.                                               | Outcome message displayed after each round.                                         |
| As a user, I want to know what is the current score of the game.                                   | Scoreboard displaying live score of players under the game area.                    |
| As a user, I want to be able to start a new game when the current game has come to an end.         | Reset button on the display banner at end of game.                                  |

### Issues and Resolutions to issues found during testing

- JSHint did not recognize constants in the JavaScript code. Based on a question raised on [Stackoverflow](https://stackoverflow.com/questions/37247474/es6-in-jshint-jshintrc-has-esversion-but-still-getting-warning-using-atom), "/_jshint esversion: 6 _/" needed to be added on top of the script to disregard this known issue with ES6.
- JSHint warned of an error in the Switch statements. Breaks were omitted by design. The solution provided to disregard this error was provided on [Stackoverflow](https://stackoverflow.com/questions/22398251/jshint-throws-aexpected-a-break-statement-before-case/22398337) by adding a comment "/_ falls through _/" after each case block for the user selected sign.
- No resolution found: improve site performance.
- Display an outcome message when the timer is running out explaining the computer score incremented.
- Error message in the console `Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.`. This error message is caused by GitHub hosted pages. GitHub disables FLoC, which is Google's 3rd party cookie alternative. [Source StackOverflow](https://stackoverflow.com/questions/69619035/error-with-permissions-policy-header-unrecognized-feature-interest-cohort)
- Have a modal appear to display the rules with more contrast. [Webdesign Tutplus code](https://webdesign.tutsplus.com/tutorials/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500)

---

## Deployment

This project was built on the Gitpod IDE using the Code Institute template found [here](https://github.com/Code-Institute-Org/gitpod-full-template)

### GitHub Pages

GitHub Pages is a static site hosting service which uses files from a GitHub repository to publish a website. I used Github Pages to deploy this project following the process set out below.

1. Open the Github repository page you wish to publish, in this case [Here](https://github.com/nfepb/Portfolio-Project-2-JavaScript).
1. Click on the 'Settings' option from the list of options above the repo contents.
1. Scroll down the page and select the source before clicking on the link to deploy.
1. Click 'Save'.
1. The URL for the website will be shown in a panel towards the top of the page. After a brief wait it will turn green indicating the website is published.

![github-page-published](assets/images/repo-published.png)<br>

### Running locally

1. Navigate to the [GitHub Repository](https://github.com/nfepb/Portfolio-Project-2-JavaScript)
1. Click the Code drop down menu.
1. Download the ZIP file, unpackage locally and open with IDE OR Copy Git URL from the HTTPS dialogue box.
1. Open your developement editor of choice and open a terminal window in a directory of your choice.
1. Use the 'git clone' command in terminal followed by the copied git URL.
1. A clone of the project will be created locally on your machine.

---

## Credits

### Code

The JavaScript Rock, Paper, Scissors, Lizard, Spock was created by following a published project on [Learnersbucket](https://learnersbucket.com/tutorials/js-projects/rock-paper-scissor-lizard-spock-game-in-javascript/). This was used as a source of inspiration and then heavily modified to fit the game design, including but not limited to: the timer countdown and the logic associated, the difficulty levels, the player input banner, the final outcome banner at the end of the game, the footer description with the rules.

### Acknowledgements

I would like to thank my friend Max for his support throughout this project, slack user Ronan_mentor for his advice and final JavaScript pointers on the last steps of this project.

---
