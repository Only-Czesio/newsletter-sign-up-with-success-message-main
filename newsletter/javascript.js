let connecting = document.querySelector("#email");
let button = document.querySelector("#subscribe");
let form = document.querySelector("#anything");
let success = document.querySelector(".success");
let errorMessage = document.querySelector(".disabled");
// if user input wrong email address so basically doesnt have a dot, a sign --> @ then i don't allow to go to success message
//if its correct then apply function success message which send You to new link success.html
//
form.addEventListener("submit", function (event) {
  if (connecting.value.trim() === "") {
    console.log("Input is empty");
    event.preventDefault();
    errorMessage.classList.remove("disabled");
  } else if (!isValidEmail(connecting.value)) {
    console.log("Invalid email address");
    event.preventDefault();
  } else {
    console.log("I successfully show you a success message");
    document.querySelector(".background").classList.add("hidden");
    success.classList.remove("hidden");
  }
});
button.addEventListener("click", handleClick);

function handleClick() {
  console.log("I am handling the button")
    let value = document.querySelector("#confirmationEmail");
    value.innerHTML = connecting.value;
}
  function isValidEmail(email) {
    // Simple regex for email validation
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }