

	function passArray(start, pass, n) {
	  var output = [];
	  var i = start;
	  do {
		output.push(i)
		i = i + pass;
	  } while (output.length < n);  
	  return output;
	}

	console.log(passArray(3, 5, 4));
	
	function secondPass(start, pass, n) {
		var output = []
		for (var i = 0; i < pass * n; i++) {
			if (i % pass === start) {
				output.push(i)
			} else {
				output.push()
			}
		}
		return output
	}