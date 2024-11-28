// custom cursor
import { fairyDustCursor } from "cursor-effects";

window.addEventListener("load", () => {
  new fairyDustCursor(
    {
      colors: ["#800080", "#00ff00", "#fff"],
    }
  ); // No element parameter, applies to the whole body
});

const customCursor = document.querySelector('.custom-cursor');

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  customCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener('mousemove', moveCursor);

// js code for the clock
setInterval(myClock, 0);
function myClock() {
  const date = new Date();
  document.getElementById("digital-clock").textContent = date.toLocaleTimeString();
}


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

