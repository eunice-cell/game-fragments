// this function registers a new user after validating their details 

function registerUser(){

  // Get the values entered in the registartion form by the user
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

 
  let message = document.getElementById("message");
  
  if (username == "" || email == "" || phone == "" || password == "" || confirmPassword == "") 
  {
    message.textContent = "please fill in all your information.";
  }
  
  else if (!email.includes("@") || !email.includes("."))
  {
    message.textContent ="Please enter a valid email.";
  }
  else if (!/^[0-9]{9}$/ .test(phone)) 
  {
    message.textContent = "phone number must contain exactly 9 digits.";
  }
  else if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password))
  {  
    message.textContent = "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.";
  }
  else if (password != confirmPassword)
  {
    message.textContent = "Passwords do not match.";
  }
  // prevents registering a user with an email that already exists in localStorage
  else if (localStorage[email] !== undefined)
  {
    message.textContent = "Email already exists. Please use a different email.";
  }
  else 
  {
    // creates an object to store the user's information 
    let userObject = {};
    userObject.username = username;
    userObject.email = email;
    userObject.phone = phone;
    userObject.password = password;

    // stringify the object to save it in the browser's local storage, display the success message then redirect to login page 
    
    localStorage[email] = JSON.stringify(userObject);

    message.innerHTML = "<b>Registration successful!</b>";

    window.location.href = "login.html";
   }


}

function resetPassword() {
  let email = document.getElementById("resetEmail").value;
  let message = document.getElementById("resetMessage");

  if (email == "") {
    message.textContent = "Please enter your email.";
  }
   else if (!email.includes("@") || !email.includes(".")) {
      message.textContent = "Please enter a valid email.";
    }
    
   else {
      message.textContent = "A password reset link has been sent to your email.";
    }
}

// checks the login details entered by the user and compares them with the data stored in localStorage
function loginUser() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let message = document.getElementById("loginMessage");
  if (email == "" || password == "") {
    message.textContent = "Please enter your email and password.";
  }
  // checks if the email exists in localStorage, if it does not exist, display an error message
  else if (localStorage[email] === undefined) {
    message.textContent = "Email not found. Please register first.";
  }
  else {
    // transforms the string back in the object to compare the password entered by the user with the password stored in localStorage.
    let userObject = JSON.parse(localStorage[email]);
    // compares the 2 passwords using === so that the data type is also checked. 
    if (password === userObject.password) {
      document.getElementById("loginParam").innerHTML = "<h2>Welcome, " + userObject.username + "!</h2>";
      
      message.innerHTML = "<b>Login successful!</b>";

      window.location.href = "game.html";
    }
    else { 
      message.innerHTML = "Incorrect password. Please try again.";
    }
  }
}
