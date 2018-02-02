

	function getPrimes(value) {
	  var array = [];
	  var i, j;
	  var primes = [];
	  
	  for(i = 2; i <= value; i++) {
		if(!array[i]) {
		  primes.push(i);
		  for(j = i << 1; j <= value; j += i) {
			array[j] = true;
		  }
		}
	  }
	  return primes;
	}
	
	console.log(getPrimes(10)) // result: 2, 3, 5, 7

