'use strict'

window.addEventListener('load', (event) => {
  var page = document.getElementsByTagName("html")
  page[0].style.visibility = "visible";
});
window.onload = checkClass;

const fontButton = document.querySelector('.btn');
fontButton.addEventListener('click', function() {
    document.body.classList.toggle('dyslexia');
    var className = document.body.className;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("classname", className);
    }
    if(className == "dyslexia") {
        this.textContent = "Original Font";
    }
    else {
        this.textContent = "Open Dyslexia";
    }
     console.log('current class name: ' + className);
});

function checkClass(){
  if (typeof(Storage) !== "undefined") {
    var classStored = localStorage.getItem("classname")
    if(classStored){
      document.body.classList.toggle('dyslexia');
      console.log('current class name: ' + classStored);
      fontButton.textContent = "Original Font";
    }
  }
}
