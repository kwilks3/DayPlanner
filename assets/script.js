// populate dynamic date using moment.js
// create dynamic styling by changing class for past, future, and present times
// on click of a save button take the input from the user and save it to local storage
// include prevent default to ensure that input is not erased

var now = moment().format("dddd, MMM Do, YYYY");
$("#currentDay").text(now);
var info = ["", "", "", "", "", "", "", "", "", ""];

$("button").on("click", function (event) {
  event.preventDefault();
  info[this.value] = document.getElementsByClassName("hour")[this.value].value;
  console.log(info);
  //   var data = document.getElementsByClassName("hour")[i].value;
  //   console.log(data);
});
