
$(document).ready(function(){


  $("form#choices").submit(function(event) {
    var userChoice = parseInt($("#animalChoice").val());
    event.preventDefault();
    $(".hidden").hide();

    if (userChoice === 1){
      $("#turtles").show();
    }
    else if
    (userChoice === 2){
      $("#snakes").show();

    }
    else
      $("#insects").show();
    });
  });
