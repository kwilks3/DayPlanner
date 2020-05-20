// populate dynamic date using moment.js
// create dynamic styling by changing class for past, future, and present times
// on click of a save button take the input from the user and save it to local storage
// include prevent default to ensure that input is not erased

var now = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(now);
loadInfo();
var saved = [];
var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
$("button").on("click", function (event) {
  var info = JSON.parse(localStorage.getItem("todoItems")) || [];
  info[this.value] = document.getElementsByClassName("hour")[this.value].value;
  //   var data = document.getElementsByClassName("hour")[i].value;
  //   console.log(data);
  localStorage.setItem("todoItems", JSON.stringify(info));
  loadInfo();
});

function loadInfo() {
  saved = JSON.parse(localStorage.getItem("todoItems"));

  for (var i = 0; i < saved.length; i++) {
    document.getElementById(times[i]).value = saved[i];
  }
}
