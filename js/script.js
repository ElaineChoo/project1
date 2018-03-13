//countdown timer
function countDownTimer(){
	var downloadTimer = setInterval(function(){
    	//timer will deduct every sec
    	timer--;
    	//display on browser
    	document.getElementById("timer").textContent = timer;
    	//when timer reaches 0sec, stop timer
    	if(timer <= 0) {
    		clearInterval(downloadTimer);
    	}
    //update timer every second
},1000);
}
// countDownTimer();



//quiz for Chance Card
var num1 = 0;
var num2 = 0;
var ops = [];
var mathTotal = 0;
var operator="";
var chanceAns="";

function mathQuiz() {
	num1 = Math.floor((Math.random()*11)+1);
	num2 = Math.floor((Math.random()*11)+1);


	ops=['+','-','*'];

	//random operator
	var opindex = Math.floor(Math.random()*3);
	console.log(opindex);
	operator = ops[opindex];

	//calculate the expected result:

	switch (opindex){

		case 0: 
		mathTotal=num1+num2;
		chanceAns = prompt(num1 + " + " + num2 + " = ?" + "\n" + "\n" + "Input your answer below: ");
		break;

		case 1:
		mathTotal=num1-num2;
		chanceAns = prompt(num1 + " - " + num2 + " = ?" + "\n" + "\n" + "Input your answer below: ");
		break;

		case 2:
		mathTotal=num1*num2;
		chanceAns = prompt(num1 + " * " + num2 + " = ?" + "\n" + "\n" + "Input your answer below: ");
		break;
	}
	console.log("going to compare math answer");
	compareMathAns (chanceAns);
}

// mathQuiz();
// console.log(`num1: ${num1} ops:${operator} num2: ${num2} = mathTotal: ${mathTotal}`);
// console.log(chanceAns);

//comparing the input answer and the correct answer
function compareMathAns (chanceAns) {
	console.log("just in the compare math ans if else");
	//if answer is correct, add score
	if (chanceAns == mathTotal) {
		p1Score += 150;
		document.getElementById("p1Score").innerText = p1Score;
	}
	//if answer is wrong, deduct score
	else {
		console.log("just in the else of compare math ans");
		p1Score -= 50;
		console.log('deducted score');
		document.getElementById("p1Score").innerText = p1Score;
		console.log('display score on UI');
	}
}

// compareMathAns(chanceAns);
// console.log(p1Score);



//object for Community Chest quiz
var comChestQuiz = [
{
	question:"Which is the animal referred as the ship of the desert?",
	option: ["A: Horse", "B: Reindeer", "C: Camel", "D: Elephant"],
	answer: "C"
},
{
	question:"Which is the fastest animal on land?",
	option: ["A: Cheetah", "B: Jaguar", "C: Panther", "D: Leopard"],
	answer: "C"
},
{
	question:"Objects at the surface of water can be viewed from a submarine under water by using...",
	option: ["A: Stethescope", "B: Periscope", "C: Kaleidoscope", "D: Telescope"],
	answer: "B"
},
{
	question:"At room temperature, which is the only metal that is in liquid form?",
	option:["A: Iron", "B: Aluminum", "C: Mecury", "D: Silver"],
	answer: "C"
},
{
	question:"Which id the country which has Great Barrier Reef?",
	option:["A: London", "B: Australia", "C: Ireland", "D: New Zealand"],
	answer: "B"
},
{
	question:"Which country has a maple leaf on their national flag?",
	option:["A: Canada", "B: Japan", "C: Switzerland", "D: Brazil"],
	answer:"A"
},
{
	question:"How many continents are there on Earth?",
	option:["A: 5", "B: 6", "C: 7", "D: 8"],
	answer:"C"
},
{
	question:"Which is the world's longest river?",
	option:["A: The Amazon River", "B: The Yangtze River", "C: The Mississippi", "D: The Yellow River"],
	answer:"A"
},
{
	question:"Who invented Electric Bulb?",
	option:["A: Albert Einstein", "B: Thomas Edison", "C: Leonardo da Vinci", "D: Isaac Newton"],
	answer:"B"
},
{
	question:"Who made the first successful aeroplane?",
	option:["A: Charles Babbage", "B: Alexandra Graham Bell", "C: Wright Brothers", "D: Guglielmo Marconi"],
	answer:"C"
}
];

