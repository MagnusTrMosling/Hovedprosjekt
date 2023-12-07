document.querySelector("#signin-form").addEventListener("submit", function(event) {
    event.preventDefault();

const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

if (email && password) {
    alert(`Sign in successful!\nEmail: ${email}`);
    document.querySelector("#signin-form").reset();
  } else {
    alert("Please enter both email and password");
  }
});








