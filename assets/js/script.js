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
        incrementPlayerScore();
    } else {
        alert("Computer Wins!");
        incrementComputerScore();
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function compareChoice() {

}

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
