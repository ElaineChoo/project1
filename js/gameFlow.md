Start of Game
--------------
1. Player has $1500 as score //shown to player //ok

2. Timer hidden from browser //hidden from player //ok

3. Player token at position '0' //shown to player

4. Player click on button "Roll the dice" //Player's action

5. Dice number display on screen //shown to player

6. Backend: the total number of the dice will input into the board array as index and search for location
	//var location =  board[tokenLocation];

7. Backend: if location = board.includes(chance), move token to position and alert player to click on chance
	a. prompt window with Math Quiz and 30 sec timer start
		i. check if timer end first or ans input first
			- if input ans, check if ans correct then add or minus score
			- if timer end first, minus score

8. Backend: if location = board.includes(comChest), move token to position and alert player to click on Community Chest
	a. prompt window with Math Quiz and 30 sec timer start
		i. check if timer end first or ans input first
			- if input ans, check if ans correct then add or minus score
			- if timer end first, minus score

9. Backend: if location = board.includes(income), move token to position and player score -$200

10. Backend: if location = board.includes(erp), move token to position and player score -$50

11. Backend: if location = board.includes(pay), move token to position and player score -$100

12. Backend: if location = board.includes(luxury), move token to position and player score -$350

13. Backend: if location = board.includes(goToJail), move token to goToJail, wait for 2sec then move to justVisitJail and deduct score -$50

14. Backend: else, move token to location and alert user to roll the dice again

15. Frontend: move token to position: (?????)
	token to appear at = document.getElementById("location");

16. Count token passby "go" = 3 = end game (???????????????)