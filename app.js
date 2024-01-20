// Dark Theme
const backgroundChange = document.querySelector("body");
const themeIcon = document.querySelector(".light-theme--moon");
const leftIcon =document.querySelector(".left-image img")
const root = document.querySelector(":root");
themeIcon.addEventListener("click", function () {
  document.body.classList.toggle("active");
  if (document.body.classList.contains("active")) {
      themeIcon.src = "./assets/image/dark-moon.svg";
      leftIcon.src="./assets/image/left-light.svg"
    } else {
        themeIcon.src = "./assets/image/light-moon.svg";
        leftIcon.src="./assets/image/left-dark.svg"
  }
});