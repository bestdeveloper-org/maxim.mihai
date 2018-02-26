

	function multipleOf(input) {
	  var numbers = [];
	  for (var i = 0; i < 100; i++) {
		numbers.push(i);
	  }
	  var output=[];
	  for (var j = 0; j < numbers.length; j++) {
		if (j % input === 0) {
		  output.push(j);
		} else {
		  output.push();
		}
	  }
	  return output;
	}
	
	// multipleOf(7) - [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]