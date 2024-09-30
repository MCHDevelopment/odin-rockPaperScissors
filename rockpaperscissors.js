
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

function userInput() {
    let playerChoice = parseInt(prompt("Please select (R)ock, (P)aper or (S)cissors: "));
}

function checkInput(){

}