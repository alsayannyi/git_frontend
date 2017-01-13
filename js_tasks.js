var login = prompt ('Sign in with your login');
if (login == "Админ") {
	var password = prompt("enter your password");
	if ( password == "Чёрный Властелин") {
		alert("Welcome Home");
	} else if (password == null) {
		alert("login is canceled");
	} else {
		alert("The password is incorrect!\r\nTry again or I can already call a police!");
	}
}
else if (login == null) {
	alert("login is canceled");
} else {
	alert("Get off or I will call the police!");
}


 var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

document.write(salaries.100);

for (var prop in salaries) {
	console.log(salaries.keys())
	sum(prop);
	console.log("gross sallary is" + sum);
} 
		

var arr = [1, 2, 3];
var newArr = arr.map(function(x) {
	return x * x;
});
console.log(newArr);



 var x = prompt ("x?", " x > 0");
 var y = prompt ("y?"," y > 0");
simpleNumbers:
 for ( var i = x; i <= y; i++) {
 	for (var d = 2; d < i; d++ ) {
 		var delta = i % d;
 		if (delta == 0) continue simpleNumbers;
 }
 	// alert(i);
 	console.log(i);
}
