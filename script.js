let score = 0;
function playerMove(move) {
  let opp_move = random_move();
  let result;

  if (move === opp_move) {
    result = "tie";
  } else if (
    (move === "rock" && opp_move === "scissors") ||
    (move === "paper" && opp_move === "rock") ||
    (move === "scissors" && opp_move === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  won_lose(result);
}

function random_move() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

function won_lose(result) {
  let winText = document.getElementById("resultText");
  let scoreText = document.getElementById("score");
  if (result == "tie") {
    winText.innerText = "Ended in a Tie!";
  } else if (result == "win") {
    winText.innerText = "You WON!";
    score += 1;
  } else if (result == "lose") {
    winText.innerText = "you LOST!";
    score -= 1;
  } else {
    winText.innerText = "i might have messed up sum, my bad...";
  }
  scoreText.innerText = "Your Score: " + score;
}
