
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = "";
    switch (getRandomInt(3)) {
        case 0:
            computerChoice = "R";
            break;
        case 1:
            computerChoice = "P";
            break;
        case 2:
            computerChoice = "S";
            break;
    }

    //This way both the player and the computer will always use the same choices
    return validateInput(computerChoice);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    let playerInput = prompt("Please select (R)ock, (P)aper or (S)cissors: ");
    let playerChoice = validateInput(playerInput);   //second variable to keep the original input for the alert
    if (playerChoice != "invalid") {
        //console.log("The players choice: " + playerChoice);
    }
    else {
        alert(playerInput + " is not a valid Value, please choose either Rock, Paper or Scissors")
        playerChoice = getHumanChoice();
    }

    return playerChoice;
}

function validateInput(originalInput) {
    let validatedInput = "invalid";

    if (typeof originalInput === "string" && originalInput.length === 0) {
        alert("The input is empty");
    } else if (originalInput === null) {
        console.log("The input is null");
    } else {
        let firstChar = originalInput[0].toUpperCase();
        switch (firstChar) {
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

function playRound(humanChoice, computerChoice) {
    console.log("Your choice: " + humanChoice + " Computer choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else {
        switch (humanChoice) {
            case "Rock":
                if (computerChoice === "Paper") {
                    roundResult(false);
                }
                else {
                    roundResult(true);
                }
                break;
            case "Paper":
                if (computerChoice === "Scissors") {
                    roundResult(false);
                }
                else {
                    roundResult(true);
                }
                break;
            case "Scissors":
                if (computerChoice === "Rock") {
                    roundResult(false);
                }
                else {
                    roundResult(true);
                }
                break;
        }
    }
}

function roundResult(humanHasWon) {
    if (humanHasWon) {
        console.log("You win!");
        humanScore++;
    }
    else {
        console.log("You lose");
        computerScore++;
    }

    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore == computerScore) {
        console.log("The game ends in a draw");
    } else if (humanScore > computerScore) {
        console.log("You win the game");
    } else {
        console.log("You lose the game");
    }
}

playGame();

