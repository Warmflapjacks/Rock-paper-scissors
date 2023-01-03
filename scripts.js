//Psuedo//

// Play a round of RPS
//     Get player choice
//         Ask for player choice
//         Answer --> tolowercase to compensate for case sensitivity
//         Determine if choice is rock paper or scissors

//     Get computer choice
//         Randomly generate a computer choice

//     Compare player choice to computer choice
//         Determine a winner
    
//         Output winner message

//     If playerchoice beats computer choice
//         player win count++

//         else
//             computer win count++

//     Display updated win count


/*---Variable Declarations---*/
let playerSelection;
let computerSelection;
let playerWinCount = 0;
let computerWinCount = 0;

/*---Function Declarations---*/
let getPlayerSelection = () => {
    let playerChoice = prompt("Enter your selection -- Rock, Paper or Scissors: ");   
    let caseSensitiveChoice = playerChoice.toLowerCase();

    if (inputValidation(caseSensitiveChoice)) {
        return caseSensitiveChoice;
    }
    
    else {
        while (inputValidation(caseSensitiveChoice) === false) {
            playerChoice = prompt("Invalid selection. Enter your selection -- Rock, Paper or Scissors: ");   
            caseSensitiveChoice = playerChoice.toLowerCase();
            inputValidation(caseSensitiveChoice);
        }
    }
    return caseSensitiveChoice;
};

let inputValidation = (isValid) => {
    const VALID_INPUTS = ["rock", "paper", "scissors"];

    if (VALID_INPUTS.includes(isValid)) {
        return true;
    }

    else {
        return false;
    }
}

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
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Paper beats rock.. You lose!");
        getComputerPoint();
        return;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors.. You win!");
        getPlayerPoint();
        return;
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beats paper.. You win!");
        getPlayerPoint();
        return;
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {getPlayerPoint()
        console.log("Rock beats scissors.. You lose!");
        getComputerPoint();
        return;
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats rock.. You win!");
        getPlayerPoint();
        return;
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Scissors beats paper.. You lose!");
        getComputerPoint();
        return;
    }

    else {
        console.log("Its a tie!");
        return;
    }
}

let playGame = () => {
    let totalRounds = prompt("How many rounds would you like to play?");
    
    for (let i = 1; i <= totalRounds; i++) {
        console.log("Inside the for loop on round: " + i);
        computerSelection = getComputerSelection();

        console.log("Computer selection: " + computerSelection);
        playerSelection = getPlayerSelection();

        console.log("Player selection: " + playerSelection);
        getRoundWinner();
        getOverallScore();
    }
    getWinnerMessage();
    playAgain();
}

let getComputerPoint = () => {
    return computerWinCount++;
}

let getPlayerPoint = () => {
    return playerWinCount++;
}

let getOverallScore = () => {
    console.log("Final scores are the following: ");
    console.log("Player Score is: " + playerWinCount);
    console.log("Computer Score is: " + computerWinCount);
    return;
}

let getWinnerMessage = () => {
    if (playerWinCount > computerWinCount) {
        return console.log("Congrats!! You Win!!");
    }

    if (playerWinCount < computerWinCount) {
        return console.log("BOOOOOOOOO. YOU LOSE.");
    }

    else {
        return console.log("Its a tie!")
    }
}

let playAgain = () => {
    let answer = prompt("Would you like to play again? Enter Y/N: ");
    let possibleAcceptableAns = answer.toLowerCase();

    if (possibleAcceptableAns === "y") {
        playGame();
    }

    else {
        console.log("Thanks for playing");
    }
}
/*---Start of run program---*/
playGame();