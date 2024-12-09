var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a candidate for a BS in Data Science and International Affairs') //Add your own tagline
  .pauseFor(3000)
  .start()

console.log('Hello! Welcome to my portfolio. Feel free to reach out to me at:')
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'images/boston.jpeg',
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 8000
        }
    }
});

//BUTTON 1 - morocco
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btnModal1 = document.getElementById("btn1");

// Get the <span> element that closes the modal
var spanModal1 = document.getElementsByClassName("closeModal1")[0];

// When the user clicks on the button, open the modal
btnModal1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

//BUTTON 2 - misinformation dash
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btnModal2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var spanModal2 = document.getElementsByClassName("closeModal2")[0];

// When the user clicks on the button, open the modal
btnModal2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//BUTTON 2 - misinformation dash
var modal3 = document.getElementById("modal3");

// Get the button that opens the modal
var btnModal3 = document.getElementById("btn3");

// Get the <span> element that closes the modal
var spanModal3 = document.getElementsByClassName("closeModal3")[0];

// When the user clicks on the button, open the modal
btnModal3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

//WORLD HAPPINESS REPORT -- BUTTON 9
var modal9 = document.getElementById("modal9");

// Get the button that opens the modal
var btnModal9 = document.getElementById("btn9");

// Get the <span> element that closes the modal
var spanModal9 = document.getElementsByClassName("closeModal9")[0];

// When the user clicks on the button, open the modal
btnModal9.onclick = function() {
  modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal9.onclick = function() {
  modal9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}

//Beanpot -- BUTTON 9
var modal10 = document.getElementById("modal10");

// Get the button that opens the modal
var btnModal10 = document.getElementById("btn10");

// Get the <span> element that closes the modal
var spanModal10 = document.getElementsByClassName("closeModal10")[0];

// When the user clicks on the button, open the modal
btnModal10.onclick = function() {
  modal10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal10.onclick = function() {
  modal10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
}



//BUTTON 4
var modal4 = document.getElementById("modal4");

// Get the button that opens the modal
var btnModal4 = document.getElementById("btn4");

// Get the <span> element that closes the modal
var spanModal4 = document.getElementsByClassName("closeModal4")[0];

// When the user clicks on the button, open the modal
btnModal4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}



//BUTTON 5
var modal5 = document.getElementById("modal5");

// Get the button that opens the modal
var btnModal5 = document.getElementById("btn5");

// Get the <span> element that closes the modal
var spanModal5 = document.getElementsByClassName("closeModal5")[0];

// When the user clicks on the button, open the modal
btnModal5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

//BUTTON 5
var modal6 = document.getElementById("modal6");

// Get the button that opens the modal
var btnModal6 = document.getElementById("btn6");

// Get the <span> element that closes the modal
var spanModal6 = document.getElementsByClassName("closeModal6")[0];

// When the user clicks on the button, open the modal
btnModal6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal6.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

//Link Health -- BUTTON 11
var modal11 = document.getElementById("modal11");

// Get the button that opens the modal
var btnModal11 = document.getElementById("btn11");

// Get the <span> element that closes the modal
var spanModal11 = document.getElementsByClassName("closeModal11")[0];

// When the user clicks on the button, open the modal
btnModal11.onclick = function() {
  modal11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal11.onclick = function() {
  modal11.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
}

//Link Health -- BUTTON 12
var modal12 = document.getElementById("modal12");

// Get the button that opens the modal
var btnModal12 = document.getElementById("btn12");

// Get the <span> element that closes the modal
var spanModal12 = document.getElementsByClassName("closeModal12")[0];

// When the user clicks on the button, open the modal
btnModal12.onclick = function() {
  modal12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal12.onclick = function() {
  modal12.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
}

//GENIE -- BUTTON 13
var modal13 = document.getElementById("modal13");

// Get the button that opens the modal
var btnModal13 = document.getElementById("btn13");

// Get the <span> element that closes the modal
var spanModal13 = document.getElementsByClassName("closeModal13")[0];

// When the user clicks on the button, open the modal
btnModal13.onclick = function() {
  modal13.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal13.onclick = function() {
  modal13.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal13) {
    modal13.style.display = "none";
  }
}



//BUTTON 7 -- links to outside website
var btn7 = document.getElementById("btn7");
btn7.onclick = function() {
  window.open("https://huntnewsnu.com/72829/campus/northeastern-police-department-releases-2023-annual-security-report/", "_blank") //TODO add your link
}

//BUTTON 8 -- links to outside website
var btn8 = document.getElementById("btn8");
btn8.onclick = function() {
  window.open("https://www.storybench.org/5-ways-news-organizations-are-visualizing-election-data/", "_blank") //TODO add your link
}
