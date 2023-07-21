document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".controls button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            runGame(this.getAttribute("data-selection"));
        });
    }
});

function runGame(playerChoice) {
    const computerChoice = computerPlay();
    showPlayerHand(playerChoice);
    showComputerHand(computerChoice);
 
    if (playerChoice === computerChoice) {
        document.querySelector(".playerchoice").classList.add("tie");
        document.querySelector(".computerchoice").classList.add("tie");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        incrementPlayerScore();
        document.querySelector(".playerchoice").classList.add("win");
        document.querySelector(".computerchoice").classList.add("lose");
    } else {
        incrementComputerScore();
        document.querySelector(".playerchoice").classList.add("lose");
        document.querySelector(".computerchoice").classList.add("win");
    }

    setTimeout(() => {
        document.querySelector(".playerchoice").className = "playerchoice";
        document.querySelector(".computerchoice").className = "computerchoice";
    }, 1000);

}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function showPlayerHand(playerChoice) {
    const playerHand = document.querySelector(".player-hand i");
    playerHand.className = `fa-regular fa-hand-${playerChoice}`;

}

function showComputerHand(computerChoice) {
    const computerHand = document.querySelector(".computer-hand i");
    computerHand.className = `fa-regular fa-hand-${computerChoice}`;

}

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

}
