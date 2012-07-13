//SDI Project 2
// Author: Jenna Starr

alert ("Week Two of Zombie Fitness Squad!");

var ready = (false, "Are you ready to begin?", "");
if (ready ===true) {
	console.log("Let's kick it!");
}
else {
	console.log("Fine then let the brain eating begin.");
}

//boolean function
var step1= false
if (step1 ===true) {
	console.log("You made it to week two of training!");
} 
else {
	console.log("Watch out those zombies are right on your heels!!!!");
};
	
console.log("You're not the only one who has been working out. The zombies now have levels to better challenge you.")


//array function
var zombies = [
	"Runner",
	"Lifter",
	"Hydrator"
];
console.log (zombies[1] + " is right behind you!");


//number function
var workingWith = function () {
	var quick = 5.342;
	var strength = 4;
		var level = quick * strength 
		return level;
};

var reportLevel = function (name , level, message){
	console.log(name + " is at level " + level + message);
};

var level = workingWith(4)
reportLevel(zombies[2], level, " and is gaining on you!");


for (var reps = 71; reps > 0; reps--){
	console.log(reps + " miles to go.");
};

console.log("You're finished for today.");


