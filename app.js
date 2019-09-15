const ROCK = 1,
	PAPER = 2,
	SCISSORS = 3;
let playerChoice, computerChoice, status;
let playerScore = 0,
	computerScore = 0;

$("#rock").on("click", function() {
	playerChoice = ROCK;
	play();
});
$("#paper").on("click", function() {
	playerChoice = PAPER;
	play();
});
$("#scissors").on("click", function() {
	playerChoice = SCISSORS;
	play();
});
$("#reset").on("click", function() {
	reset();
});

$(".card").hover(function() {
	$(this).children("i").toggleClass("fas far");
});

function choose() {
	computerChoice = Math.floor(Math.random() * 3) + 1;
}

function play() {
	// 1 3
	// 2 1
	// 3 2
	choose();
	if (playerChoice === ROCK) {
		if (computerChoice === ROCK) {
			displayStatus("draw");
		} else if (computerChoice === PAPER) {
			playerScore++;
			displayStatus("win");
		} else {
			computerScore++;
			displayStatus("lose");
		}
	} else if (playerChoice === PAPER) {
		if (computerChoice === ROCK) {
			computerScore++;
			displayStatus("lose");
		} else if (computerChoice === PAPER) {
			displayStatus("draw");
		} else {
			playerScore++;
			displayStatus("win");
		}
	} else {
		if (computerChoice === ROCK) {
			computerScore++;
			displayStatus("lose");
		} else if (computerChoice === PAPER) {
			playerScore++;
			displayStatus("win");
		} else displayStatus("draw");
	}
	adjustScore();
}

function displayStatus(status) {
	console.log("you " + status);
	console.log("player " + playerChoice);
	console.log("computer " + computerChoice);
}

function adjustScore() {
	$("#playerScore").text(playerScore);
	$("#computerScore").text(computerScore);
}
function reset() {
	playerScore = 0;
	computerScore = 0;
	adjustScore();
}
