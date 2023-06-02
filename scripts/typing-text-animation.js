var letters = ['robots are\nthe future'],
    part,
    i = 0,
    offset = 0,
    speed = 100;

var isRunning = false; // Flag to track if the script is already running

var wordflick = function () {
  if (!isRunning) {
    isRunning = true;

    var intervalId = setInterval(function () {

      part = letters[i].substr(0, offset);
        offset++;
      $('.word').text(part);
    }, speed);
  }
};

$(document).ready(function () {
  wordflick();
});
