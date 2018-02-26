

	var value = 1995;

	function kaprekarsConstant(number) {
	  var input, one, two, result, counter;
	  for (var j = 1; result !== 6174; j++) {
		if (j === 1) {
		  input = number;
		} else {
		  input = result;
		}
		one = input
		  .toString()
		  .split("")
		  .sort()
		  .reverse()
		  .join("");
		two = input
		  .toString()
		  .split("")
		  .sort()
		  .join("");
		var result = one - two;
		counter = j;
	  }
	  return counter;
	}
