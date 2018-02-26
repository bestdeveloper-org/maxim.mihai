

	function pentagonalEcuationCase(input) {
		var output = (5 * Math.pow(input, 2) + 5 * input + 2) / 2
		return output
	}

	function secondPentagonalEcuationCase(input) {
		var x = input - 1
		var output = 1 + 5 * (x * (x + 1) / 2)
		return output
	}
	
	function pentagonalLoopCase(input) {
		var output = 0
		for (var i = 0; i < 99; i++) {
			if (input === 0) {
				output = 1
			} else {
				output = pentagonalLoopCase(input - 1) + 5 * input
			}
		}
		return output
	}

	// console.log(pentagonalEcuationCase(Math.pow(10, 6)))
	// console.log(pentagonalLoopCase(25))
	document.write(secondPentagonalEcuationCase(5))