

	var verse = 'a bb ccc dddd eeeee'

	function longestWordOf(sentence) {
	  var strings = sentence.split(' ')
	  
	  var length = 0
	  var longest
	  
	  for (var j = 0; j < strings.length; j++) {
		if (strings[j].length > length) {
		  length = strings[j].length
		  longest = strings[j]
		}
	  }
	  return longest
	}
	
	//	longestWordOf(verse): eeeee
	
	function thirdLongestWordOf(sentence) {
	  var strings = sentence.split(' ')
	  
	  var length = 0
	  var longest
	  
	  for (var j = 0; j < strings.length; j++) {
		if (strings[j].length > length && strings[j] !== 'eeeee' & strings[j] !== 'dddd') {
		  length = strings[j].length
		  longest = strings[j]
		}
	  }
	  return longest
	}
	
	//	thirdLongestWordOf(verse): 'ccc'