$('#index').on('pageinit', function(){
	$('#clearAllData').on('click', clearData);
	$('#Work').on('click', getData);
	$('#Moving').on('click', getData);
	$('#Family').on('click', getData);
	$('#Vacation').on('click', getData);
});	
		
$('#addItem').on('pageinit', function(){
	delete $.validator.methods.date;
	var myForm = $('#addTripForm');
	myForm.validate({
		invalidHandler: function(form, validator) {
		},
		submitHandler: function() {
			var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	$('#resetFormButton').on('click', resetForm);
	function resetForm () {
		var radioButtons = $('#radios input');  
		for (var i = 0; i < radioButtons.length; i++) {
			$(radioButtons[i]).removeAttr('selected');
		}
		$('#numPeople').value = "1";
	}
	
});

$('#search').on('pageinit', function(){
	getData(false);
});

var autoFillData = function (){
	for(var n in json) {
		var id = Math.floor(Math.random()*1000000);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}	 
};

var getData = function(browsing){
	if (localStorage.length === 0) {
		alert("There are no saved trips, so default data was added.");
		autoFillData();
	}
	if (browsing) {
		var appendLocation = $('#browseTripList').html("");
		catFilter = this.id;
		$('#catLabelWork').css('textShadow', 'none');
		$('#catLabelMoving').css('textShadow', 'none');
		$('#catLabelFamily').css('textShadow', 'none');
		$('#catLabelVacation').css('textShadow', 'none');
		$('#catLabel' + catFilter).css('textShadow', '0 0 3px #F90');
		$('#selectMsg').css('display', 'none');
	} else {
		var appendLocation = $('#searchTripList').html("");
	}
	
	for (var i = 0, j = localStorage.length; i < j; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		
		if (browsing) {
			if (obj.type[1] === catFilter) {
				goodToGo = true;
			} else {
				goodToGo = false;
			}
		} else {
			goodToGo = true;
		}
		
		if (goodToGo) {
			var makeEntry = $('<div></div>')
				.attr('data-role', 'collapsible')
				.attr('data-mini', 'true')
				.attr('id', key)
				.appendTo(appendLocation)
			;
			
			var makeH3 = $('<h3></h3>')
				.html(obj.dest[1] + " - " + obj.date[1])
				.appendTo(makeEntry)
			;
			
			var makeList = $('<ul></ul>').appendTo(makeEntry);
			for (var k in obj) {
				var makeLi = $('<li></li>')
					.html(obj[k][0] + " " + obj[k][1])
					.appendTo(makeList)
				;
			}
			
			var buttonHolder = $('<div></div>').attr('class', 'ui-grid-a').appendTo(makeEntry);
			var editButtonDiv = $('<div></div>').attr('class', 'ui-block-a').appendTo(buttonHolder);
			var removeButtonDiv = $('<div></div>').attr('class', 'ui-block-b').appendTo(buttonHolder);
			var editButton = $('<a></a>')
				.attr('data-role', 'button')
				.attr('href', '#addItem')
				.html('Edit')
				.data('key', key)
				.appendTo(editButtonDiv)
			;
			var removeButton = $('<a></a>')
				.attr('data-role', 'button')
				.attr('href', '#')
				.html('Remove')
				.data('key', key)
				.appendTo(removeButtonDiv)
				.on('click', removeTrip)
			;
			$(makeEntry).trigger('create');
		}
		$(appendLocation).trigger('create');
	}
};

var storeData = function(data, key){
	if (!key) {
		var id = Math.floor(Math.random()*1000000);
	} else {
		var id = key;
	}
	var trip = {};
			trip.type = ["Trip Type: ", data[0].value];
			trip.method = ["Travel Method: ", data[1].value];
			trip.dest = ["Destination: ", data[2].value];
			trip.date = ["Date: ", data[3].value];
			trip.people = ["Number of People: ", data[4].value];
			trip.notes = ["Notes: ", data[5].value];
		
		localStorage.setItem(id, JSON.stringify(trip));
		alert("Trip Saved!");
}; 

var	removeTrip = function (){
	var ask = confirm("Are you sure you want to remove this?");
	if (ask) {
		localStorage.removeItem($(this).data('key'));
		window.location.reload();
	} else {
		alert("Item was not removed.");
	}		
};
					
var clearData = function(){
	if (localStorage.length === 0) {
			alert("There are nothing saved to clear.");
		} else {
			localStorage.clear();
			alert("All saved items have been cleared.");
			window.location.reload();
			return false;
		}
};


