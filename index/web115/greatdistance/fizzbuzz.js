
/* SWTL JS (Great Distance) */

function greetUser() {
  var firstName = document.getElementById("firstName").value; 
  var midIn = document.getElementById("midIn").value; 
  var lastName = document.getElementById("lastName").value;
  alert("Greetings, " + firstName + " " + midIn + ". " + lastName + ".");
  
  var joinUs = document.getElementById("joinUs").innerHTMl;
  joinUs.textContent = "Welcome to the Great Distance Family, " + firstName + "!";
}
