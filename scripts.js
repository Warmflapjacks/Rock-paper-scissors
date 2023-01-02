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
        return;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors.. You win!");
        return;
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beats paper.. You win!");
        return;
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Rock beats scissors.. You lose!");
        return;
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats rock.. You win!");
        return;
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Scissors beats paper.. You lose!");
        return;
    }

    else {
        console.log("Its a tie!");
        return;
    }
}


/*---Start of run program---*/
computerSelection = getComputerSelection();
console.log("Computer selection: " + computerSelection);
playerSelection = getPlayerSelection();
console.log("Player selection: " + playerSelection);
getRoundWinner();