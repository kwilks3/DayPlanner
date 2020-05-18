// populate dynamic date using moment.js
// create dynamic styling by changing class for past, future, and present times
// on click of a save button take the input from the user and save it to local storage
// include prevent default to ensure that input is not erased

var now = moment().format("dddd, MMM Do, YYYY");
$("#today").text(now);
