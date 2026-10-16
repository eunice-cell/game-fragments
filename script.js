function registerUser(){


  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;


  let message = document.getElementById("message");

  if (username == "" || email =="" || phone == "" || password =="" || confirmPassword) 
  {
    message.textContent = "please fill in all your information.";
  }
  
  else if (!email.includes("@") || !email.includes("."))
  {
    message.textContent ="Please enter a valid email.";
  }
  else if (!/^[0-9] {9}$/ .test(phone)) {
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
  else 
  {
     message.textContent = "You have successfully registered.";
  }














}