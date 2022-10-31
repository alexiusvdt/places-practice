
Create a website where you can keep track of all the places you've been. 

Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. 

Display those properties when a user clicks on a place's name. Complete the business logic for your place object. 

Use test-driven development to write your business logic, and include the tests in your README.md. After every passing test, make sure to commit your code.

If you complete the business logic, you may work on adding a user interface. (See the upcoming lessons for more on adding a UI.) 

## TESTs
Describe: DestinationBook()

Test: this will create the DestinationBook object
Code: DestinationBook();
Output: {} (blank object)

Describe: DestinationBook.prototype.assignId()
Test: this will increment the index key by 1
code: DestinationBook.prototype.assignId(0)
output: location.id = 1

Describe: DestinationBook.prototype.addLocation()
Test: this will add location and ID to AddressBook
Code: DestinationBook.prototype.addLocation(location)
Output: location, contact.id

Describe: DestinationBook.prototype.findLocation()
Test: this will return a specific location
Code: DestinationBook.prototype.findLocation(1)
Output: Spain details

//business
//create DestinationBook.prototype.findLocation() //equivalent of searching for a contact
//create DestinationBook.prototype.deleteLocation() //removing contact
