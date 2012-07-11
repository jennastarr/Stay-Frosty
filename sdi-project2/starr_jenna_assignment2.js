//SDI Project 2
// Author: Jenna Starr

alert ("Week Two of Zombie Fitness Squad!");

var ready = prompt("Are you ready to begin?", "");
if (ready) {
	alert("You said" + ready);
}
else {
	alert("Fine then let the brain eating begin.");
}

var step1= false
if (step1 ===true) {
	console.log("You made it to week two of training!");
} else {
	console.log("Watch out those zombies are right on your heels!!!!");
};
	
console.log("You're not the only one who has been working out. The zombies now have levels to better challenge you.")

var zombies = [
	"Runner",
	"Lifter",
	"Hydrator"
];


console.log (zombies[1] + " is right behind you!");



var workingWith = function (quick) {
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


