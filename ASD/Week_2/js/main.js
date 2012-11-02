var genreValue,
	genreChecked,
	level,
	favoriteValue = "No"
;

var movieForm = $('#addItem'),
	errorslink = $('#errorslink'),
	submittedlink = $('#submittedlink'),
	viewlink = $('#viewAllItems'),
	editlink = $('#editItem'),
	favorite = $('#favorite'),
	save = $('#submit')
;

var revealToggle = function() {
	$('.reveal').toggle();
	$('.form').toggle();
	$('#navbar_additems').toggle();
	$('#navbar_additems_alt').toggle();
};

$('.app_footer .viewall').click(function() {
	$('.newitem').click();
	revealToggle();
});

$('#newItem').on('pageinit', function(argument) {
	
	var storeData = function(key) {

		var id = key;
		
		if(movieForm.valid()) {
			var id = Math.floor(Math.random()*100000001);
		} else {
			id = key;
		};

		var getSliderValue = function() {
			if (favorite[0].value === "on") {
				favoriteValue = "Yes";
			} else {
				favoriteValue = "No";
			}
		};

		var getSelectedRadio = function() {
			var radios = $('input:radio[name=genre]:nth(0)');
			for (var i=0; i < radios.length; i++) {
				if (radios[i].checked) {
					genreValue = radios[i].value;
					genreChecked = radios[i];
				}
			}
		};

		var item = {};
		item.groups = ['Group:', $('#groups').val()];
		item.titles = ['Title:', $('#movietitle').val()];
		item.vieweds = ['Viewed:', $('#viewed').val()];
		item.watchs = ['Watchs:', $('#watchs').val()];
		item.datewatched = ['Watched:', $('#watched').val()];
		item.rating = ['Rating:', $('#rating').val()];
		item.acquired = ['Acquired:', getSelectedRadio()];
		item.favs = ['Favorite:', getSliderValue()];
		item.note = ['Notes:', $('#notes').val()];
		localStorage.setItem(id, JSON.stringify(item));
		
		clearForm(submit);
		
	};

	var clearForm = function(check) {
		
		var resetSelect = function() {
			var select = $('#groups');
			select[0].selectedIndex = 5;
			select.selectmenu('refresh');
		}
		
		var resetSlider = function() {
			$('#rating').val(5).slider('refresh');
			$('#favorite').val(0).slider('refresh');
		};
		
		var clearRadios = function() {
			$('#Science-Fiction').attr('checked',false).checkboxradio('refresh');
			$('#Fantasy').attr('checked',false).checkboxradio('refresh');
			$('#Thriller').attr('checked',false).checkboxradio('refresh');
			$('#Classic').attr('checked',false).checkboxradio('refresh');
			$('#Periodical').attr('checked',false).checkboxradio('refresh');
		};
		
		resetSelect();									
		resetSlider();
		clearRadios();
		
		if(check === submit) {
			$('#hclear').click();
			$('#submitlink').click();
		} else {
			$('#hclear').click();
			$('#clearall').click();
		}
	};


	movieForm.validate({
		
		invalidHandler: function(form, validator) {
			errorslink.click();
			var output = '';
			for(var key in validator.submitted) {
				var label = $('label[for^="' + key + '"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				output += '<li class="errorli">' + "You're missing the " + fieldName.toLowerCase() + "." + '</li>';
			};
			$('#geterrors ul').html(output);
			console.log(validator.submitted);
		},

		submitHandler: function() {
			storeData(this.key);
		}
	});
	
	var loadData = function(type) {
		//JSON
		var getJSON = function() {
			$('.datapark').empty();
			$('#dataload').empty();
			$('<h4>').html("JSON Test Data").appendTo('#dataload');
				$.ajax({
					url:  "xhr/json.js",
					type: "GET",
					dataType: "json",
					success: function(json){
						alert("Working");
						for (var i=0, j=json.item.length; i<j; i++){
							var dataJSON = json.item[i];
							$(''+
								'<p>'+ dataJSON.groups +'</p>'+
								'<p>'+ dataJSON.titles +'</p>'+
								'<p>'+ dataJSON.vieweds +'</p>'+
								'<p>'+ dataJSON.watchs +'</p>'+
								'<p>'+ dataJSON.datewatched +'</p>'+
								'<p>'+ dataJSON.rating +'</p>'+
								'<p>'+ dataJSON.acquired +'</p>'+
								'<p>'+ dataJSON.favs +'</p>'+
								'<p>'+ dataJSON.note +'</p>'
							).appendTo('#dataload');
							console.log("JSON Works!");
							console.log(json);
						}
					}
				});
			return false;
		};
		
		//XML
		var getXML = function() {
			$('.datapark').empty();
			$('#dataload').empty();
			$('<h4>').html("XML Test Data").appendTo('#dataload');
				$.ajax({
					url: 'xhr/xmldata.xml',
					type: 'GET',
					dataType: 'xml',
					success: function(xml){
						$(xml).find('movie').each(function(){
							var groups = $(this).find('groups').text();
							var titles = $(this).find('titles').text();
							var vieweds = $(this).find('vieweds').text();
							var watchs = $(this).find('watchs').text();
							var datewatched = $(this).find('datewatched').text();
							var rating = $(this).find('rating').text();
							var acquired = $(this).find('rating').text();
							var favs = $(this).find('favs').text();
							var note = $(this).find('note').text();
							$('<div class="datapark" id=type_'+ groups +'"></div').html(
								'<p>'+ "Title:  "+ titles +'</p>'+
								'<p>'+ "Viewed:  "+ vieweds +'</p>'+
								'<p>'+ "Watchs:  "+ watchs +'</p>'+
								'<p>'+ "Date Watched:  "+ datewatched +'</p>'+
								'<p>'+ "Rating:  "+ rating +'</p>'+
								'<p>'+ "Acquired:  "+ acquired +'</p>'+
								'<p>'+ "Favorites:  "+ favs +'</p>'+
								'<p>'+ "Note:  "+ note +'</p>'
								).appendTo('#dataload');
						});
						console.log("XML Works!");
						console.log(xml);
					}
				});
				return false;
		};
		
		//CSV
		var getCSV = function() {
			$('.datapark').empty();
			$('#dataload').empty();
			$('<h4>').html("CSV Test Data").appendTo('#dataload');
				$.ajax({
					url:  'xhr/csvdata.csv',
					type: 'GET',
					dataType: 'text',
					success: function(csv){
						var info = csv.split('\n');
						for (var i=1, j=info.length; i<j; i++){
							var foo = info[i];
							var item = foo.split(',');
							var movie = $(''+'<div class="datapark">'+
								'<p>'+ 'Group:  '+ item[0]+'</p>'+
								'<p>'+ 'Title:  '+ item[1] +'</p>'+
								'<p>'+ 'Viewed:  '+ item[2] +'</p>'+
								'<p>'+ 'Watchs:  '+ item[3] +'</p>'+
								'<p>'+ 'Date Watched:  '+ item[4] +'</p>'+
								'<p>'+ 'Rating:  '+ item[5] +'</p>'+
								'<p>'+ 'Acquired:  '+ item[6] +'</p>'+
								'<p>'+ 'Favorite:  '+ item[7] +'</p>'+
								'<p>'+ 'Note:  '+ item[8] +'</p>'+
								'</div>'
								).appendTo('#dataload');
						}
						console.log("CSV Works!");
						console.log(csv);
					}
				});
				return false;
		};
		
		if(type === 'JSON') {
			getJSON();
		} else if(type === 'XML') {
			getXML();
		} else if(type === 'CSV') {
			getCSV();
		}
		
	};
	
	$('.reveal').hide();
	$('#navbar_additems_alt').hide();
	$('.hide').hide();
	
	$('.form_footer .viewall').click(function() {revealToggle();});
	$('.reset').click(function() {clearForm();});
	$('#load_JSON').on('click', function() {loadData('JSON');});
	$('#load_XML').on('click', function() {loadData('XML');});
	$('#load_CSV').on('click', function() {loadData('CSV');});
});