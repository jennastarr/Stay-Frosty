//Jenna Starr
//July 19th, 2012
//Project 3
//Zombie fitness story line.

alert("JavaScript works!");

//global variable

var motivation = 

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

var student = {
	id: "1298304",
	name: "heidi",
	interests: [
	"Running",
	"Eating Brains",
	"Groaning"
	],
	age: 32,
	sayHi: function () {
		console.log ("Brainsssssss");
	}
};
var key = "name";
student.name = "Heidi";

console.log(student[key] );
console.log(student["sayHi"] );
console.log(student.sayHi );

student.sayHi();

student.sayHi= function() {
	console.log("Uhhhhhhh");
};

student["sayHi"]();

for (var key in student) {
	console.log("key: " + key + ", value: ", student[key]);
};



// argument x5

// method x4

// property x5

// return x5