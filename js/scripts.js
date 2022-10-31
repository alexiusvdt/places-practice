//business logik
function DestinationBook() {
  this.locations = {}
  this.currentId = 0;
}
DestinationBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
DestinationBook.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;
}
DestinationBook.prototype.findLocation = function(id) {
  if (this.locations !== undefined) {
    return this.locations[id];
  } else {
    return false
  }
}


//ui logik
function Location(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let destinationBook1 = new DestinationBook();
let testLocation1 = new Location("Spain", "The Alhambra", "Winter", "Paella is delicious!");
let testLocation2 = new Location("Arctic", "Northern Lights", "Winter", "Brrrr!");
destinationBook1.addLocation(testLocation1);
destinationBook1.addLocation(testLocation2);