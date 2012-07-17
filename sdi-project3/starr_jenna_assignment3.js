//Jenna Starr
//July 19th, 2012
//Project 3
//Zombie fitness story line.

alert("JavaScript works!");

//global variable

var motivation = "Keep it moving!"

// loop x3

/* for loop
 for (i=0; i<5; i++)
  {
  x=x + "The number is " + i + "<br />";
  }
  
  while loop
  while (i<5)
  {
  x=x + "The number is " + i + "<br />";
  i++;
  }
*/

//json
var name = {
	"name": "Next Level"
	"brains needed": 2,
	"miles": 22
};

var zombie = {
	level: "Runner",
	name: "Heidi",
	interests: [
	"Running",
	"Eating Brains",
	"Groaning"
	],
	age: 32,
	saySomething: function () {
		console.log ("Brainsssssss");
	}
};
var key = "name";
student.name = "Heidi";

console.log(student[key] );
console.log(student["saySomething"] );
console.log(student.saySomething );

student.saySomething();

student.saySomething= function() {
	console.log("Uhhhhhhh");
};

student["saySomething"]();

for (var key in zombie) {
	console.log("key: " + key + ", value: ", zombie[key]);
};



// argument x5

// method x4

// property x5

// return x5