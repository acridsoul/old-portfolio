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

// Javascript to open links in new pages
document.querySelectorAll('a').forEach(function(link) {
    link.setAttribute('target', '_blank');
});
