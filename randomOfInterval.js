

	function randomOf(n, min, max) {
	  var responseArray = [];
	  
	  function intervalOf(min, max) {
		return Math.floor(Math.random() * (max-min) + min)
	  }
	  
	  for(i = 0; i < n; i++) {
		responseArray.push(intervalOf(min,max))
	  }
	  
	  return responseArray;
	}
	
	// randomOf(5, 5, 50): 28, 40, 24, 36, 34