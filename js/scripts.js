//business logic
var checkNumber = function(number) {
    if (number % 15 === 0){
      return "pingpong";
  } else if  (number % 5 === 0){
      return "pong";
  } else if (number % 3 === 0){
      return "ping";
  } else {
      return number;
  }
};
//operations
$(document).ready(function() {
  $("form#Pingpong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    for (var i = 1; i <= number; i++) {
    var result = checkNumber(i);
    console.log(number);
    $(".number").append("<li>" + result + "</li>");
    }
    $("#result").show();
  });
});
