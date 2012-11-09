$(document).ready(function(){
    console.log("We are on the infoPage"); 
        $.ajax({
            url: "_view/movies",
            dataType: "json",
            success: function(data){
                console.log(data);
                 $.each(data.rows, function(index, family){
                	var titles = horror.value.titles;
                	var vieweds = horror.value.vieweds;
                	var acquired = horror.value.rating;
                	var rating = horror.value.slider;
                	var note = horror.value.note;
                	$("#programList").append(
                			$('<li>').append(
                				$('<a>').attr("href", "#")
                					.text(title)
                		)
                	);
                 });
                 
              $('#programList').listview('refresh');
            }
        });
        
    });   