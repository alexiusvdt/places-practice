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

//UI Logic

let destinationBook = new DestinationBook();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputLocation = document.querySelector("input#inputLocation").value;
  const inputLandmark = document.querySelector("input#inputLandmark").value;
  const inputTimeOfYear = document.querySelector("input#inputTimeOfYear").value;
  const inputNotes = document.querySelector("input#inputNotes").value;
  let newLocation = new Location(inputLocation, inputLandmark, inputTimeOfYear, inputNotes);
  destinationBook.addLocation(newLocation);
  console.log('location appended successfully!', newLocation);
  printLocations(destinationBook);
  document.querySelector("div#location-details").removeAttribute("class");
}

function printLocations(destinationBookToDisplay) {
  let locationDiv = document.querySelector("div#location-details");
  locationDiv.innerText = null;
  const ul = document.createElement("ul");
  console.log('beginning forEach!');
  Object.keys(destinationBookToDisplay.locations).forEach(function(key) {  
    const location = destinationBookToDisplay.findLocation(key);
    const li = document.createElement("li");
    //this line is breaking things fix what is getting appended?
    li.append(destinationBookToDisplay.object);
    li.setAttribute("id", location.id);
    ul.append(li);
    console.log('appended:', li)
  });
  locationDiv.append(ul);
}

function Location(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

window.addEventListener("load", function() {
  document.querySelector("form#new-location").addEventListener("submit", handleFormSubmission);
})


// let destinationBook1 = new DestinationBook();
// let testLocation1 = new Location("Spain", "The Alhambra", "Winter", "Paella is delicious!");
// let testLocation2 = new Location("Arctic", "Northern Lights", "Winter", "Brrrr!");
// destinationBook1.addLocation(testLocation1);
// destinationBook1.addLocation(testLocation2);