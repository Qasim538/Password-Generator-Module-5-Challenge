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

  
  if  (hasSpecial) {
    hasSpecial = possibleCharacters.concate(specialCharacters)
  }

  if  (hasNumeric) {
    hasNumeric = possibleCharacters.concate(numericCharacters)
  }

  if  (hasLowerCase) {
      hasLowerCase = possibleCharacters.concate(lowerCasedCharacters)
  }

  if  (hasUpperCase) {
      hasUpperCase = possibleCharacters.concate(upperCasedCharacters)
  }

};





// Function for getting a random element from an array
function getRandom(arr) {

  // Generate a random index between 0 and the length of the array
  const index = Math.floor(Math.random() * arr.length);

  // Return the random element from the array
  return arr[index];
  
}

// Function to generate password with user input
function generatePassword() {

  var numberOfCharacters = prompt("Please select a password length between 8-128.");

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {

    return "Please choose a valid number of characters.";

  } else if (isNaN(numberOfCharacters)) {

    numberOfCharacters = prompt("Please enter a valid number.");
  }

  else {

    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  hasSpecial = confirm ("Do you want special case?")

  hasNumeric = confirm ("Do you want numbers?")

  hasLowerCase = confirm ("Do you want lower case?")

  hasUpperCase = confirm ("Do you want upper case?")


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);