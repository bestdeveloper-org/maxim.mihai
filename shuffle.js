

	var numbers = [];

	for (i = 1; i <= 10; i++) {
	  numbers.push(i)
	}

	function shuffle(array) {
	  function algo() {
		return 0.5 - Math.random()
	  }
	  return array.sort(algo)
	}
	
	// shuffle(numbers): 2, 5, 6, 3, 7, 1, 4, 10, 9, 8