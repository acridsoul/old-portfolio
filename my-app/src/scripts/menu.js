import { fairyDustCursor } from "cursor-effects";

window.addEventListener("load", () => {
  new fairyDustCursor(
    {
      colors: ["#800080", "#00ff00", "#fff"],
    }
  ); // No element parameter, applies to the whole body
});


// js code for the clock
setInterval(myClock, 0);
function myClock() {
  const date = new Date();
  document.getElementById("digital-clock").textContent = date.toLocaleTimeString();
}


// Show the main content after 4 seconds and hide the loading screen
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2700); // 4 seconds delay
});


// JavaScript for Project tab
document.addEventListener('DOMContentLoaded', () => {
  const folders = document.querySelectorAll('.folder');

  folders.forEach(folder => {
      const label = folder.querySelector('.label');
      
      label.addEventListener('click', () => {
          folder.classList.toggle('active');
      });
  });
});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});
