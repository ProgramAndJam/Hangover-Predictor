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
	
});
