

	function loto() {
	  var urna = [];  
	  for(var j = 0; j < 6; j++) {
		var norocu = Math.floor(Math.random() * 49 + 1)
		urna.push(norocu)
	  }  
	  return urna;
	}
	
	// loto(): 2, 3, 5, 8, 12, 29, 
