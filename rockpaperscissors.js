
//checkInput(userInput());

function getComputerChoice() {
    let computerChoice = "";
    switch (getRandomInt(3)) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log("The computers choice: " + getComputerChoice());

userInput();

function userInput() {
    let playerInput = prompt("Please select (R)ock, (P)aper or (S)cissors: ");
    let playerChoice = checkInput(playerInput);   //second variable to keep the original input for the alert
    if (playerChoice != "invalid") {
        console.log("The players choice: " + playerChoice);
    }
    else {
        alert(playerInput + " is not a valid Value, please choose either Rock, Paper or Scissors")
        playerChoice = userInput();
    }
}

function checkInput(originalInput) {
    let validatedInput = "invalid";

    if (typeof originalInput === "string" && originalInput.length === 0) {
        alert("The input is empty");
    } else if (originalInput === null) {
        console.log("The input is null");
    } else {
        let firstChar = originalInput[0].toUpperCase();
        switch(firstChar){
            case "R":
                validatedInput = "Rock";
                break;
            case "P":
                validatedInput = "Paper";
                break;
            case "S":
                validatedInput = "Scissors";
                break;
        }
    }

    return validatedInput;
}