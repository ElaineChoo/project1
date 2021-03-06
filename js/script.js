//display modal on first load
$('#instruction').modal('show');

// ------------------------------------------------------------------------------------------------------------------------------
//Initialising Game

//board sequence
var board = ["go", "comChest1", "Tampines-free", "income", "epay-payaLebar", "Serangoon-free", "chance1", "Little_India-free", "pay-roadTax", "Just_Visiting_Jail-free", "pay-electrical", "comChest2", "Orchard-free", "epay-dhobyGhaut", "City_Hall-free", "chance2", "pay-petrolStn", "Raffles_Place-free", "Free_Parking-free", "Marina_Bay-free", "chance3", "pay-insurance", "Outram_Park-free", "epay-harbourFront", "pay-waterWorks", "Bouna_Vista-free", "comChest3", "goToJail", "Bishan-free", "pay-creditCard", "comChest4", "Woodlands-free", "epay-cck", "chance4", "Jurong_East-free", "luxury"];
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
var tokenCurrentPos;
var onToken = document.getElementById(tokenCurrentPos);

//counter for number of rounds that player made
var count = 0;

//default amount of time given
var timer = 15;
//document.getElementById("cdTimer").innerText = timer;

//toggle timer appearance:
var toggleTimer = document.getElementById('timerClock');

//output alert message
var alertMsg = document.getElementById("message");

//var for math quiz
var num1 = 0;
var num2 = 0;
var ops = [];
var mathTotal = 0;
var operator="";
var chanceAns=0;

//var for general knowledge quiz
var comChestAns ="";
var questionIndex = 0;

//empty str
var emptyStr = "";

//edited string
var displayStr = "";

function editString() {
	var splitStr = tokenCurrentPos.split("-");
	if (splitStr[0].includes("_")){
		var dblSplitStr = splitStr[0].split("_");
		displayStr = dblSplitStr.join(" ");
		console.log("with '_' : " + displayStr);
	}
	else {
		displayStr = splitStr[0];
		console.log("w/o '_' : " + displayStr);
	}
}

//function to hide all player1 token
function hideAllToken(){

	//toggle player1 token appearance:
	var toggleToken = document.querySelectorAll('.player1Token');
	// console.log(toggleToken);


	for (var i=0; i < (toggleToken.length); i++){
		toggleToken[i].style.opacity = 0;
	}
}

//display token at position it is supposed to be at
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

function tokenPosition() {
	var rollDiceA = parseInt (document.getElementById("diceA").innerText);
	var rollDiceB = parseInt (document.getElementById("diceB").innerText);

	// total number of move
	totalMove = rollDiceA + rollDiceB
	//console.log(`totalMove: ${totalMove}`);

	tokenLocation += totalMove;

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
		document.getElementById("p1Score").innerText = p1Score;
		console.log(`go pass ${count}`);
	}
}

//check if any deduction is required
function deductScore() {
	if (tokenCurrentPos.includes('free')) {
		editString();
		alertMsg.innerText = "You are currently at " + displayStr + ".";
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

		document.getElementById('chanceCard').addEventListener("click", mathQuiz);
	}
	else if (tokenCurrentPos.includes('comChest')) {
		document.getElementById("comChestCard").disabled = false;
		document.getElementById("instructBtn").disabled = true;
		document.getElementById("rollDice").disabled = true;

		alertMsg.innerText="Click on the Community Chest Card box in the middle of the board to proceed with the quiz.";
		
		document.getElementById('comChestCard').addEventListener("click", gkQuestion);
	}
	else {
		checkScore();
	}
}


//countdown timer
function countDownTimer(){
	timer = 15;
	var downloadTimer = setInterval(function(){
    	//timer will deduct every sec
    	timer--;
    	//display on browser
    	document.getElementById("cdTimer").textContent = timer + "sec ";

  //   	document.getElementById("submitBtn").addEventListener("click", function(){
  //   		console.log("in submitBtn addEventListener be4 clearInterval");
  //   		clearInterval(downloadTimer);
  //   		console.log("just after clearInterval(downloadTimer) b4 compareAns in submitBtn");
  //   		compareAns();
  //   		console.log("just in after compareAns in submitBtn");
  //   	});

  //   	$('#quizAns').keydown(function(e){
  //   		console.log("in enter key be4 if");
		//     if(e.keyCode === 13){
		//     	console.log("in enter key be4 clearInterval in if");
		//         clearInterval(downloadTimer);
		//         console.log("just after clearInterval(downloadTimer) b4 compareAns in enter key if");
  //   			compareAns();
  //   			console.log("just in after compareAns in enter key if");
		//     }
		//     console.log("just in after compareAns outside if");  
		// });

    	//when timer reaches 0sec, stop timer
    	console.log("b4 timer < 0 be4 if");
    	if(timer < 0) {
    		console.log("in timer < 0 be4 in if");
    		clearInterval(downloadTimer);
    		console.log("just after clearInterval(downloadTimer) b4 compareAns in timer < 0 if");
    		compareAns();
    		console.log("just in after compareAns in timer < 0 if");

    	}
    //update timer every second
    console.log("Just out of downloadTimer function");
	},1000);
	console.log("Just out of 1000");
}

