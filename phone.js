function start() {
// Get all the span elements in the key
var keys = document.getElementById("keys1");
var keyA = keys.getElementsByTagName("span");
/* Could also do this
var keys = document.querySelectorAll('#keys1 span');
*/
// Get the screen
var screen = document.getElementById("screen1");
var call = document.getElementById("call1");
var output = document.getElementById("output1");
screen.innerHTML = "";
//Set up an onclick event for each span key
for (i=0; i < keyA.length; i++){
	keyA[i].onclick = function(){
		var num = screen.innerHTML;
		// Check if asking us to delete
		if(this.innerHTML == "Delete"){
			//Delete a number
			// Check if there are dashes needed to be deleted as well
			if(num.length == 5){
				// Remove the dash as well
				screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length - 2);
			}
			else if(num.length == 10){
				// Remove the dash as well
				screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length - 3);
				screen.innerHTML += num[num.length-2];
			}
			else {
				screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length - 1);
			}
		}
		else {
			//Check if we need to add a dash
			/*
			One way to set dashes. Wont meet all the requirements though
			// Find where the last dash was
			var lastDash = num.lastIndexOf("-") + 1;
			//416-235
			//01234567
			if(lastDash == -1){
				lastDash = 0;
			}
			var check = num.length - lastDash;
			alert(check);
			if(check >= 3){
				screen.innerHTML += "-";
			}
			*/
			// Check the length of the string
			if(num.length == 3){
				// Add a dash
				screen.innerHTML += "-"
			}
			else if(num.length == 8){
				// Add a dash before the previously added number
				// Get the last number
				var last = num[num.length-1];
				// Remove the last number
				num = num.substr(0, num.length-1);
				// Add the dash
				num += "-";
				// Put back the last number
				num += last;
				// Update the screen
				screen.innerHTML = num;
			}
			else if(num.length == 12){
				// Remove all dashes on the screen
			}
			screen.innerHTML += this.innerHTML;
		}
	}
}
call.onclick = function() {
	var number = screen.innerHTML;
	output.innerHTML = "You called " + number;
}
}


