//business logic
var checkNumber = function(number) {
    if (number % 3 === 0){
      return "ping";
  } else if  (number % 5 === 0){
      return "pong"
  } else if (number % 15 === 0){
      return "pingpong"
  } else {
      return false;
  }
};
//operations
$(document).ready(function() {
  $("form#Pingpong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = checkNumber(number);
    {
      $(".number").text(number);
    }


    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
