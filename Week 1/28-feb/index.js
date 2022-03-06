//creating an function
function fizzBuzz(){
	var num = prompt("Enter any number");
	num1 = parseInt(num);
	if (isNaN(num1)) {
		alert("Please enter valid number");
	}else{
		for(var i=1; i<=num1; i++){
				if (i % 3 == 0 && i % 5==0) {
					document.write("FizzBuzz <br>");
				}
				else if (i % 5 == 0) {
					document.write("Buzz <br>");
				}
				else if (i % 3 == 0) {
					document.write("fizz <br>");
				}
				else{
				document.write(i+"<br>");
			}
			
		}
	}
	
}