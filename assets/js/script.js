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
//make len global so that promptUser and generatePassword can access
var len = 0

function generatePassword() {
  options = ""
  var pass = ""
  promptUser()
  // console.log(options)
  // console.log(len)
  for (let i = 0; i < len; i++) {
    var optLen = options.length
    var character = options[Math.floor(Math.random()*optLen)]
    // console.log(character)
    pass+= character
  }
  return pass
}


//bigger function to prompt user containing smaller modular functions
function promptUser(){
  howLong()
  var cap = caps()
  var low = lowers()
  var spe = specials()
  var num =nums()
  //checks that they chose at least one data type
  validateChoices(cap,low,spe,num)
}

function howLong() {
  //prompts user for length of password bewteen 8 and 128 chars
  len = prompt("How long would you like your password?", "Pleas input a number higher than 8, no more than 128")
  if (len.typeOf=Number && len>=8 && len<=128){
  // returns a Number 
    return len 
  }
  alert("Please read the prompt more carefully this time")
  howLong()
}

// checks if they want capital letters
function caps() {
  var bool = confirm("Click Okay to include Capital Letters (A,B,C...). \nClick Cancel to choose other character types")
  if(bool==true){
    options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  return bool
}

// checks if they want lowercase letters
function lowers() {
  var bool = confirm("Click Okay to include Lowercase Letters (x,y,z...). \nClick Cancel to choose other character types") 
  if(bool==true){
    options += "abcdefghijklmnopqrstuvwxyz"
  }
  return bool
}

//checks if they want numbers
function nums() {
  var bool = confirm("Click Okay to include numbers (1,2,3...). \nClick Cancel to choose other character types")
  if(bool==true){
    options += "0123456789"
  }
  return bool
}

//checks if they want special characters
function specials() {
  var bool = confirm("Click Okay to include Special Characters (!@#$%^&*()[]{}). \nClick Cancel to choose other character types") 
  if(bool==true){
    options += "!@#$%^&*()[]{}"
  }
  return bool
}

//checks to make sure at leas one of the prompts is true
function validateChoices(a,b,c,d) {
  //retun true if at least one data types is true
  if (a||b||c||d){
    return true
  }
  else {
    alert("ERROR: You must choose at least one character type. \nOkay to restart password generation")
    promptUser()
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
