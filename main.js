var toggle = document.getElementById("toggle")
var wrapper = document.getElementById("wrapper1")
var slider = document.getElementById("slider1")

function darkMode() {
  toggle.addEventListener("click", function () {
    console.log("click")
    slider.classList.add("slider")
    if (wrapper.classList.contains("dark-mode")) {
      console.log("Dark-mode: Off")
      console.log("Bright-mode: On")    
      wrapper.classList.remove("dark-mode")
      wrapper.classList.add("bright-mode")
    } 
  });
}

darkMode();