//randomise Community Chest Quiz
var comChestAns ="";
var questionIndex = 0;
function gkQuestion () {
	questionIndex = Math.floor(Math.random()*comChestQuiz.length);

	//pop up the randomised question & selection in prompt for player to answer
	comChestAns = prompt(comChestQuiz[questionIndex]["question"] + "\n" + comChestQuiz[questionIndex]["option"].join("\n") + "\n" + "\n"+ "Input anwer 'A', 'B', 'C' or 'D'.");

	console.log(questionIndex);
	compareGKAns(comChestAns);
}
// gkQuestion();
// console.log(comChestAns);

//compare the input answer and correct answer
function compareGKAns (comChestAns){

	var comChestAnsUC = comChestAns.toUpperCase();

	//if answer is correct, add score
	if (comChestAnsUC === comChestQuiz[questionIndex]["answer"]){
		p1Score += 150;
		document.getElementById("p1Score").innerText = p1Score;
	}
	//if answer is wrong, minus score
	else {
		p1Score -= 50;
		document.getElementById("p1Score").innerText = p1Score;
	}
}

// compareGKAns(comChestAns);
// console.log(p1Score);


// ------------------------------------------------------------------------------------------------------------------------------
//Initialising Game

//board sequence
var board = ["go", "comChest1", "tampines", "income", "epay-payaLebar", "serangoon", "chance1", "littleIndia", "pay-roadTax", "justVisitJail", "pay-electrical", "comChest2", "orchard", "epay-dhobyGhaut", "cityHall", "chance2", "pay-petrolStn", "rafflesPlace", "freeParking", "marinaBay", "chance3", "pay-insurance", "outramPark", "epay-harbourFront", "pay-waterWorks", "bounaVista", "comChest3", "goToJail", "bishan", "pay-creditCard", "comChest4", "woodlands", "epay-cck", "chance4", "jurongEast", "luxury"];
// console.log(`board: ${board}`);

//var for dice A, dice B and total move
var diceA = 0;
//display default dice A number on console
document.getElementById("diceA").innerText = diceA;
var diceB = 0;
document.getElementById("diceB").innerText = diceB;
var totalMove = 0;

//default player1 score
var p1Score = 1500;
document.getElementById("p1Score").innerText = p1Score;

//default token location (aka start point)
var tokenLocation = 0;

//default amount of time given
var timer = 30;
document.getElementById("timer").innerText = timer;

//toggle timer appearance:
var toggleTimer = document.getElementById('timerClock');

//function to hide all player1 token
function hideAllToken(){

	//toggle player1 token appearance:
	var toggleToken = document.querySelectorAll('.player1Token');
	// console.log(toggleToken);

	for (var i=0; i < (toggleToken.length); i++){
		toggleToken[i].style.visibility = 'hidden';
	}
}

var tokenCurrentPos;
var onToken = document.getElementById(tokenCurrentPos);

function displayToken(){

	tokenCurrentPos = board[tokenLocation];
	console.log(tokenCurrentPos);
	//get token location
	onToken = document.getElementById(tokenCurrentPos);
	// console.log(onToken);

	hideAllToken();

	//display token
	onToken.style.visibility = "visible";
}


function rollTheDice () {

	var rollBtn = document.getElementById('rollDice');
	rollBtn.addEventListener("click", diceNumber);
}

//function for the token to be on the board (index for board array)
function diceNumber () {
	
	var number = 0;
	//function to generate random number
	function randomDiceNo() {
		number = (Math.floor(Math.random()*6)+1);
	}

	randomDiceNo ();
	diceA = number;
	//input number into dice A
	document.getElementById("diceA").innerText = number;
	//console.log(`dice A: ${diceA}`);
	
	//generate random number
	randomDiceNo();
	diceB = number;
	//input number into diceB
	document.getElementById("diceB").innerText = number;
	//console.log(`dice B: ${diceB}`);

	tokenPosition();
}

