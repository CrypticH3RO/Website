/*
test.onclick = function(){
	screen = document.querySelector("number");
	screen.innerHTML = this.innerHTML;
	alert("Hi");
}
*/
function myFunction2() {
	/*
	screen = document.querySelector("number");
	value = document.querySelector("test");
	screen.innerHTML = value.innerHTML;
	*/
	alert("Hi");
}
function start() {
// Get all the span elements in the key
var keys = document.getElementById("keys1");
var keyA = keys.getElementsByTagName("span");
/* Could also do this
var keys = document.querySelectorAll('#keys1 span');
*/
// Get the screen
screen = document.getElementById("screen1");
//Set up an onclick event for each span key
for (i=0; i < keyA.length; i++){
	keyA[i].onclick = function(){
		// Check if asking us to delete
		if(this.innerHTML == "Delete"){
			//Delete a number
			screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length - 1);
		}
		else {
			screen.innerHTML += this.innerHTML;
		}
	}
}
}


