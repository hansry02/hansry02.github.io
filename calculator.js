addition = function() {
	aNum = document.querySelector('#numberOne');
  	otherNum = document.querySelector('#numberTwo');
  	answer = document.querySelector('#answer');
  	  
  	valueOne = Number.parseFloat(aNum.value);
  	valueTwo = Number.parseFloat(otherNum.value);
  	  
  	if (isNaN(valueOne) || isNaN(valueTwo)){
  	  
  		answer.innerHTML = "<h2>Error</h2>";
    }
  	  
	else {
  	  
  		valueAnswer = valueOne + valueTwo;
  
  	  	answer.innerHTML = "<h2>" + valueAnswer + "</h2>";
  	}
}
  	
subtraction = function() {
	aNum = document.querySelector('#numberOne');
  	otherNum = document.querySelector('#numberTwo');
  	answer = document.querySelector('#answer');
  	  
  	valueOne = Number.parseFloat(aNum.value);
  	valueTwo = Number.parseFloat(otherNum.value);
  	  
  	if (isNaN(valueOne) || isNaN(valueTwo)){
  	  
  		answer.innerHTML = "<h2>Error</h2>";
  	}
  	  
  	else {
  	  
  		valueAnswer = valueOne - valueTwo;
  
  	  	answer.innerHTML = "<h2>" + valueAnswer + "</h2>";
  	}
}
  	
multiplication = function() {
	aNum = document.querySelector('#numberOne');
  	otherNum = document.querySelector('#numberTwo');
  	answer = document.querySelector('#answer');
  	  
  	valueOne = Number.parseFloat(aNum.value);
  	valueTwo = Number.parseFloat(otherNum.value);
  	  
  	if (isNaN(valueOne) || isNaN(valueTwo)){
  	  
  		answer.innerHTML = "<h2>Error</h2>";
  	}
  	  
  	else {
  	  
  		valueAnswer = valueOne * valueTwo;
  
  	  	answer.innerHTML = "<h2>" + valueAnswer + "</h2>";
  	}
}
  	
division = function() {
	aNum = document.querySelector('#numberOne');
  	otherNum = document.querySelector('#numberTwo');
  	answer = document.querySelector('#answer');
  	  
  	valueOne = Number.parseFloat(aNum.value);
  	valueTwo = Number.parseFloat(otherNum.value);
  	  
  	if (isNaN(valueOne) || isNaN(valueTwo)){
  	  
  		answer.innerHTML = "<h2>Error</h2>";
  	}
  	  
  	else {
  	  
  	  	valueAnswer = valueOne / valueTwo;
  
  	  	answer.innerHTML = "<h2>" + valueAnswer + "</h2>";
  	}
}
  	
square = function() {
	aNum = document.querySelector('#numberOne');
  	answer = document.querySelector('#answer');
  	  
  	valueOne = Number.parseFloat(aNum.value);
  	  
  	if (isNaN(valueOne)){
  	  
  	  	answer.innerHTML = "<h2>Error</h2>";
  	}
  	  
  	else {
  	  
  	  	valueAnswer = valueOne * valueOne;
  
  	  	answer.innerHTML = "<h2>" + valueAnswer + "</h2>";
  	}
}

power = function() {
	aNum = document.querySelector('#numberOne');
  	otherNum = document.querySelector('#numberTwo');
  	answer = document.querySelector('#answer');
  	  
  	valueOne = Number.parseFloat(aNum.value);
  	valueTwo = Number.parseFloat(otherNum.value);
  	  
  	if (isNaN(valueTwo)) {
  	    valueAnswer = "Error";
  	}
  	  
  	else {
  	  
  	  	tempPower = Math.abs(valueTwo);
  	    valueAnswer = 1;
  	    for (i = 0; i < tempPower; i++) {
  	  	  valueAnswer = valueAnswer * valueOne;
  	    }
  	    
  	    if (valueTwo != tempPower) {
  	      valueAnswer = 1 / valueAnswer;
  	    }
  	    
  	    else {}
  	}
  	  
  	answer.innerHTML = "<h2>" + valueAnswer + "</h2>";
}
  	
squareRoot = function() {
	aNum = document.querySelector('#numberOne');
  	answer = document.querySelector('#answer');
  	  
  	valueOne = Number.parseFloat(aNum.value);
  	  
  	if (isNaN(valueOne)){
  	  
  	  	answer.innerHTML = "<h2>Error</h2>";
  	}
  	  
  	else {
  	  
  	  	valueAnswer = Math.sqrt(valueOne);
  
  	  	answer.innerHTML = "<h2>" + valueAnswer + "</h2>";
  	}
}
