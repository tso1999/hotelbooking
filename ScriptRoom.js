$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

function myFunction() {
  setTimeout(function(){ alert("A reservation has been made under your account."); }, 2500);
}