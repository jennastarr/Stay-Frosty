



//wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
   //alert(localStorage.length);
   
//variable defaults
	var choiceCategory = ["--Choose Category--",					
					   "Weapon", "Shelter", "Food"],
	    acquiredValue = "No",
	    usedValue,
	    againValue,
	    rateValue,
	    dataValue,
	    madeValue,
	    takenValue = "No",
	    oneValue = "No",
	    twoValue = "No",
	  	notAgainValue = "No",
	  	notseeValue = "No",
	  	hlpflValue = "No",
	  	errMsg = w('errors')
    ;


// getElementbyID Function
	function w(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

//creating field elements to populate with options
	function makeCats() {
		var myTagName = document.getElementsByName("category"),
		selectOption = w('categories'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groups");
	for(var i=0, j=choiceCategory.length; i<j; i++) {
			var makeOption = document.createElement('option');
			var optText = choiceCategory[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption)
	    }
		selectOption.appendChild(makeSelect);		
	} 

	function getSelectedRadioA() {
			var radioA = document.getElementById('myform').acquired;
			for(var i=0; i<radioA.length; i++) {
				if(radioA[i].checked) {
					acquiredValue = radioA[i].value;
	    }
	}								
}



	function getSelectedRadioB() {
			var radioB = document.getElementById('myform').used;
			for(var i=0; i<radioB.length; i++) {
				if(radioB[i].checked) {
					usedValue = radioB[i].value;
	    }
	}								
}



	function getSelectedRadioC() {
			var radioC = document.getElementById('myform').again;
			for(var i=0; i<radioC.length; i++) {
				if(radioC[i].checked) {
					againValue = radioC[i].value;
	    }
	}								
}



	function getSelectedRadioD() {
			var radioD = document.getElementById('myform').rate;
			for(var i=0; i<radioD.length; i++) {
				if(radioD[i].checked) {
					rateValue = radioD[i].value;
	    }
	}								
}


	function getCheckboxValueA() {
			if(w('yes').checked) {
					takenValue = w('yes').value;
				} 	
				  else {	
						takenValue = "No";
		}
}

	function getCheckboxValueB() {
			if(w('no').checked) {
					madeValue = w('no').value;
				} 	
				  else {	
						madeValue = "No";
		}
}



	function toggleControls(n) {
			switch(n) {
					case "on":
					w("innerForm").style.display = "none";
					w('clearData').style.display = "inline";
					w('displayData').style.display = "none";
					w('addNew').style.display = "inline";
					 break;
				   case "off":
				    w("innerForm").style.display = "inline";
					w('clearData').style.display = "inline";
					w('displayData').style.display = "inline";
					w('addNew').style.display = "none";
					w('items').style.display = "none";
				        break;
				      default:
				 return false;
			}
	}

//setting data for the local storage
	function storeData(key) {
		if(!key) {
			var id          = Math.floor(Math.random()*1000000001);
		} else {
			    id = key;
		}
		getSelectedRadioA();
		getSelectedRadioB();
		getSelectedRadioC();
		getSelectedRadioD();
		getCheckboxValueA();
		getCheckboxValueB();
			var item        = {};
			item.groups       = ["Category: ", w('groups').value];
			item.atitle       = ["Item: ", w('itName').value];
			item.found        = ["Found: ", w('fndName').value];
		 	item.checkbox1    = ["Taken: ", takenValue];
			item.checkbox2    = ["Made: ", madeValue];
			item.acquired     = ["Item was? ", acquiredValue];
			item.used       = ["First time used: ", usedValue];
			item.again        = ["Use again: ", againValue];
			item.ratestars    = ["Rate stars: ", rateValue];
			item.slider       = ["Slider: ", w('range-slider').value];
			item.notes        = ["Notes: ", w('noteName').value];
		localStorage.setItem(id, JSON.stringify(item)); 
		alert("Contact Saved!");	
	}

	//write data from local storage to the browser.

	function getData() {
			toggleControls("on");
			if(localStorage.length === 0) {
				 alert("There is no data in Local Storage so default data was added.");
				 autoFillData();
			}
	 		var makeDiv = document.createElement('div');
	 		makeDiv.setAttribute("id", "items");
	 		var makeList = document.createElement('ul');
	 		makeDiv.appendChild(makeList);
	 		document.body.appendChild(makeDiv);
	 		w('items').style.display = "block";
	 		for(var i=0, j=localStorage.length; i<j; i++) {
	 			var makeli = document.createElement('li');
	 			var linksLi = document.createElement('li');
	 			makeList.appendChild(makeli);
	 			var key = localStorage.key(i);
	 			var value = localStorage.getItem(key);
	 			var obj = JSON.parse(value);   
	 			var makeSubList = document.createElement('ul');
	 			makeli.appendChild(makeSubList);
	 			getImage(obj.groups[1], makeSubList);
	 			for(var n in obj) {
	 				var makeSubLi = document.createElement('li');
	 				makeSubList.appendChild(makeSubLi);
	 				var optSubText = obj[n][0]+""+obj[n][1];
	 				makeSubLi.innerHTML = optSubText;
	 				makeSubList.appendChild(linksLi);
	 		}
	 		makeItemLinks(localStorage.key(i), linksLi);//edit and delete buttons/link
	 	}
	}

	function getImage(imgName, makeSubList) {
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/"+ imgName + ".png");
		imageLi.appendChild(newImg);

	}

	function autoFillData() {
		for(var n in json) {
			var id = Math.floor(Math.random()*1000000001);
			localStorage.setItem(id, JSON.stringify(json[n])); 
		}
	}
	
	//edit and delete links for eack stored item
	function makeItemLinks(key, linksLi) {
		var editLink = document.createElement('a'); 
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Info";		
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete";
		deleteLink.addEventListener('click', deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}

	function editItem() {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		toggleControls("off");


		w('groups').value = item.groups[1];
		w('itName').value = item.atitle[1];
		w('fndName').value = item.found[1];

		var radioA = document.forms[0].acquired;
		for(var i=0; i<radioA.length; i++) {
			if(radioA[i].value == "Acquired" && item.acquired[1] == "Acquired") {
				radioA[i].setAttribute("checked", "checked");
			} else if(radioA[i].value == "Helpful" && item.acquired[1] == "Helpful"){
			 	radioA[i].setAttribute("checked", "checked");

				}

			}
			var radioB = document.forms[0].used;
			for(var i=0; i<radioB.length; i++) {
				if(radioB[i].value == "Used" && item.used[1] == "Used") {
					radioB[i].setAttribute("checked", "checked");
				} else if(radioB[i].value == "No" && item.used[1] == "No"){
				 	radioB[i].setAttribute("checked", "checked");

				}

		}
			var radioC = document.forms[0].again;
			for(var i=0; i<radioC.length; i++) {
				if(radioC[i].value == "Again" && item.watch[1] == "Again") {
					radioC[i].setAttribute("checked", "checked");
				} else if(radioC[i].value == "No" && item.again[1] == "No"){
				 	radioC[i].setAttribute("checked", "checked");

				}

		}
			var radioD = document.forms[0].rate;
			for(var i=0; i<radioD.length; i++) {
				if(radioD[i].value == "Stars" && item.rate[1] == "Stars") {
					radioD[i].setAttribute("checked", "checked");
				} else if(radioD[i].value == "PickStar" && item.rate[1] == "PickStar"){
				 	radioD[i].setAttribute("checked", "checked");

				}

		}
				if(item.checkbox1[1] = "taken"){
			w('yes').setAttribute("checked", "checked");
	}
				if(item.checkbox2[1] = "made"){
			w('yes').setAttribute("checked", "checked");
	}

			if(item.used[1] = "yes"){
			w('yes').setAttribute("checked", "checked");
	}

			w('range-slider').value = item.slider[1];
			w('noteName').value = item.notes[1];

			submitBtn.removeEventListener('click', storeData);

			w('submit').value = "Edit Info";
			var editSubmit = w("submit");
			editSubmit.addEventListener("click", validate);
			editSubmit.key = this.key;
	}

		function deleteItem() {
			var ask = confirm("Are you sure you want to delete this info?");
			if(ask) {
				localStorage.removeItem(this.key);
				alert("Info was deleted.");
				window.location.reload();
			} else {
				alert("Info was NOT deleted.");
			}
		}	


		function clearLocal() {
			if(localStorage.length === 0) {
			    alert("There is no data to clear.");
			    } else 
			    	   {
			    	   	 localStorage.clear();
			    	   	 alert("All contacts are deleted!");
			    	   	 window.location.reload();
			    	   	 return false;
			}
	}

		function validate(e) {
			var getGroups   = w('groups');
			var getAtitle   = w('itName');
			var getFound  = w('fndName');

			errMsg.innerHTML = "";
			getGroups.style.border = "1px solid black";
			getAtitle.style.border = "1px solid black";
			getFound.style.border = "1px solid black";

			var messageAry = [];

			if(getGroups.value === "--Choose Category--") {
				var groupError = "Please select a category.";
				getGroups.style.border = "1px solid red";
				messageAry.push(groupError); 

			}

			if(getAtitle.value === "") {
				var aTitleError = "Please enter an item.";
				getAtitle.style.border = "1px solid red";
				messageAry.push(aTitleError);		
			 }

			 if(getFound.value === "") {
				var foundError = "Please enter a date.";
				getFound.style.border = "1px solid red";
				messageAry.push(foundError);
			 }

		 if(messageAry.length >= 1) {
		 	for(var i=0, j=messageAry.length; i < j; i++) {
		 		var txt = document.createElement('li');
		 		txt.innerHTML = messageAry[i];
		 		errMsg.appendChild(txt);
		   }	
		     e.preventDefault();
		     return false;	
	   } else {
	   			storeData(this.key);
	   }

	}

 	makeCats();	

	//set & submit click events

	var displayData = w('displayData');
	displayData.addEventListener("click", getData);
	var clearData = w('clearData');
	clearData.addEventListener("click", clearLocal);
	var submitBtn = w('submit');
	submitBtn.addEventListener('click', validate);

});

var fieldColor_1 = function() {
		var field = document.getElementById("itName");
			field.style.backgroundColor = "#dce5ea";

};

var fieldColor_3 = function() {
		var field = document.getElementById("fndName");
			field.style.backgroundColor = "#dce5ea";

};
var fieldColor_4 = function() {
		var field = document.getElementById("noteName");
			field.style.backgroundColor = "#dce5ea";

};

var parseMyForm = function(data){
	//use form data here:
	console.log(data);
};

$(document).ready(function(){
	var p3form = $('#myform');
	p3form.validate({
		invalidHandler: function(form, validator){},
		submithandler:	function(){
			 var data = p3form.serializeArray();
			 parseMyForm(data);
		}
	});
});

