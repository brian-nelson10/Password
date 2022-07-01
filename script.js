
//click generate password
var generateEl = document.querySelector('#generate');
generateEl.addEventListener('click', function() {
  setPassword();
});

var passwordEl = document.querySelector("#password");


function setPassword() {
  var length = Number(prompt("Choose how many characters, between 8 and 128."));
    window.confirm('You choose ' + length + '.')

var charType = prompt("Choose a character type: lowercase, uppercase, numeric, special.");
    window.confirm('You choose ' + charType + '.')
//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  var charTypeSet = charType.toLowerCase();
  if( charTypeSet === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeSet === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeSet === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeSet === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
window.alert(generatePassword());

}

function writePassword() {
  passwordEl.textContent = retVal;
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