var count = 0;

function tokenPosition() {
	var rollDiceA = 13;//parseInt (document.getElementById("diceA").innerText);
	var rollDiceB = 14;//parseInt (document.getElementById("diceB").innerText);

	// total number of move
	totalMove = rollDiceA + rollDiceB
	//console.log(`totalMove: ${totalMove}`);

	tokenLocation += totalMove;

	// console.log(rollDiceA);
	// console.log(rollDiceB);
	// console.log(totalMove);
	console.log(tokenLocation);

	var testNumber = tokenLocation - 35;
	console.log(testNumber);


	if (testNumber < 0) {
		displayToken();
		deductScore();
		console.log(`nv pass go ${count}`);
	}
	else if (testNumber === 0){
		tokenLocation = 0;
		displayToken();
		deductScore();
		count++;
		checkScore();
		p1Score += 200;
		document.getElementById("p1Score").innerText = p1Score;
		console.log(`@ go ${count}`);
	}
	else{
		tokenLocation = testNumber-1;
		console.log(tokenLocation);
		displayToken();
		deductScore();
		count++;
		checkScore();
		p1Score += 200;
		document.getElementById("p1Score").innerText = p1Score;
		console.log(`go pass ${count}`);
	}
}


//check if any deduction is required
function deductScore() {
	if (tokenCurrentPos.includes('income')) {
		p1Score -= 200;
		document.getElementById("p1Score").innerText = p1Score;
	}
	else if (tokenCurrentPos.includes('epay')) {
		p1Score -= 50;
		document.getElementById("p1Score").innerText = p1Score;
	}
	else if (tokenCurrentPos.includes('pay')) {
		p1Score -= 100;
		document.getElementById("p1Score").innerText = p1Score;
	}
	else if (tokenCurrentPos.includes('luxury')) {
		p1Score -= 350;
		document.getElementById("p1Score").innerText = p1Score;
	}
	else {
		console.log('going to jail');
		goJail();
	}
}

function goJail () {
	console.log('just going to jail');
	if (tokenCurrentPos === "goToJail"){
		console.log('enter if statement of jail, going to backspace');

		//fade out from Go to Jail in about3 sec


		tokenLocation = 9;
		console.log(`deducted space ${tokenLocation} & ${tokenCurrentPos}`);
		displayToken();
		console.log(`after tokenCurrentPos = justVisitJail, displayToken = ${tokenCurrentPos}`);
		p1Score -= 50;
		console.log(`p1Score after deducted 50 from going into jail: ${p1Score}`);
		document.getElementById("p1Score").innerText = p1Score;
	}
	else {
		console.log('entering quiz time, else of goJail');
		quizTime();
	}
}

function quizTime () {
	if (tokenCurrentPos.includes('chance')) {
		alert(`Click on the Chance Card box in the middle of the board to proceed with the quiz. You have 30 sec to answer.`)
		document.getElementById('chanceCard').addEventListener("click", function(){
			//countDownTimer();
			mathQuiz();
		});
	}
	else if (tokenCurrentPos.includes('comChest')) {
		alert(`Click on the Community Chest Card box in the middle of the board to proceed with the quiz. You have 30 sec to answer.`)
		document.getElementById('comChestCard').addEventListener("click", function(){
			//countDownTimer();
			gkQuestion();
		});
	}
	else {
		checkScore();
	}
}

function checkScore() {
	if (p1Score < 0) {
		alert(`Awww... You went BANKRUPT!!! Try Harder Next Time!!`);
	}
	else if (count === 3) {
		if (p1Score > 0) {
			alert(`CONGRATS!!! You manage to SURVIVE in SINGAPORE with $${p1Score}`);
		}
		else {
			alert(`OHHHHHH.... You almost manage to survive..... Do Try Again!!!`);
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {

    //hide timer
    toggleTimer.style.visibility = 'hidden';
    
    //display token at start point
    displayToken();

    //player click on roll dice to start game
    rollTheDice();
});


