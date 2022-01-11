$(document).ready(function(){
  $("#p").click(function(){
    alert("A free code for spa: 758477");
  });
});

$(document).ready(function(){
  $("#p").mouseenter(function(){
    $("#p").css("background-color", "darkgray");
  });
  $("p").mouseleave(function(){
    $("#p").css("background-color", "black");
  });
});