
var rand_number;
var guess;
var finished = false;
var guesses = 0;

function do_game(){
	rand_number = Math.floor(Math.random()*100)+1;
	
	while(!finished){
		guess = parseInt(prompt("Number between 1 and 100?"));
		guesses++;
		finished = check_guess();
	}
}
function check_guess(){
	if(isNaN(guess)){
		alert("Not a number. \n\n");
		return false;
	}
	if((guess < 1) || (guess>100)){
		alert("Outside the range. ");
		return false;
	}
	if(guess > rand_number){
		alert("Too large. ");
		return false;
	}
	if(guess < rand_number){
		alert("Too small. ");
		return false;
	}
	alert("You got it. The number was " + rand_number 
		+ ".\n\n" + guesses + " guesses.");
	return true;
}