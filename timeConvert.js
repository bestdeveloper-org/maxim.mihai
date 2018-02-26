

	var value = 125;

	function timeConvert(input) {
	  var minute = 1;
	  var hour = 60;
	  var response = (input - input % hour) / hour + ":" + input % hour;

	  if (input < hour) {
		return "0:" + minute * input;
	  } else if (input === hour) {
		return hour / 60 + ":00";
	  } else if (input > hour) {
		return response;
	  }
	}