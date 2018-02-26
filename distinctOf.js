

	var numbers = [1, 2, 2, 2, 3, 3];

	function distinctOf(element) {
	  function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	  }
	  return element.filter(onlyUnique);
	}
	
	//	distinctOf(numbers): 1, 2, 3

	function otherDistinctOf(array) {
	  return [...new Set(array)]
	}
	
	//	otherDistinctOf(numbers): 1, 2, 3