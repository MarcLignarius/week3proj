// Business logic

function count(userNumber) {
  var userName = $("input#userName").val();
  var userNumber = parseInt($("input#userNumber").val());
  var result = [];
  for (var i = 0; i <= userNumber; i++) {
    if (i.toString().includes("3")) {
      result.push(" I'm sorry " + (userName || "Dave") + ", I'm afraid I can't do that");
    }
    else if (i.toString().includes ("2")) {
      result.push(" Boop!");
    }
    else if (i.toString().includes("1")) {
      result.push(" Beep!");
    }
    else result.push(" " + i);
  }
  return result;
};

// User Interface Logic

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var output = count(userNumber);
    $("#output").text(output);
    $("#initiallyHidden").show();
    $("#initiallyShowing").hide();
  });
});
