$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

function myFunction2() {
  setTimeout(function(){ alert("A new account has been made. Welcome to Elite Maple Hotel."); }, 2500);
}

function myInquiry() {
  setTimeout(function(){ alert("Your inquiry has been sent, please wait 24 hours for a response "); }, 2500);
}
