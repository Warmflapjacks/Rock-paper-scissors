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


/*---Start of run program---*/
getComputerSelection();
getPlayerSelection();