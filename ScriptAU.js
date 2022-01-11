function appendNames() {
var firstname = document.forms["seasonform"]["name"].value;
var lastname = document.forms["seasonform"]["Email"].value;
var a = "Is this your information?"
confirm(a+" "+firstname+" "+lastname);
}

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }

}

var input = document.getElementById("myInput");
var text = document.getElementById("capstext");
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});
