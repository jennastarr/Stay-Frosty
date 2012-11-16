$("#infoPage").live("pageshow", function(){
	  $.couch.db("asdproject").view("app/movies",{
            success: function(data){
                console.log(data);
                $('#programList').empty();
                 $.each(data.rows, function(index, movie){
                	var titles = movie.value.titles;
                	var vieweds = movie.value.vieweds;
                	var acquired = movie.value.rating;
                	var rating = movie.value.slider;
                	var note = movie.value.note;
                	$("#programList").append(
                			$('<li>').append(
                				$('<a>').attr("href", "program.html?program=" + notes)
                					.text(title)
                		)
                	);
                 });
                 
              $('#programList').listview('refresh');
            }
        });
        
    });
  
var urlVars = function(urlData) {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	  for (var pair in urlPairs) {
		  var keyValue = urlPairs[pair].split('=');
		  var key = decodeURIComponent(keyValue[0]);
		  var value = decodeURIComponent(keyValue[1]);
		  urlValues[key] = value;
	  }
	  return urlValues;
} 
  
  $('#program').live("pageshow", function(){
	  var program = urlVars()["program"];
	  console.log(program);
	  $.couch.db("asdproject").view("app/program",{
	    key: "program:" + program

  		});  

  });
  
  
