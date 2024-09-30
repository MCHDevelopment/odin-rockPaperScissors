
//checkInput(userInput());

function getComputerChoice(){
    let computerChoice = "";
    switch(getRandomInt(3)){
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
    if(playerChoice != "invalid")
    {
        console.log("The players choice: " + playerChoice);
    }
    else
    {
        alert(playerInput + " is not a valid Value, please choose either Rock, Paper or Scissors")
        playerChoice = userInput();
    }
}

function checkInput(playerInput){
    return playerInput;
}