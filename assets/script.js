// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//empty array to add to based on promptUser
var options = ""

function generatePassword(str) {
  for (let i = 0; i < howLong(); i++) {

  }
}


//bigger function to prompt user containing smaller modular functions
function promptUser(){
  howLong()
  lowers()
  caps()
  specials()
  nums()
  //checks that they chose at least one data type
  if(validChoices()){
    //inner functions to ask how long, if special, if capitals
    generatePassword(options)
  }
  alert("You must choose, at least one data type.")
  promptUser()
}

function howLong() {
  //prompts user for length of password bewteen 8 and 128 chars
  // returns a Number 
  var len = prompt("How long would you like your password", "at least 8, no more than 128")
  return len 
}

function caps() {
  var bool = confirm("I want my password to include Capital Letters (A,B,C...). Cancel if you don't")
  options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return bool
}

function specials() {
  var bool = confirm("Do you want to include Special Characters (!@#$%^&*()[]{}). Cancel if you don't") 
  options += "!@#$%^&*()[]{}"
  return bool
}
function lowers() {
  var bool = confirm("Do you want to include Lowercase Letters (x,y,z...). Cancel if you don't") 
  options += "abcdefghijklmnopqrstuvwxyz"
  return bool
}

function nums() {
  var bool = confirm("Do you want to include numbers (1,2,3...). Cancel if you don't") 
  options += "0123456789"
  return bool
}

function validChoices() {
  //retun true if at least one data types is true
  return (nums() || specials() || caps() || lowers())
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
