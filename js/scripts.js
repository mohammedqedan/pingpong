//business logic
var checkNumber = function(number) {
  debugger;
    if (number % 15 === 0){
      return "pingpong";
  } else if  (number % 5 === 0){
      return "pong";
  } else if (number % 3 === 0){
      return "ping";
  } else {
      return false;
  }
};
//operations
$(document).ready(function() {
  $("form#Pingpong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var pValue = checkNumber(number);
    {
      $(".number").text(number);
      $(".pValue").text(pValue);
    }


    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
