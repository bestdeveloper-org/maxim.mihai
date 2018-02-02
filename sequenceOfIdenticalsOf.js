


	var array = [1,2,2,2,2,2,3,3,3,3,3,3,3,];
	
	function sequenceOfIdenticalsOf(element) {
	  if(!element) return [];
	  if(element.length == 1) return element;
	  
	  var responseArray = [];
	  var max = 1;
	  
	  for(i = 0; i < element.length; i++) {
		if(element[i] === element[i-1]) {
		  max++;
		} else {
		  max = 1;
		}
		responseArray.push(max)
	  }
	  return responseArray;
	}
