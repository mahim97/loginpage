function takein() {
	var user = document.getElementById("user");
	var pass = document.getElementById("pass");
	alert("Password is "+pass.value);
	document.getElementById("out").innerHTML = "Username: "+user.value+"<br>Password: "+pass.value;

}