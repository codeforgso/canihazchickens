//below are the ordinances that this app will process

//Zero on lots less than 7000 sq feet,
//4 on lots between 7000 and 12000 sq feet,
//20 on lots over 12000 sq feet;
//One animal over six months of age per 3000 sq feet on any size lot

//start a function that declares a var for the user input
function{
  var userInput = $("#address").var();
  var lotSpecs = userInput(//square footage); //search for lot in database and find the column associated with the sqft of the lot
  var zoning = userInput(//type of zone);
}

//if the address is not found return that the address cannot be found

//if lot >= 12000 and single family housing then return yes and 20 chickens
if(parseInt(lotSpecs) >= 12000 && zoning = //single family){
  document.write("Congratulations your lot is " + lotSpecs + " square feet. You are allowed to have up to 20 chickens.");
}
//elseif lot >=7000 then return yes and 4 chickens
else if (parseInt(lotSpecs) >= 7000 && zoning = //single family) {
  document.write("Congratulations your lot is " + lotSpecs + " square feet. You are allowed to have up to 4 chickens.");
}

//else return no and 0 chickens
else(){
  document.write("Sorry " + userInput + " is either not large enough to have chickens or the property is not zoned for chickens. You can contact the planning department for more information.")
}
