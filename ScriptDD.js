function appendNames() {
var a = "Floor"
var floor = document.forms["foodform"]["roomflr"].value;
var b = "Room"
var room = document.forms["foodform"]["roomnmbr"].value;
var c = "Special Instructions:"
var special = document.forms["foodform"]["special"].value;
confirm(a+" "+floor+" "+b+" "+room+" "+c+" "+special);
}