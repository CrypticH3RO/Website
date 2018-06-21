test.onclick = function(){
	screen = document.querySelector("number");
	screen.innerHTML = this.innerHTML;
}
function myFunction() {
	screen = document.querySelector("number");
	value = document.querySelector("test")
	screen.innerHTML = value.innerHTML;
	alert("Hi");
}