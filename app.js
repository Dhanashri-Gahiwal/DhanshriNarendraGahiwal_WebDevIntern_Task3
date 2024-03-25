// menu show or hide
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("showmenu");
});

// onclick event
function hireMe() {
  alert("Hello, please fill the form below");
  let contact = document.getElementById("contact-me");
  contact.scrollIntoView({ behavior: "smooth", block: "start" });
}

// form validation
function formValidation() {

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var subjectInput = document.getElementById("subject");
  var messageInput = document.getElementById("message");

  // name validation
  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return false;
  }

  // email validation
  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return false;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    alert("Please enter a valid email.");
    emailInput.focus();
    return false;
  }

  // subject validation
  if (subjectInput.value.trim() === "") {
    alert("Please enter subject.");
    subjectInput.focus();
    return false;
  }

  // message validation
  if (messageInput.value.trim() === "") {
    alert("Please enter any message.");
    messageInput.focus();
    return false;
  }

  alert("Form submitted successfully!");
}

// regular expression for email validation
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
