function (doc) {
  if (doc.program[1].substr(0,7) === "A") {
    emit(doc.program, {
    	"group": doc.group,
    	"titles": doc.title,
    	"vieweds": doc.viewed,
    	"acquired": doc.acquired,
    	"rating": doc.slider,
    	"note": doc.notes
    });
  }
};