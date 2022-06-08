# Portfolio-Project-2-JavaScript: Rock, Paper, Scissors, Lizard, Spock

## Purpose

This Website was created as part of the Code Institute's Software Development (E-commerce Applications) curriculum. It was created using the knowledge gained from the modules HTML, CSS, User Experience Essentials, and JavaScript Essentials. A full list of technologies used can be found in the [technologies](#Technologies-Used) section of this document.

This Website allows users to play rounds of the game "Rock, Paper, Scissors, Lizard, Spock", which is based on the famously known game of "Rock, Paper, Scissors". Many decisions have been made as an outcome of a round or a game of "Rock, Paper, Scissors". The Website should be easy to use for any user. 

The aim of the game is to win 5 rounds. After providing his/her/their name, the user can select the difficulty level. The difficulty level impacts how much time the user has during each round. Each round, the player has to select a sign. Based on the user choice sign and the computer choice, a winner is decided. In case the user and the computer select the same sign, it is a draw and no points are allocated. 

## Table of Contents

* [User Experience (UX)| User Interface (UI)](#User-Experience-Design)
    * [The Strategy Plane](#The-Strategy-Plane)
        * [User stories](#User-Stories)
    * [The Scope Plane](#The-Scope-Plane)
    * [The Structure Plane](#The-Structure-Plane)
    * [The Skeleton Plane](#The-Skeleton-Plane)
        * [Wireframes](#Wireframes)
    * [The Surface Plane](#The-Surface-Plane)
        * [Design](#Design)
            * [Colour Scheme](#Colour-Scheme)
            * [Typography](#Typography)
            * [Imagery](#Imagery)
    * [Differences to Design](#Differences-to-Design)
- [Features](#Features)
    * [Existing Features](#Existing-Features)
    * [Future Features](#Features-Left-to-Implement)
* [Technologies](#Technologies)
* [Testing](#Testing)
    * [Test Strategy](#Test-Strategy)
    * [Test Results](#Test-Results)
    * [Isses and Resolutions](#Issues-and-Resolutions-to-issues-found-during-testing)
* [Deployment](#Deployment)
    * [Project Creation](#Project-Creation)
    * [GitHub Pages](#Using-Github-Pages)
    * [Locally](Run-Locally)
* [Credits](#Credits)
  * [Content](#Content)
  * [Acknowledgements](#Acknowledgements)

  ****

## User Experience Design
### **The 5 Strategy Plane**
This website was created to showcase my knowledge of HTML, CSS & JavaScript. Its secundary objective is to provide users with a form of distraction through a game of "Rock, Paper, Scissors, Lizard, Spock" using my knowledge of HTML, CSS, and JavaScript. Based on a famous and widely known game, the game should be easy to understand, easy to interact with. 

Website Goals:
* Showcase the knowledge I have acquired in HTML, CSS, JavaScript.
* Provide users with an interactive game to play that has clear Win / Lose Scenarios.
* Create an fun and interactive game that makes the user want to stay and play again.

#### User stories
As a user, I want to:
* understand the main purpose of the site.
* be able to visualise and interact with the website and content on any device.
* easily understand the rules.
* be able to start a game when I am ready.
* set a difficulty level to choose the challenge. 
* know how much time I have left in the round.
* read the outcome of each round.
* know what is the current score of the game.
* be able to start a new game when the current game has come to an end.

As the website's owner, I want to:
* provide entertainment.
* make this game accessible to anyone.
* test my coding abilities through improvement of the script and features.

### **The Scope Plane**
Features delivered:
* Page Heading - A page heading that has a clear caption what the page is about.
* Interactive game of "Rock, Paper, Scissors, Lizard, Spock".
* Input for the user's name.
* Selection of difficulty levels.
* Game Instructions - Clear instructions on how to play and win the game.
* I'm Ready Button.
* Countdown timer.
* Outcome message for each round.
* Score Count.
* Final winner banner with final scores.
* Restart game button after a game.
* Footer Items - Rules of the game.

**Feature Importance/Effort** <br>
![Features]

### **The Structure Plane**

User Story:
> As a user, I want to easily understand the main purpose of the site.
 
 Acceptance Criteria:
* Header displays text 'Studying is hard. Let us take a break and play:'
* Sub heading displayed with text 'Rock, Paper, Scissors, Lizard, Spock!'

Description:<br>
A page heading will be added that reads 'Studying is hard. Let us take a break and play:' with a tag line below it reading 'Rock, Paper, Scissors, Lizard, Spock!'. This will enable the users to immediately identify what the website is about as soon as they enter.

User Story:
> As a user, I want to be able to visualise and interact with the website and content on any device.
 
 Acceptance Criteria:
 * Website layout allows users to read the content across all sized devices and interact with it.

Description:<br>
A flex display will be used for the sign selection. It will allow better portability based on the device type used. Mobile first design will be used when coding the project and testing will be required to ensure the layout is clear on all devices. No elements should overlap their containers and all items should be responsive so that no elements are too large to display properly.

User Story:
> As a user, I want to easily understand the rules.
 
 Acceptance Criteria:
 * Game Instructions wille be provided upon entering the Website:
    * the Win/Lose criteria will be displayed. 
 * At the bottom of the page additional information will be provided about the game:
    * How to win the game.
    * How to lose the game.

Description:<br>
Information to be included:
A clear set of instructions about the game will be displayed to the user upon arrival on the website. The user will be able to chose the difficulty and launch the game. The user will know how to win or lose the game.<br>
An outcome message will describe the outcome of the round.<br>
Based on the outcome, the score will be incremented accordingly.<br>
After a score of "5" will be reached, a banner will display announcing the winner of the game and displaying the scores.<br>

User Story:
> As a user, I want to be able to start a game when I am ready.
 
 Acceptance Criteria:
 * User can initiate game when he/she/their choses.

Description:<br>
A button will be added to the welcome banner to allow the user to start a game.

User Story:
> As a user, I want to set a difficulty level to choose the challenge.
 
 Acceptance Criteria:
 * User can select the diffuclty to define how much of a challenge they need. 

Description:<br>
Based on the difficulty level, the user defines how much time he/she/their has to select a sign each round. The timer countdown will launch as soon as the user will submit their choices and have provided their name.

User Story:
> As a user, I want to know how much time I have left in the round.
 
 Acceptance Criteria:
 * Display the countdown timer
 * See how much time the user has to select a choice

Description:<br>
At the start of each round, the timer should reset based on the difficulty level.<br>
The timer should be easily visible and increment the computer score if it reaches 0.<br>

User Story:
> As a user, I want to read the outcome of each round.
 
 Acceptance Criteria:
 * Display who the winner of the round is
 * Provide the reasoning of why the player won/lost the round

Description:<br>
After submitting their choice, the user can see what the computer has selected as a sign.<br>
Underneath the computer sign, an outcome message will display the logic of the battle and designate who the winner of the round is.<br>

User Story:
> As a user, I want to know what is the current score of the game.
 
 Acceptance Criteria:
 * User and Computer scores are displayed on Screen.

Description:<br>
A score section will be added to the page to show the user how many games they have won and how many games the computer has won. This score will only be displayed for the current session. Once the browser is refreshed, the score will reset.

User Story:
> As a user, I want be able to start a new game when the current game has come to an end.
 
 Acceptance Criteria:
 * User has a way to restart the game without refreshing the page.

Description:<br>
A button will be added to the banner upon completion of the game to allow the user to start a new game. 