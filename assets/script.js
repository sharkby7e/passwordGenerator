// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//empty string to add to based on promptUser
var options = ""

function generatePassword(str) {
  options = ""
  promptUser()
  //checks that they chose at least one data type
  return options
}


//bigger function to prompt user containing smaller modular functions
function promptUser(){
  howLong()
  caps()
  lowers()
  specials()
  nums()
  validChoices()
}

function howLong() {
  //prompts user for length of password bewteen 8 and 128 chars
  // returns a Number 
  var len = prompt("How long would you like your password", "at least 8, no more than 128")
  if (len.typeOf=Number && len<=128 && len>=8 ){
    return len 
  }alert("please read the prompt more carefully this time")
  howLong()
}

// checks if they want capital letters
function caps() {
  var bool = confirm("I want my password to include Capital Letters (A,B,C...). Cancel if you don't")
  if(bool==true){
    options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  return bool
}

// checks if they want lowercase letters
function lowers() {
  var bool = confirm("I want to include Lowercase Letters (x,y,z...). Cancel if you don't") 
  if(bool==true){
    options += "abcdefghijklmnopqrstuvwxyz"
  }
  return bool
}

//checks if they want numbers
function nums() {
  var bool = confirm("I want to include numbers (1,2,3...). Cancel if you don't")
  if(bool==true){
    options += "0123456789"
  }
  return bool
}

//checks if they want special characters
function specials() {
  var bool = confirm("I want to include Special Characters (!@#$%^&*()[]{}). Cancel if you don't") 
  if(bool==true){
    options += "!@#$%^&*()[]{}"
  }
  return bool
}

//checks to make sure at leas one of the prompts is true
function validChoices() {
  //retun true if at least one data types is true
  if (specials() || caps() || lowers()|| nums()){
    return true
  }
  else {
    alert("you need to choose at least one data type")
    promptUser()
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
