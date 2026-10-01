(() => {
  const embed = document.querySelector('iframe[data-form-id="e2apNpe8SG3X4lO6lQEP"]');

  if (embed) {
    embed.addEventListener('load', () => {
      document.documentElement.classList.add('form-loaded');
    }, { once: true });

    if (!document.querySelector('script[data-leandigi-form-embed]')) {
      const script = document.createElement('script');
      script.src = 'https://link.leandigi.vn/js/form_embed.js';
      script.async = true;
      script.dataset.leandigiFormEmbed = 'true';
      document.body.appendChild(script);
    }
  }

  const lightbox = document.querySelector('.feedback-lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const closeButton = lightbox?.querySelector('.feedback-lightbox-close');
  const feedbackButtons = document.querySelectorAll('[data-feedback-src]');

  if (!lightbox || !lightboxImage || !closeButton || !feedbackButtons.length) return;

  const closeLightbox = () => {
    lightbox.close();
    lightbox.classList.remove('is-result-shot');
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
  };

  feedbackButtons.forEach((button) => {
    button.addEventListener('click', () => {
      lightbox.classList.toggle('is-result-shot', button.classList.contains('result-shot'));
      lightboxImage.src = button.dataset.feedbackSrc;
      lightboxImage.alt = button.dataset.feedbackAlt || 'Ảnh feedback khách hàng';
      lightbox.showModal();
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeLightbox();
  });
})();
