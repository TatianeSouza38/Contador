var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
	currentNumber = currentNumber + 1;
    if (currentNumber <= 10 ){
	return currentNumberWrapper.innerHTML = currentNumber;
	}
	else{currentNumber = 10;}
}

function decrement(){
	currentNumber = currentNumber - 1;
	if (currentNumber <= 0 ){
		return currentNumberWrapper.innerHTML = 0;
	}	
	else {currentNumberWrapper.innerHTML = currentNumber;}
}

