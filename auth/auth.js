function signup() {
  
  console.log("callling !!");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (!email || !password || !confirmPassword) {
    console.error("please fill all the fields");
    swal("Error !", "Please fill all the fields!", "error");
    return;
  }
  if (password.length < 6) {
    console.error("Password should be equal or greater than 6", "error");
    swal("Error !", "Password should be equal or greater than 6", "error");
    return;
  }
  if (password !== confirmPassword) {
    console.error("confirm password does not match");
    swal("Error !", "confirm password does not match", "error");
    return;
  }

var userData = JSON.parse(localStorage.getItem("users"));
var currentUser = {
  email,
  password,
}
console.log(currentUser);

if (!userData) {
  userData = [currentUser];
  
} else {
  userData.push(currentUser);
  
}
localStorage.setItem("users", JSON.stringify(userData));
alert("succesfully Signup")



      // Redirect to the signin page
      window.location.href = "login.html";


    

};

function login(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  //get previous record of user
  var usersData = JSON.parse(localStorage.getItem("users"))

if (!usersData && !usersData.length){}


var userFound = usersData.find(function(userData){
  return userData.email == email
  
})
if(!userFound){
  swal("Error !", "email is incorrect", "error");
    return;
  
} 
// else {
//   if (userFound.password!= password){
//   swal("Error !", "Password is incorrect", "error");
//   return; 
// } 
else {
  // swal("Good job!", "You clicked the button!", "success");

  alert("succesfully Login")
  window.location.href = "dashedboard.html";
  return;
  
}}
