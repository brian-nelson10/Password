
//click generate password
var generateEl = document.querySelector('#generate');
generateEl.addEventListener('click', function() {
  setPassword();
});

var passwordEl = document.getElementById("#password");


//set password prompts
function setPassword() {
  var length = Number(prompt("Choose how many characters, between 8 and 128."));
    window.confirm('You choose ' + length + '.')

var charType = prompt("Choose a character type: lowercase, uppercase, numeric, special.");
    window.confirm('You choose ' + charType + '.')


//generate random password function
function generatePassword() {
  //determine character type
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
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
window.confirm(generatePassword());
document.getElementById('password').innerHTML=(generatePassword());


}

