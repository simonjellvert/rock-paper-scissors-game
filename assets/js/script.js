document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            runGame(this.getAttribute("data-selection"));
        });
    }
});

function runGame(playerChoice) {
    const computerChoice = computerPlay();
    alert(`You choose ${playerChoice}. Computer chose ${computerChoice}"`);

    if (playerChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win!");
    } else {
        alert("Computer Wins!");
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function compareChoice() {

}

function incrementWin() {

}

function incrementLoss() {

}
