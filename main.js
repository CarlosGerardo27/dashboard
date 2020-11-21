var toggle = document.getElementById("toggle")
var wrapper = document.getElementById("wrapper1")
var slider = document.getElementById("slider1")
var dataContainer = document.querySelector(".data-container")


// Data containers 



var dc1 = document.querySelector(".dc1")
var dc2 = document.querySelector(".dc2")
var dc3 = document.querySelector(".dc3")
var dc4 = document.querySelector(".dc0")

var allDc = [dc1, dc2, dc3, dc4]


var ovc0 = document.querySelector(".ovc0")
var ovc1 = document.querySelector(".ovc1")
var ovc2 = document.querySelector(".ovc2")
var ovc3 = document.querySelector(".ovc3")
var ovc4 = document.querySelector(".ovc4")
var ovc5 = document.querySelector(".ovc5")
var ovc6 = document.querySelector(".ovc6")
var ovc7 = document.querySelector(".ovc7")

var allOvc = [ovc0, ovc1, ovc2, ovc3, ovc4, ovc5, ovc6, ovc7]

//  This function add class "bm" to the diferent data containers in the main section. 

function dcBm (i){
  for (var i = 0; i < allDc.length; i++){
    allDc[i].classList.add("bm")
    console.log("clase "+ i + " añadida")
}
}

function ovcBm(i){
  for (var i = 0; i < allOvc.length; i++){
    allOvc[i].classList.add("bm")
    console.log("ovc " + i)
  }
}

// Remove "bm" class to the different daqta containers in tue main sectión, this function execute when dark mode is activated

function dcDm(i){
  for (var i = 0; i < allDc.length; i++){
    allDc[i].classList.remove("bm")
    console.log("clase" + i + " removida")
  }
}

function ovcDm(i){
  for (var i = 0; i < allOvc.length; i++){
    allOvc[i].classList.remove("bm")
    console.log("ovc " + i)
  }
}

//SliderOFf remueve la clase "slider" del  boton de activación y añade la clase "slider2", 


function sliderActivates(){
  toggle.addEventListener("click", function() {
    if(slider.classList.contains("slider")){
      slider.classList.remove("slider")
      slider.classList.add("slider2")
    }else{
      slider.classList.add("slider")
      slider.classList.remove("slider2")
    }
  })
}

function sliderDesactivate(){
  slider.classList.add("slider")
}

function darkMode() {
  toggle.addEventListener("click", function () {
    console.log("click")
    sliderActivates()
    sliderDesactivate()
    if (wrapper.classList.contains("dark-mode")) {
      console.log("Dark-mode: Off")
      console.log("Bright-mode: On")    
      wrapper.classList.remove("dark-mode")
      wrapper.classList.add("bright-mode")
      dcBm()
      ovcBm()

    }else{
      wrapper.classList.remove("bright-mode")
      wrapper.classList.add("dark-mode")
      console.log("Dark-mode: On")
      console.log("bright-mode: Off")
      dcDm()
      ovcDm()
    }
  });
}

darkMode();


