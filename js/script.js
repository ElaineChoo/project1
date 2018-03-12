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

var number = 0;

//function for the token to be on the board (index for board array)
function tokenPosition () {
	//function to generate random number
	function getRandomNumber() {
		number = (Math.floor(Math.random()*6)+1);
	}

	//generate random number
	getRandomNumber();
	diceA = number;
	//input number into dice A
	document.getElementById("diceA").innerText = number;
	//console.log(`dice A: ${diceA}`);
	
	//generate random number
	getRandomNumber();
	diceB = number;
	//input number into diceB
	document.getElementById("diceB").innerText = number;
	//console.log(`dice B: ${diceB}`);

	// total number of move
	totalMove = diceA + diceB;
	//console.log(`totalMove: ${totalMove}`);

	//position of token
	token += totalMove;
}

// tokenPosition();
// console.log(token);

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
}

// mathQuiz();
// console.log(`num1: ${num1} ops:${operator} num2: ${num2} = mathTotal: ${mathTotal}`);
// console.log(chanceAns);

//comparing the input answer and the correct answer
function compareMathAns (chanceAns) {
	//if answer is correct, add score
	if (chanceAns == mathTotal) {
		p1Score += 150;
		document.getElementById("p1Score").innerText = p1Score;
	}
	//if answer is wrong, deduct score
	else {
		p1Score -= 50;
		document.getElementById("p1Score").innerText = p1Score;
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
}
// gkQuestion();
// console.log(comChestAns);

//compare the input answer and correct answer
function compareGKAns (comChestAns){

	var comChestAnsUC = comChestAns.toUpperCase();
	console.log(comChestAnsUC);
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
var board = ["go", "comChest1", "tampines", "income", "erp-payaLebar", "serangoon", "chance1", "littleIndia", "pay-roadTax", "justVisitJail", "pay-electrical", "comChest2", "orchard", "erp-dhobyGhaut", "cityHall", "chance2", "pay-petrolStn", "rafflesPlace", "freeParking", "marinaBay", "chance3", "pay-insurance", "outramPark", "erp-harbourFront", "pay-waterWorks", "bounaVista", "comChest3", "goToJail", "bishan", "pay-creditCard", "comChest4", "woodlands", "erp-cck", "chance4", "jurongEast", "luxury"];
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

//default amount of time given
var timer = 30;
document.getElementById("timer").innerText = timer;

//toggle timer appearance:
var toggleTimer = document.getElementById('timerClock');

//default token location (aka start point)
// var tokenLocation = 0;

// var location = board[tokenLocation];

// console.log(location);

document.addEventListener('DOMContentLoaded', function() {
    
    //hide timer
    toggleTimer.style.visibility = 'hidden';

    //display player token at default location
    // tokenAtDefault();

    //add event listener for submit button
    // var submitButton = document.querySelector("#submitButton");
    // submitButton.addEventListener("click", onSubmit);
});

// function tokenAtDefault () {
// 	//display player token at default location
//     var showToken = document.getElementById("location");
//     var layer = document.createElement('div');
//     showToken.appendChild('div');
//     var img = document.createElement('img');
//     img.src = img/token.png;
//     layer.appendChild(img);
// }

