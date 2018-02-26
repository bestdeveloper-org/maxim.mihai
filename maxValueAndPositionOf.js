

	var numbers = [1, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7]

	function maxValueAndPositionOf(array) {
			var max = Math.max.apply(null, array);
			var blankArray = [];
			var position = 0;
			
			while(position != -1) {
				position = array.indexOf(max, position);			
				if(position >= 0) {
					blankArray.push(max, position);
					position++;
				}
			}
			return blankArray;
		}
		
	//	maxValueAndPositionOf(numbers): 7, 12
	
	