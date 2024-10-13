// Typing effect
var i = 0;
var txt = 'I am Acrisoul';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("acrisoul").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 200)
  }
}
typeWriter()

// js code for the clock
setInterval(myClock, 10);

function myClock() {
  const date = new Date();
  document.getElementById("digital-clock").innerHTML = date.toLocaleTimeString();
}


document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });

// Show the main content after 4 seconds and hide the loading screen
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2700); // 4 seconds delay
});