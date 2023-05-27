function getComputerChoice() {
    const actions = ["Rock", "Paper", "Scissors"];
    return actions[Math.floor(Math.random()*actions.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = computerSelection;

    let result = "It's a tie, " + playerSelection + " ties with " + computerSelection;

    if (playerSelection == "Rock" && computerSelection == "Paper" || 
        playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock") {
            result = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" || 
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
            result = "You Win! " + playerSelection + " beats " + computerSelection;
    }
    return result;
}

const buttons = document.querySelectorAll('button');
for (let btn of buttons) {
    btn.addEventListener('click', function() {
        roundResult = playRound(btn.innerHTML, getComputerChoice());
        if (!playAgainShown) {
            updateGame(roundResult);
        }
    })
}

let playerScore = computerScore = 0;
let playAgainShown = false;

const body = document.querySelector('body');

const result = document.createElement('div');
result.textContent = "First to score 5 points wins the game";
body.appendChild(result);

const playerScoreBoard = document.createElement('div');
playerScoreBoard.textContent = "Player: " + playerScore;
body.appendChild(playerScoreBoard);

const computerScoreBoard= document.createElement('div');
computerScoreBoard.textContent = "Computer: " + computerScore;
body.appendChild(computerScoreBoard);

function updateGame(roundResult) {
    result.textContent = roundResult;
    playerScore += roundResult.includes("Win");
    computerScore += roundResult.includes("Lose");
    playerScoreBoard.textContent = "Player: " + playerScore;
    computerScoreBoard.textContent = "Computer: " + computerScore;
    announceWinner();
}

function announceWinner() {
    let foundWinner = false;

    if (playerScore >= 5) {
        result.textContent = "Player Wins!";
        foundWinner = true;
    }

    if (computerScore >= 5) {
        result.textContent = "Computer Wins!";
        foundWinner = true;
    }

    if (foundWinner) {
        playAgain();
    }
}

function playAgain() {
    if (!playAgainShown) {
        const playAgain = document.createElement('button');
        playAgain.setAttribute("id", "Play-Again");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener('click', resetGame);
        body.appendChild(playAgain);
        playAgainShown = true;
    }
}

function resetGame() {
    playerScore = computerScore = 0;
    playerScoreBoard.textContent = "Player: 0";
    computerScoreBoard.textContent = "Computer: 0";
    playAgainShown = false;
    let playAgainButton = document.getElementById('Play-Again');
    playAgainButton.remove();
}