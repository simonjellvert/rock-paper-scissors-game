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
    /**const playerChoiceDiv = document.getElementsByClassName("player");
    const computerChoiceDiv = document.getElementsByClassName("computer");

    playerChoiceDiv.innerHTML = `${playerChoice}`;
    computerChoiceDiv.innerHTML = `${computerChoice}`;
    alert(`You choose ${playerChoice}. Computer chose ${computerChoice}"`);*/

    
    if (playerChoice === computerChoice) {
        /**alert("It's a tie!");*/
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
       /**alert("You win!");*/
        incrementPlayerScore();
        showPlayerWinner();
    } else {
        /**alert("Computer Wins!");*/
        incrementComputerScore();
        showComputerWinner();
    }
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function showPlayerHand(playerChoice) {
    const playerHand = document.querySelector(".player i");
    playerHand.className = `fas fa-hand-${playerChoice}`;

}

function showComputerHand(computerChoice) {
    const computerHand = document.querySelector(".computer i");
    computerHand.className = `fas fa-hand-${computerChoice}`;

}

function showPlayerWinner {
    if (incrementPlayerScore)
}

function showPlayerWinner {

}

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
