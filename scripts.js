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


//---Play round---//

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

getPlayerSelection();