//quiz for Chance Card
function mathQuiz() {
	num1 = Math.floor((Math.random()*11)+1);
	num2 = Math.floor((Math.random()*11)+1);


	ops=['+','-','*'];

	//randomise operation
	var opindex = Math.floor(Math.random()*3);
	console.log(opindex);
	operator = ops[opindex];

	//insert title into Modal
	var title = "Mathematics Quiz";
	document.getElementById("quizModalTitle").innerText = title;

	//calculate the expected result:
	switch (opindex){

		case 0: 
		mathTotal=num1+num2;
		document.getElementById("quizQuestion").innerText = num1 + " + " + num2 + " = ?"
		break;

		case 1:
		mathTotal=num1-num2;
		document.getElementById("quizQuestion").innerText = num1 + " - " + num2 + " = ?"
		break;

		case 2:
		mathTotal=num1*num2;
		document.getElementById("quizQuestion").innerText = num1 + " + " + num2 + " = ?"
		break;
	}
	// $("#quizAns").val() = emptyStr;
		//pop up modal
	$('#quizModal').modal('show');

	countDownTimer();
}

//comparing the input answer and the correct answer
function compareMathAns (chanceAns) {
	chanceAns = $("#quizAns").val();
	document.getElementById("instructBtn").disabled = false;
	document.getElementById("rollDice").disabled = false;
	//if answer is correct, add score
	if (chanceAns == mathTotal) {
		alertMsg.innerText = "CONGRATS!! Your answer is correct. $100 is credited to your account." + "\n" + "Click on 'Roll the Dice' to continue.";
		p1Score += 100;
		document.getElementById("p1Score").innerText = p1Score;
	}
	//if answer is wrong, deduct score
	else {
		alertMsg.innerText = "AWWww... You have gotten the answer wrong.... Try harder next time.." + "\n" + "$100 is deducted from your account!" + "\n" + "Click on 'Roll the Dice' to continue.";
		p1Score -= 100;
		document.getElementById("p1Score").innerText = p1Score;
	}
}

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
function gkQuestion () {
	questionIndex = Math.floor(Math.random()*comChestQuiz.length);

	//insert title into Modal
	var title = "General Knowledge Quiz";
	document.getElementById("quizModalTitle").innerText = title;

	//randomise question
	var randomGKQues = comChestQuiz[questionIndex]["question"] + "\n" + comChestQuiz[questionIndex]["option"].join("\n") + "\n" + "Enter A, B, C or D";
	
	//insert randomise question into modal
	document.getElementById("quizQuestion").innerText = randomGKQues;

	//$("#quizAns").val() = emptyStr;

	//pop up modal
	$('#quizModal').modal('show');

	countDownTimer();
}

//compare the input answer and correct answer
function compareGKAns (){
	comChestAns = $("#quizAns").val();
	console.log(comChestAns);
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

function compareAns() {
	if (tokenCurrentPos.includes('comChest')) {
		compareGKAns();	
	}
	else if (tokenCurrentPos.includes('chance')){
		compareMathAns();
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
			alertMsg.innerText = "CONGRATS!!! You manage to SURVIVE in SINGAPORE with $" + p1Score + "left." + "\n" + "Do play again by refershing the page.";
		}
		else {
			document.getElementById("rollDice").disabled = true;
			alertMsg.innerText = "OHHHHHH.... You almost manage to survive..... "+ "\n" + "Do Try Again by refreshing the page!!!";
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	$("body").keydown((e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			if (($("#quizModal").data('bs.modal') || {})._isShown) {
				$("#quizModal").modal("hide");
				console.log("b4 going to compare ans")
				compareAns();
			}
		}
	});

    //display token at start point
    displayToken();

    //player click on roll dice to start game
    rollTheDice();
});


