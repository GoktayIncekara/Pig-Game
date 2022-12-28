let scores, roundScore, activePlayer, finalScore;
init();

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector(".final-score").style.display = "inline";
  document.querySelector(".btn-start").style.display = "inline";
  document.querySelector(".btn-roll").style.display = "none";
  document.querySelector(".btn-hold").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".final-score").value = "";
  document.querySelector(".score").textContent = "...";
}

function start() {
  let input = document.querySelector(".final-score").value;
  // UNDEFINED, 0, NULL, "" ARE COERCED TO FALSE - SO IF THE VALUE IS NOT SET ITS = FALSE
  if (input) {
    finalScore = input;
  } else {
    finalScore = 200;
  }
  document.querySelector(".final-score").style.display = "none";
  document.querySelector(".btn-start").style.display = "none";
  document.querySelector(".btn-roll").style.display = "inline";
  document.querySelector(".btn-hold").style.display = "inline";
  document.querySelector(".score").textContent = finalScore;
}

document.querySelector(".btn-start").addEventListener("click", start);

document.querySelector(".btn-roll").addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6) + 1;

  document.querySelector("#dice-1").style.display = "block";
  document.querySelector("#dice-1").src = "dice-" + dice + ".png";

  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] += roundScore;

  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= finalScore) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector("#dice-1").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
  } else {
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector("#dice-1").style.display = "none";
}
