

	var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
	var fewerNumbers = [1, 4, 5, 10, 9, 6];

	//	arrays don't need to be sorted
	
	function intersectionOf(array1, array2) {
	  return array1.filter((n) => array2.includes(n))
	};
	
	//	intersectionOf(numbers, fewerNumbers): 4, 5, 6, 9
	
	var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
	var fewerNumbers = [1, 4, 5, 10, 9, 6];
	
	//	arrays need to be sorted first

	function intersectionOf(bigArray, smallArray) {
	  var blankArray = [];

	  while (bigArray.length > smallArray.length > 0) {
		if (bigArray[0] < smallArray[0]) {
		  bigArray.shift();
		} else if (bigArray[0] > smallArray[0]) {
		  smallArray.shift();
		} else {
		  blankArray.push(bigArray.shift());
		}
	  }
	  return blankArray;
	};
	
	//	intersectionOf(numbers, fewerNumbers): 4, 5, 6, 9