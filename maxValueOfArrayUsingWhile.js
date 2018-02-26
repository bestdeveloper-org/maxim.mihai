		
		var numbers = []
		for (i = 0; i < 25; i++) {
			numbers.push(Math.floor(Math.random() * 100))
			numbers.sort(function(a,b){return a- b})
		}
		var numeros = [...new Set(numbers)]

		function max(array) {
			while (array[0] !== Math.max.apply(null, array)) {
			array.shift() 
			}
			return array
		}