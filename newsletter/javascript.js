let connecting = document.querySelector("#email");
let button = document.querySelector("#subscribe");
let form = document.querySelector("#anything");
let success = document.querySelector(".success");

// if user input wrong email address so basically doesnt have a dot, a sign --> @ then i don't allow to go to success message
//if its correct then apply function success message which send You to new link success.html
//
form.addEventListener("submit", function (event) {
  console.log("I successfully show you a success message");
  event.preventDefault();
  document.querySelector(".background").classList.add("hidden");
  success.classList.remove("hidden");
  
})
button.addEventListener("click", handleClick);

function handleClick() {
  console.log("I am handling the button")
  if (connecting.value.trim() === "") {
      console.log("I should disable button if input is empty");
    button.disabled = true;
  }
  let value = document.querySelector("#confirmationEmail");
  value.innerHTML = connecting.value;
}