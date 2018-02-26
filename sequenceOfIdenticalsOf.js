


	var numbers = [1,2,2,2,2,2,3,3,3,3,3,3,3,];
	
	function sequenceOfIdenticalsOf(array) {
	  if(!array) return [];
	  if(array.length == 1) return array;
	  
	  var blankArray = [];
	  var max = 1;
	  
	  for(i = 0; i < array.length; i++) {
		if(array[i] === array[i - 1]) {
		  max++;
		} else {
		  max = 1;
		}
		blankArray.push(max)
	  }
	  return blankArray;
	}
	
	// sequenceOfIdenticalsOf(numbers): 1, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7
