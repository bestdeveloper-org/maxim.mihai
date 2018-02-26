

	var numbers = [10, 17, 26, 29];

	function minimumOf(array) {
	  return Math.min.apply(null, array)
	}
	
	// minimumOf(numbers): 10

	function maximumOf(array) {
	  return Math.max.apply(null, array)
	}
	
	// maximumOf(numbers): 29