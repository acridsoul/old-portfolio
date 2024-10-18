document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');
    document.body.appendChild(modalOverlay);
  
    blogCards.forEach(card => {
      const readMoreBtn = card.querySelector('.read-more');
      const modalContent = card.querySelector('.modal-content');
  
      readMoreBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        openModal(modalContent);
      });
    });
  
    function openModal(content) {
      const modalClone = content.cloneNode(true);
      modalClone.style.display = 'block';
      
      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.classList.add('close-modal');
      modalClone.appendChild(closeBtn);
  
      modalOverlay.innerHTML = '';
      modalOverlay.appendChild(modalClone);
      modalOverlay.style.display = 'block';
  
      closeBtn.addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });
    }
  
    function closeModal() {
      modalOverlay.style.display = 'none';
    }
  
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });