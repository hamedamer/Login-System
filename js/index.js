

var Name = document.getElementById("Name");
var email = document.getElementById("email");
var password = document.getElementById("password");

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

var userslist;
if (localStorage.getItem("userslist") == null) {
  userslist = [];
} else {
  userslist = JSON.parse(localStorage.getItem("userslist"));
}

function adduser() {
  if (Name.value.trim() === "") {
    alert("Name cannot be empty!");
    Name.focus();
    return;
  }

  if (email.value.trim() === "") {
    alert("Email cannot be empty!");
    email.focus();
    return;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  if (password.value.trim() === "") {
    alert("Password cannot be empty!");
    password.focus();
    return;
  }

  var passwordPattern = /^(?=(?:.*[A-Z]){1,5})(?=(?:.*[a-z]){1,5})(?=(?:.*\d){1,5})[A-Za-z\d]{3,15}$/
  if (!passwordPattern.test(password.value)) {
    alert("⚠️ Password must be between 6 and 15 characters long, containing 1 to 5 uppercase letters, 1 to 5 lowercase letters, and 1 to 5 numbers.");

    return;
  }

  var user = {
    Name: Name.value,
    email: email.value,
    password: password.value,
  };
  userslist.push(user);
  localStorage.setItem("userslist", JSON.stringify(userslist));
  window.location.href = "Login.html";
  clearInput();
}

function clearInput() {
  Name.value = "";
  email.value = "";
  password.value = "";
}

function loginUser() {
  if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
    alert("Please enter both email and password.");
    return;
  }

  var userslist = JSON.parse(localStorage.getItem("userslist"));
  var user = userslist.find(
    (user) =>
      user.email === loginEmail.value && user.password === loginPassword.value
  );

  if (user) {
    localStorage.setItem("namuser", user.Name);
    window.location.href = "Welcome.html";
  } else {
    alert("Please check your email and password.");
  }

  clearLoginInput();
}

function clearLoginInput() {
  loginEmail.value = "";
  loginPassword.value = "";
}

window.onload = function () {
  var userName = localStorage.getItem("namuser");
  if (userName) {
    document.getElementById("nameeee").textContent = userName;
  }
};

function backToLogin() {
  window.location.href = "Login.html"; 
}

