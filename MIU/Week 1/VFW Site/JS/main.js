/** 
Jenna Starr
VFW Web Application
Term 1207 
**/


window.addEventListener("DOMContentLoaded", function (){


	function $(EID){
		var theElement = document.getElementById(EID);
		return theElement;
	}



	function makeItemTypes(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('itemtype'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "itemtypes");

		for(var i=0, d=itemtypes.length; i<d; i++){
			var makeOption = document.createElement('option');
			var optText = itemtypes[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);

	};

	function makeUndead(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('undead'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "undeads");

		for(var i=0, u=undeads.length; i<u; i++){
			var makeOption = document.createElement('option');
			var optText = undeads[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);

	};

	function makeSpeed(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('speed'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "dspeed");

		for(var i=0, s=speed.length; i<s; i++){
			var makeOption = document.createElement('option');
			var optText = speed[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);

	};

		function makeTaste(){
			var formTag = document.getElementsByTagName("form"),
			selectLi = $('taste'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "taste");

		for(var i=0, t=taste.length; i<t; i++){
			var makeOption = document.createElement('option');
			var optText = taste[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);

	};

		function makeDifficulty(){
			var formTag = document.getElementsByTagName("form"),
			selectLi = $('difficulty'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "difficulty");

		for(var i=0, d=difficulty.length; i<d; i++){
			var makeOption = document.createElement('option');
			var optText = difficulty[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);

	};

	
	var itemtypes = ["Option","Food", "Weapon", "Shelter"],
		undeads = ["Undead","No Worries.","I think we are gonna need a bigger bat!","RUNNNNNN!!!!!","Why is that guy wearing a hockey mask?","Yes","No","Wait i hear music, don't go in there!"],
		speed = [1,2,3,4,5,6,7,8,9,10,11,12,13],
		taste = [1,2,3,4,5,6],
		difficulty = [1,2,3,4,5,6,7,8,9,10,11,12,13],
		isFavorite = "No",
		errors = $('errors');

	

	makeItemTypes();
	makeUndead();
	makeSpeed();
	makeTaste();
	makeDifficulty();
	



	var showRange = $("range");
	showRange.addEventListener("change", getValue);

	function getValue(){
		var value = showRange.value;
		document.getElementById("quantityrange").innerHTML=value;

	} 


	function getFavCheckbox(){
	  if($('favorite').checked){
	     isFavorite = $('favorite').value;
	  }else{
	  	 isFavorite = "No";
	  }
	}

	function toggleControls(n){
		switch(n){
			case "on":
				$('addItemForm').style.display 	= "none";
				$('clearLink').style.display 	="inline";
				$('displayLink').style.display 	="none";
				$('addItemLink').style.display 	="inline";

				break;

			case "off":
				$('addItemForm').style.display 	= "block";
				$('clearLink').style.display 	="inline";
				$('displayLink').style.display 	="none";
				$('addItemLink').style.display 	="none";
				$('items').style.display 	    ="none";
				break;

			default:
				return false;		
		}
	}


	function storeData(key){
		if(!key){
		var id = Math.floor(Math.random()*1000000001);
		} else {
		 id = key;
		}

		getFavCheckbox();
		var item 				= {};
			item.itemtype		= ["<b>Item Type:</b>", $('itemtypes').value];
			item.undead 		= ["<b>Undead:</b>", $('undeads').value];
			item.location		= ["<b>Location:</b>", $('location').value];
			item.description	= ["<b>Description:</b>", $('description').value];
			item.speed			= ["<b>Speed:</b>", $('speed').value];
			item.taste			= ["<b>Taste:</b>", $('taste').value];
			item.difficulty		= ["<b>Difficulty:</b>", $('difficulty').value];
			item.range 			= ["<b>Quantity Range:</b>", $('range').value];
			item.favorite		= ["<b>Favorite:</b>", isFavorite];
			item.date			= ["<b>Date Found:</b>", $('date').value];
			item.notes			= ["<b>Notes:</b>", $('notes').value];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Selection has been saved !");

	}


	function getData(){
		toggleControls("on");
		if (localStorage.length === 0 ){

		 	var example = confirm("You have nothing saved, Would you like to add some example Data?.");
		 	console.log(example);
		 	if (example === true){
		 	 	autoAddItems();
		 	 	alert("Example Data was added");
		 	}else{
		 	    alert("No data was added.");
		 	}

		}

		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display ="block";

		for(var i=0 , len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			var linksli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			var imgsrc = "";
			switch(obj.itemtype[1]){
				case "Food" :
					imgsrc = "burger";
					break;
				case "Weapon"  :
					imgsrc = "gun";
					break;
				case "Shelter"       :
					imgsrc = "shelter";
					break;
			
				default : 
				console.log("something is broken getData function");
			}

			getImage(imgsrc,makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubli.setAttribute("id", "dlist");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+"    "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubli.appendChild(linksli);
			}
				makeEditDeleteLinks(localStorage.key(n), linksli);
		}
	}

	function getImage(imgsrc,makeSubList){
		var imgLi = document.createElement('li');
		makeSubList.appendChild(imgLi);
		var newImg = document.createElement('img');
		newImg.setAttribute("src", "images/" + imgsrc + ".png");
		imgLi.appendChild(newImg)

	}


	function autoAddItems(){
		json = {
			"item1" : {
				"itemtype"		: 	["Item Type:","Weapon"],
				"undead"		:	["Undead:","Wait i hear music, don't go in there!"],
				"location"		:	["Location:","Warehouse"],
				"description"	:	["Description:","Creepfest"],
				"speed"			:	["Speed:","9"],
				"taste"			:	["Taste:","0"],
				"difficulty"	:	["Difficulty:","7"],
				"range"			:	["Quantity Range:","8"],
				"favorite"		:	["Favorite:","no"],
				"date"			:	["Date:","11-11-2011"],
				"notes"			:	["Notes:","They just came out of nowhere."]

			},
			"item2" : {
				"itemtype"		: 	["Item Type:","Food"],
				"undead"		:	["Undead:","No Worries."],
				"location"		:	["Location:","Elm Street"],
				"description"	:	["Description:","Hopscotch in chalk drawn everywhere."],
				"speed"			:	["Speed:","3"],
				"taste"			:	["Taste:","1"],
				"difficulty"	:	["Difficulty:","2"],
				"range"			:	["Quantity Range:","0"],
				"favorite"		:	["Favorite:","yes"],
				"date"			:	["Date:","1-11-2010"],
				"notes"			:	["Notes:","Barely found anything around here except a striped sweater."]

			},
			"item3" : {
				"itemtype"		: 	["Item Type:","Shelter"],
				"undead"		:	["Undead:","Why is that guy wearing a hockey mask?"],
				"location"		:	["Location:","Crystal Lake"],
				"description"	:	["Description:","Oddly restful"],
				"speed"			:	["Speed:","0"],
				"taste"			:	["Taste:","3"],
				"difficulty"	:	["Difficulty:","0"],
				"range"			:	["Quantity Range:","0"],
				"favorite"		:	["Favorite:","yes"],
				"date"			:	["Date:","10-31-2003"],
				"notes"			:	["Notes:","Nice place to rest, made some s'mores."]

			}
		}
		for (var n in json){
		var id = Math.floor(Math.random()*1000000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}



	function makeEditDeleteLinks(key, linksli){
		var editLink = document.createElement('a');
			editLink.href = "#";
			editLink.key = key;
		var editText = "Edit Item";
			editLink.addEventListener("click", editItem);
			editLink.innerHTML = editText;
			linksli.appendChild(editLink);

		var brtag = document.createElement('br');
			linksli.appendChild(brtag);



		var deleteLink = document.createElement('a');
			deleteLink.href = "#";
			deleteLink.key = key;
		var deleteText = "Delete Selection";
			deleteLink.addEventListener("click", deleteItem);
			deleteLink.innerHTML = deleteText;
			linksli.appendChild(deleteLink);

		var hrTag= document.createElement('hr');
			linksli.appendChild(hrTag);

	}


	function editItem(){
		var values = localStorage.getItem(this.key);
		var item = JSON.parse(values);

		toggleControls("off");

			$('itemtypes').value = item.itemtype[1];
			$('undeads').value = item.undead[1];
			$('location').value = item.location[1];
			$('description').value = item.description[1];
			$('speed').value = item.speed[1];
			$('taste').value = item.taste[1];
			$('difficulty').value = item.difficulty[1];
			$('range').value = item.range[1];
		if (item.favorite[1] == "yes"){
			$('favorite').setAttribute('checked', 'checked');
		}
			$('date').value = item.date[1];
			$('notes').value = item.notes[1];


			save.removeEventListener("click", storeData);
			$('submit').value = "Edit Selection";
		var editSubmit = $('submit');

			editSubmit.addEventListener("click", validate);
			editSubmit.key = this.key;

	}


	function validate(e){
	
		var getItemtype = $('itemtypes');
		var getUndead = $('undeads');
		var getDate = $('date');

		
		errors.innerHTML= "";
		getItemtype.style.border = "1px solid black";
		getUndead.style.border = "1px solid black";
		getDate.style.border = "1px solid black";



		var msgError = [];

		if (getItemtype.value === "Item Type"){
			var itemtypeErr = "Please Select a Item Type";
			getItemtype.style.border = "1px solid red";
			
			msgError.push(itemtypeErr);		
		}

		if (getUndead.value === "Undead"){
			var mfgErr = "Please Select a Undead";
			getUndead.style.border = "1px solid red";

			msgError.push(mfgErr);
		}

		if (getDate.value === ""){
			var dateErr = "Please add a Date Found";
			getDate.style.border = "1px solid red";

			msgError.push(dateErr);
		}

		if (msgError.length >=1){

			for (var i=0, j=msgError.length; i < j; i++){
				var errLi = document.createElement("li");
				errLi.innerHTML = msgError[i];
				errors.appendChild(errLi);
				}
		e.preventDefault();
		return false;
		} else {
			storeData(this.key);

		}

	}

	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this?");
		if (ask){
			localStorage.removeItem(this.key);
			alert("Selection was deleted");
			window.location.reload();
		}else{
			alert("Item was not deleted");
		}
	}

	function clearLocalData(){
		if (localStorage.length === 0){
		alert("Nothing to delete");
		}else{
		localStorage.clear();
		alert("All Data Deleted");
		window.location.reload();
		return false;
		}
	}

	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);

	var clearLink = $('clearLink');
	clearLink.addEventListener("click", clearLocalData);

	var save = $('submit');
	save.addEventListener("click", validate);

});
