function getComputerChoice(){
    let rps = ["rock","paper", "scissors"];
    let randomChoice = rps[Math.floor(Math.random()*rps.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return ("It is a tie!");
    } else if ((playerSelection === "rock") && (computerSelection == "scissors")) {
        return ("You win! Rock defeats scissors!");
    } else if ((playerSelection === "rock") && (computerSelection == "paper")) {
        return ("You lose! Paper defeats rock!");
    } else if ((playerSelection === "paper") && (computerSelection == "rock")) {
        return ("You win! Paper defeats rock!");
    } else if ((playerSelection === "paper") && (computerSelection == "scissors")) {
        return ("You lose! Scissors defeats paper!");
    } else if ((playerSelection === "scissors") && (computerSelection == "rock")) {
        return ("You lose! Rock defeats scissors!");
    } else if ((playerSelection === "scissors") && (computerSelection == "paper")) {
        return ("You win! Scissors defeats rock!");
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("what is your choice?");
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

