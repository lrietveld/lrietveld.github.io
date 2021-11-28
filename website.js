'use strict'
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.getElementById("navMenu").style.top = "0";
}

document.getElementById("navMenu").innerHTML =
'<input type="checkbox" id="check">'+
'<label for="check" class="checkbtn">'
+'<i class="fas fa-bars"></i>'+
'</label>'+'<ul>'+
 '<li><a href="index.html">home</a></li>'+
 '<li><a href="aboutMe.html">about me</a></li>'+
 '<li><a href="projects.html">projects</a></li>'+
 '<li><a href="ideas.html">ideas</a></li>'+
 '<li><a href="contact.html">contact</a></li>'+
 '</ul>';

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
