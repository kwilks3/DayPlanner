// populate dynamic date using moment.js
// create dynamic styling by changing class for past, future, and present times
// on click of a save button take the input from the user and save it to local storage
// include prevent default to ensure that input is not erased
var textBlock = document.getElementsByClassName("hour");
var labeling = document.getElementsByTagName("label");
var now = moment().format("dddd, MMM Do, YYYY");

$("#currentDay").text(now);
loadInfo();
nowOrLater();
$("button").on("click", function (event) {
  var info = JSON.parse(localStorage.getItem("todoItems")) || [];
  info[this.value] = textBlock[this.value].value;
  //   var data = document.getElementsByClassName("hour")[i].value;
  //   console.log(data);
  localStorage.setItem("todoItems", JSON.stringify(info));
  loadInfo();
});

function loadInfo() {
  var saved = JSON.parse(localStorage.getItem("todoItems")) || [];
  var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

  for (var i = 0; i < saved.length; i++) {
    document.getElementById(times[i]).value = saved[i];
  }
}
function nowOrLater() {
  var currentHour = parseInt(moment().format("H"));
  for (var i = 0; i < labeling.length; i++) {
    var block = parseInt(labeling[i].htmlFor);

    //if this hour < current hour set attribute class to past
    if (block < currentHour) {
      $(textBlock[i]).addClass("past");
    }
    //if current hour =  hour set attribute class to present
    if (block === currentHour) {
      $(textBlock[i]).addClass("present");
    }
    //else  set attribute class to future
    if (block > currentHour) {
      $(textBlock[i]).addClass("future");
    }
  }
}
