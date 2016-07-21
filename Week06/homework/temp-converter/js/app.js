
// // Class 11 - Temperature Converter

// // === GOALS ===
// // 1) Build a web app that converts fahrenheit to celsius, and vice versa.
// // 2) Implement if/else if/else statements 
// that perform some sort of 
// UI-change based on the user's input. 
// For example, considering changing the 
// background to blue for colder temps 
// // and red for higher temps.

// // // // === CONSIDERATIONS ===
// // // // 1) How will your users input the temperature? 
// // 		What sort of element should you use to capture this input?
// // // 2) What user action (browser event) 
// 		will cause the conversion to happen? 
// 		So far, we've seen .click() events - 
// 		consider exploring key-based events: 
// 		.keypress() or .keyup() or .keydown()

// // === HINTS ===
// // - You will have to use parseInt() or parseFloat() to convert the user's input from a string to a number
// // - Formulas:
// // 	Fahrenheit = Celsius * 1.8 + 32
// // 	Celsis = (Fahrenheit - 32) / 1.8


var rawTemp = "0";
var rawUnit = "F";
var convertedTemp = "0";
var convertedUnit = "C";

$('#submit').click(function(e){
	rawTemp = parseInt($('#temp').val());
	rawUnit = $("input[type='radio']:checked").val();

	console.log(
		'rawTemp: ' + rawTemp + '\n' + 
		'rawUnit: ' + rawUnit + '\n' + 
		'convertedTemp: ' + convertedTemp + '\n' +
		'convertedUnit: ' + convertedUnit
	);

	if(rawUnit === 'F'){
		convertedUnit = 'C';
		convertedTemp = (rawTemp - 32) / 1.8;
		$('#output').html(convertedTemp.toPrecision(3) + String.fromCharCode(176) + convertedUnit);
	}else if(rawUnit === 'C'){
		convertedUnit = 'F';
		convertedTemp = (rawTemp * 1.8) + 32;
		$('#output').text(convertedTemp.toPrecision(3) + String.fromCharCode(176) + convertedUnit);
	}
	e.preventDefault();
});

// 	$('#convert').click(function(){
// 	fahrenheit = parseInt($('.fahrenheit').val()) - 32 / 1.8
// 		console.log(fahrenheit)


// 	});

// });

// if ( 'fahrenheit <== 32' ) {
// 	$('body').css('background-color', 'blue')
// } else if ( 'temp >== 58'){
// 	$('fahrenheit').css('background-color', 'red')
// } else {}
 
//  });
