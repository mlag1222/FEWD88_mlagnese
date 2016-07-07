var age;
var max_age;
var item;
var num_per_day;

document.getElementById('click_me').onclick = calculate;

function calculate() {
	age = parseInt(document.getElementById('age').value);
	max_age = parseInt(document.getElementById('max_age').value);
	item = document.getElementById('item').value;
	num_per_day = parseInt(document.getElementById('num_per_day').value);

	var total_drinks = (max_age - age) * 365 * num_per_day;

	document.getElementById('solution').innerHTML = total_drinks;
	document.getElementById('drink').innerHTML = item;
}