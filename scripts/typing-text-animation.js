var words = ['Robots Are\n The Future '],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

var hasRun = false; // Flag to track if the script is already running

var wordflick = function () {
  if (!hasRun) {
    hasRun = true;

    var intervalId = setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      $('.word').text(part);

      if (i === len - 1 && offset === words[i].length) {
        clearInterval(intervalId);
        hasRun = false;
      }
    }, speed);
  }
};

$(document).ready(function () {
  wordflick();
});
