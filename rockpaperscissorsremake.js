const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(validateInput(button.id), getComputerChoice());
    });
});

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

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
    let infoString = "Your choice: " + humanChoice + " Computer choice: " + computerChoice;

    if (humanChoice === computerChoice) {
        infoString += "<br>Draw";
    } else {
        switch (humanChoice) {
            case "Rock":
                if (computerChoice === "Paper") {
                    infoString += roundResult(false);
                }
                else {
                    infoString += roundResult(true);
                }
                break;
            case "Paper":
                if (computerChoice === "Scissors") {
                    infoString += roundResult(false);
                }
                else {
                    infoString += roundResult(true);
                }
                break;
            case "Scissors":
                if (computerChoice === "Rock") {
                    infoString += roundResult(false);
                }
                else {
                    infoString += roundResult(true);
                }
                break;
        }
    }

    infoString += "<br>Round " + (currentRound + 1);
    currentRound++;

    if ((humanScore == 5) || (computerScore == 5)){

        if (humanScore == computerScore) {
            infoString += "<br>The game ends in a draw";
        } else if (humanScore > computerScore) {
            infoString += "<br>You win the game";
        } else {
            infoString += "<br>You lose the game";
        }

        //remove the buttons once the game is finished
        const playButtons = document.querySelector("#playButtons");
        playButtons.innerHTML = "";
    }

    const messageDiv = document.querySelector("#messageDiv");
    messageDiv.innerHTML = infoString;
}

function roundResult(humanHasWon) {
    let resultString = "";
    if (humanHasWon) {
        resultString += "<br>You win!";
        humanScore++;
    }
    else {
        resultString += "<br>You lose";
        computerScore++;
    }

    resultString += "<br>Your Score: " + humanScore + " Computer Score: " + computerScore;
    return resultString;
}