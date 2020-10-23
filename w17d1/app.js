var userName = document.querySelector("input[name='userName']");
var password = document.querySelector("input[name='password']");

var submit = document.querySelector("button[type='submit']");
var user = "lakshay";
var pass = "saini";
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value !== user) {
    alert("UserName is not correct");
  } else if (password.value !== pass) {
    alert("Password is not correct");
  } else {
    alert("Hurryyy you are loged in ");
    userName.value = "";
    password.value = "";
  }
});
