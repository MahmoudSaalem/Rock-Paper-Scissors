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
	let id = $(this)[0].id;
	getPlayerChoice(id);
	play();
});
$(".card").hover(function() {
	let id = $(this)[0].id;
	// $(this).children("i").toggleClass("fas far");
	setPlayerDisplay(id);
});
$(".card").mouseenter(function() {
	$("#computerDisplay").removeClass();
	$("#computerDisplay").addClass("fas fa-question");
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
	setComputerDisplay(computerChoice);
}

function play() {
	getComputerChoice();
	switch (results[playerChoice][computerChoice]) {
		case WIN:
			playerScore++;
			displayStatus("Win");
			break;
		case DRAW:
			displayStatus("Draw");
			break;
		case LOSE:
			computerScore++;
			displayStatus("Lose");
			break;
	}
	adjustScore();
}

function displayStatus(status) {
	let h1 = $("#status");
	h1.text("You " + status);
	switch (status) {
		case "Win":
			h1.css("color", "green");
			break;
		case "Draw":
			h1.css("color", "gray");
			break;
		case "Lose":
			h1.css("color", "red");
			break;
	}
}

function adjustScore() {
	$("#playerScore").text(playerScore);
	$("#computerScore").text(computerScore);
	$(".symbol").removeClass("fas fa-crown");
	if (playerScore > computerScore) {
		$("#playerSymbol").addClass("fas fa-crown");
	} else if (computerScore > playerScore) {
		$("#computerSymbol").addClass("fas fa-crown");
	}
}
function reset() {
	playerScore = 0;
	computerScore = 0;
	$("#status").text("Game On");
	$("#status").css("color", "white");
	adjustScore();
}

function setPlayerDisplay(id) {
	let icon = `fas fa-hand-${id}`;
	$("#playerDisplay").removeClass();
	$("#playerDisplay").addClass(icon);
}

function setComputerDisplay(choice) {
	let icon = "fas fa-hand-" + getId(choice);
	$("#computerDisplay").removeClass();
	$("#computerDisplay").addClass(icon);
}

function getId(choice) {
	switch (choice) {
		case ROCK:
			return "rock";
		case PAPER:
			return "paper";
		case SCISSORS:
			return "scissors";
	}
}
