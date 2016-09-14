// UI JS

$("#newResultButton").click(function() {
    $("#rankingView").hide("slow");
    $("#newResultView").show("slow");
});

$("#cancelButton").click(function() {
    $("#rankingView").show("slow");
    $("#newResultView").hide("slow");
});

$(document).ready(function() {
  $.getJSON('/data/players.json', function (data) {
    $.each(data, function(i, player){
      $("#rankingTable").append("<tr><td>" + i + "</td><td>" + player.name + "</td><td>" + player.grip + "</td><td>" + player.rating + "</td></tr>");
    });
  });
});
