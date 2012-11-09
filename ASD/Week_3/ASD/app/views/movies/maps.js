function (doc) {
  if (doc._id.substr(0,7) === "Horror:") {
    emit(doc._id, {
    	"group": doc.group,
    	"titles": doc.title,
    	"vieweds": doc.viewed,
    	"acquired": doc.acquired,
    	"rating": doc.slider,
    	"note": doc.notes
    });
  }
};