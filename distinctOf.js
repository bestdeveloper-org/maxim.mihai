

	var array = [1, 2, 2, 2, 3, 3];

	function distinctOf(element) {
	  function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	  }
	  return element.filter(onlyUnique);
	}

	function otherDistinctOf(element) {
	  return [...new Set(element)]
	}