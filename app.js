function getComputerChoice(){
    let rps = ["rock","paper", "scissors"];
    let randomChoice = rps[Math.floor(Math.random()*rps.length)];
    return randomChoice;
}
