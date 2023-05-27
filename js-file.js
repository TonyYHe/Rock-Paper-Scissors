function getComputerChoice() {
    const actions = ["Rock", "Paper", "Scissors"];
    return actions[Math.floor(Math.random()*actions.length)];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    let result = "It's a tie, " + playerSelection + " ties with " + computerSelection;

    if (playerSelection == "Rock" && computerSelection == "Paper" || 
        playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock") {
            result = "You Lose!" + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" || 
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
            result = "You Win!" + playerSelection + " beats " + computerSelection;
    }
    return result;
}

function readPlayerSelection() {
    let selection = capitalize(prompt("Enter Rock, Paper or Scissors: "));
    while (selection != "Rock" && selection != "Paper" && selection != "Scissors") {
        selection = capitalize(prompt("Please enter a valid input: "));
    }
    return selection;
}

function game() {
    let playerScore = computerScore = 0;
    let playerSelection, computerSelection;
    let roundResult;

    for (let i = 0; i < 5; i++) {
        playerSelection = readPlayerSelection();
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        playerScore += roundResult.includes("Win");
        computerScore += roundResult.includes("Lose");
    }

    if (playerScore > computerScore) {
        return "Player Wins!";
    } else if (computerScore > playerScore) {
        return "Computer Wins!";
    } 
    return "It's a tie!";
}