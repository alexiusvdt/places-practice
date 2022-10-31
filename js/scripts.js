//business logik
function DestinationBook() {
  this.locations = {}
  this.currentId = 0;
}
DestinationBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


//ui logik
function Location(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}