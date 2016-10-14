$("#result0, #result1, #result2, #result3, #result4").hide()

$(document).ready(function() {
  $("#result0, #result1, #result2, #result3, #result4").hide()
});

function getData() {
  $("#result0, #result1, #result2, #result3, #result4").fadeOut("slow")
  var searchTerm = document.getElementById("data").value.replace(" ", "%20");
  console.log(searchTerm);
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + searchTerm + "&callback=?", function(data) {
    if (data[1][0] === undefined) {
      $("#result0").html("Sorry, your search returned no relevant results.").fadeIn("slow");
    } else {
      console.log(data[3][0]);
      $("#result0").html(data[1][0] + ": " + data[2][0]).fadeIn("slow").attr("href", data[3][0]);
      if (data[1][1] === undefined) {
        $("#result1").hide()
      } else {
        $("#result1").html(data[1][1] + ": " + data[2][1]).fadeIn("slow").attr("href", data[3][1]);
      }
      if (data[1][2] === undefined) {
        $("#result2").hide()
      } else {
        $("#result2").html(data[1][2] + ": " + data[2][2]).fadeIn("slow").attr("href", data[3][2]);
      }
      if (data[1][3] === undefined) {
        $("#result3").hide()
      } else {
        $("#result3").html(data[1][3] + ": " + data[2][3]).fadeIn("slow").attr("href", data[3][3]);
      }
      if (data[1][4] === undefined) {
        $("#result4").hide()
      } else {
        $("#result4").html(data[1][4] + ": " + data[2][4]).fadeIn("slow");
      }
      $("#link0").attr("href", data[3][0]);
      $("#link1").attr("href", data[3][1]);
      $("#link2").attr("href", data[3][2]);
      $("#link3").attr("href", data[3][3]);
      $("#link4").attr("href", data[3][4]);
    }
  })
}

// Wikipedia API link https://www.mediawiki.org/wiki/API:Main_page

// 

//Things to do in the future: Make sure enter works to search

// 2. Get the slideDown effect working.