$(document).ready(function(){ 
	var numCigs = 0
	var numDrinks = 0
	var numWaters = 0	

	$('#cigs').click(function(){
		numCigs = numCigs+1
		$('#cigsUsed').html( numCigs + " cig(s)")
	});

	$('#drinks').click(function(){
		numDrinks = numDrinks+1
		$('#drinksUsed').html( numDrinks + " drink(s)")
	});

	$('#waters').click(function(){
		numWaters = numWaters+1
		$('#watersUsed').html( numWaters + " water(s)")
	});

// for the fat fingers
	$('#lesscigs').click(function(){
		numCigs = numCigs-1
		$('#cigsUsed').html( numCigs + " cig(s)")
	});

	$('#lessdrinks').click(function(){
		numDrinks = numDrinks-1
		$('#drinksUsed').html( numDrinks + " drink(s)")
	});

	$('#lesswaters').click(function(){
		numWaters = numWaters-1
		$('#watersUsed').html( numWaters + " water(s)")
	});



// Current Feeling Algo

	function shittybar(){
		var val = 
	}

	function shittiness( cigs, drinks, waters){
		var val = cigs + drinks - saters;
		return val;

	}

});
