var charactersLength = 8;
var choiceArr = [];

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  choiceArr = [];

  charactersLength = parseInt(prompt("Please enter number of character you want in your password from, min 8, max 128 characters"))
  if(isNaN(charactersLength) || charactersLength < 8 || charactersLength > 128) {
    alert("Password must be between 8-128 numbers long")
    return false;
  }

  if (confirm("Do you want Lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCasedCharacters)
  }
  if (confirm("Do you want Uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCasedCharacters)
  }
  if (confirm("Do you want Special letters?")) {
    choiceArr = choiceArr.concat(specialCharacters)
  }
  if (confirm("Do you want Numbers?")) {
    choiceArr = choiceArr.concat(numericCharacters)
  }

  return true;
  

};





// // Function for getting a random element from an array
// function getRandom(arr) {
// }

// Function to generate password with user input

function generatePassword() {
  var password = "";
  for (var i = 0; i < charactersLength; i++){
    var randomLetter = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomLetter];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  // This function will return true of false
  
  var correctOption = getPasswordOptions(); 
  var passwordText = document.querySelector('#password');

  if(correctOption) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
  passwordText.value = "";
}

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);