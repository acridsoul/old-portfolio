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
