//display modal on first load
// window.addEventListener('load', function () {
// 	document.getElementById('instruction').modal('show');
// });

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
	document.getElementById("instructBtn").disabled = false;
	document.getElementById("rollDice").disabled = false;
	//console.log("just in the compare math ans if else");
	//if answer is correct, add score
	if (chanceAns == mathTotal) {
		alertMsg.innerText = "CONGRATS!! Your answer is correct. $100 is credited to your account." + "\n" + "Click on 'Roll the Dice' to continue.";
		p1Score += 100;
		document.getElementById("p1Score").innerText = p1Score;
	}
	//if answer is wrong, deduct score
	else {
		//console.log("just in the else of compare math ans");
		alertMsg.innerText = "AWWww... You have gotten the answer wrong.... Try harder next time.." + "\n" + "$100 is deducted from your account!" + "\n" + "Click on 'Roll the Dice' to continue.";
		p1Score -= 100;
		//console.log('deducted score');
		document.getElementById("p1Score").innerText = p1Score;
		//console.log('display score on UI');
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
	answer: "A"
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

	//console.log(questionIndex);
	compareGKAns(comChestAns);
}
// gkQuestion();
// console.log(comChestAns);

//compare the input answer and correct answer
function compareGKAns (comChestAns){
	document.getElementById("instructBtn").disabled = false;
	document.getElementById("rollDice").disabled = false;
	var comChestAnsUC = comChestAns.toUpperCase();

	//if answer is correct, add score
	if (comChestAnsUC === comChestQuiz[questionIndex]["answer"]){
		alertMsg.innerText = "CONGRATS!! Your answer is correct. $100 is credited to your account." + "\n" + "Click on 'Roll the Dice' to continue.";
		p1Score += 100;
		document.getElementById("p1Score").innerText = p1Score;
	}
	//if answer is wrong, minus score
	else {
		alertMsg.innerText = "AWWww... You have gotten the answer wrong.... Try harder next time.." + "\n" + "$100 is deducted from your account!" + "\n" + "Click on 'Roll the Dice' to continue.";
		p1Score -= 100;
		document.getElementById("p1Score").innerText = p1Score;
	}
}

// compareGKAns(comChestAns);
// console.log(p1Score);


// ------------------------------------------------------------------------------------------------------------------------------
//Initialising Game

//board sequence
var board = ["go", "comChest1", "tampines-free", "income", "epay-payaLebar", "serangoon-free", "chance1", "littleIndia-free", "pay-roadTax", "justVisitJail-free", "pay-electrical", "comChest2", "orchard-free", "epay-dhobyGhaut", "cityHall-free", "chance2", "pay-petrolStn", "rafflesPlace-free", "freeParking", "marinaBay-free", "chance3", "pay-insurance", "outramPark-free", "epay-harbourFront", "pay-waterWorks", "bounaVista-free", "comChest3", "goToJail", "bishan-free", "pay-creditCard", "comChest4", "woodlands-free", "epay-cck", "chance4", "jurongEast-free", "luxury"];
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

//output alert message
var alertMsg = document.getElementById("message");



//function to hide all player1 token
function hideAllToken(){

	//toggle player1 token appearance:
	var toggleToken = document.querySelectorAll('.player1Token');
	// console.log(toggleToken);


	for (var i=0; i < (toggleToken.length); i++){
		toggleToken[i].style.opacity = 0;
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

	//disable chance and comChest button
	document.getElementById("chanceCard").disabled = true;
	document.getElementById("comChestCard").disabled = true;
	
	//display token
	// var el = document.querySelector('div'),
	onToken.style.opacity = 0;
	requestAnimationFrame(function() {
	    onToken.style.transition = 'opacity 1s';
	    onToken.style.opacity = 1;
	});
}


function rollTheDice () {

	document.getElementById("instructBtn").disabled = false;
	document.getElementById("rollDice").disabled = false;
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
	var rollDiceA = parseInt (document.getElementById("diceA").innerText);
	var rollDiceB = parseInt (document.getElementById("diceB").innerText);

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
		alertMsg.innerText = "CONGRATS!! You are at 'GO'. $200 has been credited to your account.";
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
		alertMsg.innerText = "CONGRATS!! You have pass 'GO'. $200 has been credited to your account."
		document.getElementById("p1Score").innerText = p1Score;
		console.log(`go pass ${count}`);
	}
}



//check if any deduction is required
function deductScore() {
	if (tokenCurrentPos.includes('free')) {
		alertMsg.innerText = "You are currently at " + tokenCurrentPos + ".";
	}
	else if	(tokenCurrentPos.includes('income')) {
		p1Score -= 200;
		alertMsg.innerText = "It's time to pay Income Tax, $200 has been deducted from your account."
		document.getElementById("p1Score").innerText = p1Score;
	}
	else if (tokenCurrentPos.includes('epay')) {
		p1Score -= 50;
		alertMsg.innerText = "You have just pass by an ERP gantry. $50 has been deducted from your account."
		document.getElementById("p1Score").innerText = p1Score;
	}
	else if (tokenCurrentPos.includes('pay')) {
		p1Score -= 150;
		alertMsg.innerText = "The bill is here!! Time to make payment!! $150 has been deducted from your account."
		document.getElementById("p1Score").innerText = p1Score;
	}
	else if (tokenCurrentPos.includes('luxury')) {
		p1Score -= 400;
		alertMsg.innerText = "Hmm.. seems like you have been spluging... Here's your Luxury Tax bill. $400 has been deducted from your account."
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
		displayToken();
		tokenLocation = 9;
		displayToken();
		p1Score -= 500;
		alertMsg.innerText = "What have you done??? $500 has been deducted for you to be bailed out of jail."
		document.getElementById("p1Score").innerText = p1Score;
	}
	else {
		console.log('entering quiz time, else of goJail');
		quizTime();
	}
}

function quizTime () {
	if (tokenCurrentPos.includes('chance')) {
		document.getElementById("chanceCard").disabled = false;
		document.getElementById("instructBtn").disabled = true;
		document.getElementById("rollDice").disabled = true;
		alertMsg.innerText = "Click on the Chance Card box in the middle of the board to proceed with the quiz.";

		//document.getElementById('chanceCard').addEventListener("click", mathQuiz);
	}
	else if (tokenCurrentPos.includes('comChest')) {
		document.getElementById("comChestCard").disabled = false;
		document.getElementById("instructBtn").disabled = true;
		document.getElementById("rollDice").disabled = true;
		alertMsg.innerText="Click on the Community Chest Card box in the middle of the board to proceed with the quiz.";
		//document.getElementById('comChestCard').addEventListener("click", gkQuestion);
	}
	else {
		checkScore();
	}
}

function checkScore() {
	if (p1Score < 0) {
		document.getElementById("rollDice").disabled = true;
		alertMsg.innerText = "Awww... You went BANKRUPT!!! Try Harder Next Time!!" + "\n" + "Refresh page to retry.";
	}
	else if (count === 3) {
		if (p1Score > 0) {
		document.getElementById("rollDice").disabled = true;
			alertMsg.innerText = "CONGRATS!!! You manage to SURVIVE in SINGAPORE with $" + p1Score + "." + "\n" + "Do play again by refershing the page.";
		}
		else {
		document.getElementById("rollDice").disabled = true;
			alertMsg.innerText = "OHHHHHH.... You almost manage to survive..... "+ "\n" + "Do Try Again by refreshing the page!!!";
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


