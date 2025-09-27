  // Create lightbox overlay dynamically
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox-overlay';
  lightbox.style.display = 'none';
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.background = 'rgba(0,0,0,0.8)';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.zIndex = '9999';

  const lightboxImg = document.createElement('img');
  lightboxImg.alt = 'Full Image';
  lightboxImg.style.maxWidth = '90%';
  lightboxImg.style.maxHeight = '90%';
  lightbox.appendChild(lightboxImg);

  document.body.appendChild(lightbox);

  // Select all images on the page
  const thumbs = document.querySelectorAll('img');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = thumb.src; // you can replace with a larger version if available
    });
  });

  // Click overlay to close
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });