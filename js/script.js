//board sequence
var board = ["go", "comChest1", "tampines", "income", "payaLebar", "serangoon", "chance1", "littleIndia", "roadTax", "justVisitJail", "electrical", "comChest2", "orchard", "dhobyGhaut", "cityHall", "chance2", "petrolStn", "rafflesPlace", "freeParking", "marinaBay", "chance3", "insurance", "outramPark", "harbourFront", "waterWorks", "bounaVista", "comChest3", "goToJail", "bishan", "creditCard", "comChest4", "woodlands", "cck", "chance4", "jurongEast", "luxury"];
console.log(`board: ${board}`);

//var for dice A, dice B and total move
var diceA = 0;
var diceB = 0;
var totalMove = 0;

//default player1 score
var p1Score = "Score: $" + 1500;
console.log(p1Score);

//default amount of time given
var timer = 30 + " sec";
console.log(`timer: ${timer}`);

//randomise number for dice
var number = 0;
function getRandomNumber() {
	number = (Math.floor(Math.random()*6)+1);
}

getRandomNumber();
diceA = number;
console.log(`diceA: ${diceA}`);
getRandomNumber();
diceB = number;
console.log(`diceB: ${diceB}`);

// total number of move
totalMove = diceA + diceB
console.log(`totalMove: ${totalMove}`);

//quiz for Chance Card
var num1 = 0;
var num2 = 0;
var ops = [];
var mathTotal = 0;
var operator;
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
	  	break;
	  
	  case 1:
	  	mathTotal=num1-num2;
	  	break;
	  
	  case 2:
	  	mathTotal=num1*num2;
	  	break;
	}
}

mathQuiz();
console.log(`num1: ${num1} ops:${operator} num2: ${num2} = mathTotal: ${mathTotal}`);

//object for Community Chest quiz
var comChestQuiz = {
	{
		"q1":"Which is the animal referred as the ship of the desert?",
		option: {A:"Horse", B:"Reindeer", C:"Camel", D:"Elephant"},
		answer: "C"
	},
	{
		"q2":"Which is the fastest animal on land?",
		option: {A:"Cheetah", B:"Jaguar", C:"Panther", D:"Leopard"},
		answer: "C"
	},
	{
		"q3":"Objects at the surface of water can be viewed from a submarine under water by using...",
		option: {A:"Stethescope", B:"Periscope", C:"Kaleidoscope", D:"Telescope"},
		answer: "B"
	},
	{
		"q4":"At room temperature, which is the only metal that is in liquid form?",
		option:{A:"Iron", B:"Aluminum", C:"Mecury", D:"Silver"},
		answer: "C"
	},
	{
		"q5":"Which id the country which has Great Barrier Reef?",
		option:{A:"London", B:"Australia", C:"Ireland", D:"New Zealand"},
		answer: "B"
	},
	{
		"q6":"Which country has a maple leaf on their national flag?",
		option:{A:"Canada", B:"Japan", C:"Switzerland", D:"Brazil"},
		answer:"A"
	},
	{
		"q7":"How many continents are there on Earth?",
		option:{A:"5", B:"6", C:"7", D:"8"},
		answer:"C"
	},
	{
		"q8":"Which is the world's longest river?",
		option:{A:"The Amazon River", B:"The Yangtze River", C:"The Mississippi", D:"The Yellow River"},
		answer:"A"
	},
	{
		"q9":"Who invented Electric Bulb?"
		option:{A:"Albert Einstein", B:"Thomas Edison", C:"Leonardo da Vinci", D:"Isaac Newton"},
		answer:"B"
	},
	{
		"q10":"Who made the first successful aeroplane?",
		option:{A:"Charles Babbage", B:"Alexandra Graham Bell", C:"Wright Brothers", D:"Guglielmo Marconi"},
		answer:"C"
	}
}

//randomise Community Chest Quiz