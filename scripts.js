/*---Variable Declarations---*/
let playerSelection;
let computerSelection;
let playerWinCount = 0;
let computerWinCount = 0;
const buttons = document.querySelectorAll('button');
const roundWinner = document.querySelector('.round-winner-display');
const winConditions = document.querySelector('.win-conditions');
const mainBody = document.querySelector('.main-body');
const computerScore = document.querySelector('.computer-score-count');
const playerScore = document.querySelector('.player-score-count');
const playerPlaceArt = document.getElementById("playerPlaceArt");
const computerPlaceArt = document.getElementById("computerPlaceArt");
const rockArt = "images/rock.png";
const scissorsArt = "images/scissors.png";
const paperArt = "images/toilet-paper.png";

/*---Function Declarations---*/
let getComputerSelection = () => {
    let computerInteger = getRandomInteger(1,3);
    
    switch (computerInteger) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

let getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getRoundWinner = () => {
    let displayMessage;

    //Create a function that calls all of the repeated game functionality functions to clean it up
    if (playerSelection === "rock" && computerSelection === "paper") {
        displayMessage = ("Paper beats rock.. You lose!");
        getComputerPoint();
        roundFunctionality(displayMessage, playerSelection, computerSelection);
        return;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        displayMessage = ("Rock beats scissors.. You win!");
        getPlayerPoint();
        roundFunctionality(displayMessage, playerSelection, computerSelection);
        return;
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        displayMessage = ("Scissors beats paper.. You win!");
        getPlayerPoint();
        roundFunctionality(displayMessage, playerSelection, computerSelection);
        return;
    }
 
    if (playerSelection === "scissors" && computerSelection === "rock") {            
        displayMessage = ("Rock beats scissors.. You lose!");
        getComputerPoint();
        roundFunctionality(displayMessage, playerSelection, computerSelection);
        return;
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        displayMessage = ("Paper beats rock.. You win!");
        getPlayerPoint();
        roundFunctionality(displayMessage, playerSelection, computerSelection);
        return;
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        displayMessage = ("Scissors beats paper.. You lose!");
        getComputerPoint();
        roundFunctionality(displayMessage, playerSelection, computerSelection);
        return;
    }

    else {
        displayMessage = ("Its a tie!");
        roundFunctionality(displayMessage, playerSelection, computerSelection);
        return;
    }
}

let playGame = () => {

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.id;

        computerSelection = getComputerSelection();

        getRoundWinner();
        determineOverallWinner();
    });
  });
}

let getComputerPoint = () => {
    return computerWinCount++;

}

let getPlayerPoint = () => {
    return playerWinCount++;
}

//End of game message
let getWinnerMessage = () => {
    if (playerWinCount > computerWinCount) {
        return alert("Congrats!!! You Win!! Thanks for playing. Refresh the page to play again.");
    }

    else {
        return alert("BOOOOOOOOO. YOU LOSE. Thanks for playing. Refresh the page to play again.");
    }
}
//Acts as a final message
let determineOverallWinner = () => {
    if (playerWinCount == 5 || computerWinCount == 5) {
        updateAllScores();
        getWinnerMessage();
    }

    else {
        return;
    }
}

let displayRoundWinner = (roundWinnerMessage) => {
    if (mainBody.contains(winConditions)) {
        winConditions.textContent = "";
    }
    
    roundWinner.textContent = roundWinnerMessage;
    return;
}

let updateAllScores = () => {
    computerScore.textContent = "Computer Score: " + computerWinCount;
    playerScore.textContent = "Player Score: " + playerWinCount;
    return;
}

let displayPixelArt = (playerArt, computerArt) => {
    switch(playerArt) {
        case "rock":
            playerPlaceArt.src = rockArt
            break;
        case "paper":
            playerPlaceArt.src = paperArt;
            break;
        case "scissors":
            playerPlaceArt.src = scissorsArt;
            break;
    }

    switch(computerArt) {
        case "rock":
            computerPlaceArt.src = rockArt
            break;
        case "paper":
            computerPlaceArt.src = paperArt;
            break;
        case "scissors":
            computerPlaceArt.src = scissorsArt;
            break;
    }
    return;
    
}

let roundFunctionality = (displayMessage, playerSelection, computerSelection) => {
        displayRoundWinner(displayMessage);
        displayPixelArt(playerSelection, computerSelection);
        updateAllScores();
        return;
}

/*---Start of run program---*/
playGame();