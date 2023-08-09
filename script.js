const weapons = ["rock", "paper", "scissors"];
const getComputerChoice = () => weapons[Math.floor(Math.random() * weapons.length)];

let playerScore = 0;
let cpuScore = 0;

document.getElementById("rock").addEventListener("click", () => playRPS("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRPS("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRPS("scissors", getComputerChoice()));

function playRPS(playerSelection, computerSelection) {
    let resultMessage;

    if (playerSelection === computerSelection) {
        resultMessage = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultMessage = "You win!";
        playerScore++;
    } else {
        resultMessage = "Computer wins!";
        cpuScore++;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}. ${resultMessage}`;

    const scoresElement = document.getElementById("scores");
    scoresElement.textContent = `Player Score: ${playerScore} - CPU Score: ${cpuScore}`;
    if (playerScore === 5) {
        scoresElement.textContent = `Player wins! Game Over`;
        playerScore = 0;
        cpuScore = 0;
    }
    if (cpuScore === 5) {
        scoresElement.textContent = `CPU wins! Game Over`;
        playerScore = 0;
        cpuScore = 0;
    }

    console.log(resultMessage);
}
