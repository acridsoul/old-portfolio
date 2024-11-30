// custom cursor
import { fairyDustCursor } from "cursor-effects";

window.addEventListener("load", () => {
  new fairyDustCursor(
    {
      colors: ["#800080", "#00ff00", "#fff"],
    }
  ); // No element parameter, applies to the whole body
});

// login code:

const sshSimulation = document.getElementById('ssh-simulation');
      const mainContent = document.getElementById('main-content');

      const lines = [
        { text: "Accessing Server...", class: "red-text" },
        { text: "Username: vcrid", class: "red-text" },
        { text: "Password: ********", class: "red-text" },
        { text: "!! Welcome To The Crib !!", class: "green-text" },
    ];

    let index = 0;

    function typeLine() {
        if (index < lines.length) {
            const line = lines[index];
            let charIndex = 0;

            const typing = setInterval(() => {
                const span = document.createElement('span');
                span.className = line.class;  // Apply the correct class (color)
                span.textContent = line.text[charIndex];
                sshSimulation.appendChild(span);
                charIndex++;

                if (charIndex === line.text.length) {
                    clearInterval(typing);
                    sshSimulation.appendChild(document.createElement('br')); // Add a line break
                    index++;
                    setTimeout(typeLine, 500); // Pause before next line
                }
            }, 100);
        } else {
            setTimeout(() => {
                sshSimulation.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.classList.add('fade-in');
            }, 1000);
        }
    }

    // Start typing effect
    typeLine();



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

