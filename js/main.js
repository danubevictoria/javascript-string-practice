// http://codifyacademy.com/wk13/

// 3
var strArray = ['Danube', 'Victoria', 'Phan'];
var newArray = [];

// 4
for (var i = 0; i < strArray.length; i++) {
	newArray[i] = strArray[i].toLowerCase();
}

// 5
for (var i = 0; i < strArray.length; i++) {
	console.log(strArray[i].charAt(0) + ' ' + strArray[i].charAt(strArray[i].length - 1));
}

// 6
var name = 'Danube Victoria Phan';

var nameArray = name.split("");
console.log(nameArray);

for (var i = 0; i < nameArray.length; i++) {
	console.log(nameArray[i]);
}

// 7
var joined = nameArray.join("");
// joined = joined.replace('a', ' ');
console.log(joined.replace(/a/g, ' '));

// 8
var div = document.createElement('div');
var input = document.createElement('input');
input.id = 'input';
var button = document.createElement('button');
var button_text = document.createTextNode('Validate');
button.appendChild(button_text);
button.id = 'button';

div.appendChild(input);
div.appendChild(button);

document.getElementById('body').appendChild(div);

// 9
function validateEmail() {
	var user_input = document.getElementById('input').value;
	var regex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	console.log(regex.test(user_input));
}

// validateEmail(document.getElementById(input));

// 10
document.getElementById('button').addEventListener('click', validateEmail, false);