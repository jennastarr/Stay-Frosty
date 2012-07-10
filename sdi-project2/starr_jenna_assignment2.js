//SDI Project 2
// Author: Jenna Starr

alert ("Week Two of Zombie Fitness Squad!");

var step1= false
if (step1 ===true) {
	console.log("You made it to week two of training!");
} else {
	console.log("Watch out those zombies are right on your heels!!!!");
	};

var zombies = [
	"Runner",
	"Lifter",
	"Hydrator"
];


console.log (zombies[1]);


var quick = 5.342;
var strength = 4;

var workingWith = function (quick) {
	var level = quick * strength 
	return level;
};

var reportLevel = function (name , level, message){
	console.log(name + " is at level " + level + message);
};

var level = workingWith(4)
reportLevel("Runner", level, " and is gaining on you");

