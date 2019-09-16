const ROCK = 0,
	PAPER = 1,
	SCISSORS = 2;
const LOSE = -1,
	DRAW = 0,
	WIN = 1;
let playerChoice, computerChoice;
let playerScore = 0,
	computerScore = 0;
let results = [ [ DRAW, LOSE, WIN ], [ WIN, DRAW, LOSE ], [ LOSE, WIN, DRAW ] ];

$("#reset").on("click", function() {
	reset();
});
$(".card").on("click", function() {
	getPlayerChoice($(this)[0].id);
	play();
});
$(".card").hover(function() {
	$(this).children("i").toggleClass("fas far");
});

function getPlayerChoice(id) {
	switch (id) {
		case "rock":
			playerChoice = ROCK;
			break;
		case "paper":
			playerChoice = PAPER;
			break;
		case "scissors":
			playerChoice = SCISSORS;
			break;
	}
}

function getComputerChoice() {
	computerChoice = Math.floor(Math.random() * 3);
}

function play() {
	getComputerChoice();
	switch (results[playerChoice][computerChoice]) {
		case WIN:
			playerScore++;
			displayStatus("win");
			break;
		case DRAW:
			displayStatus("draw");
			break;
		case LOSE:
			computerScore++;
			displayStatus("lose");
			break;
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
