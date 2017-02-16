function formIn(){
	var x = document.forms["nameForm"]["query"].value;
	if(x == ""){
		alert("Name must be filled out.");
		return false;
	}
	if(!isNaN(x)){
		alert("Please enter a valid string.");
		return false;
	}
}