
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
  var charSet = "";
  var charTypeSet = charType.toLowerCase();
    if( charTypeSet === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";

  } else if( charTypeSet === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  } else if( charTypeSet === "numeric" ) {
    charSet = "0123456789";

  } else if( charTypeSet === "special" ) {
    charSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 

  //randomize values
  var random = "";
    for (var i = 0; i < length; i++) {
    random += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
    return random;
}
//random password
window.confirm(generatePassword());
document.getElementById('password').innerHTML=(generatePassword());


}

