document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const galleryImages = document.getElementById('gallery-images');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');
  const prevImg = document.getElementById('prevImg');
  const nextImg = document.getElementById('nextImg');

  let currentImgIndex = 0;
  let images = [];

  // Load images dynamically from a folder
  function loadImages(folder, numImages) {
    for (let i = 1; i <= numImages; i++) {
      let img = document.createElement('img');
      img.src = `${folder}/image${i}.jpeg`;
      img.alt = `Image ${i}`;
      img.addEventListener('click', () => openModal(i - 1));
      galleryImages.appendChild(img);
      images.push(img.src);
    }
  }

  // Open the modal with the clicked image
  function openModal(index) {
    currentImgIndex = index;
    modal.style.display = 'flex';
    modalImg.src = images[currentImgIndex];
  }

  // Close the modal
  closeModal.onclick = function () {
    modal.style.display = 'none';
  };

  // Navigate to the previous image
  prevImg.onclick = function () {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImgIndex];
  };

  // Navigate to the next image
  nextImg.onclick = function () {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    modalImg.src = images[currentImgIndex];
  };

  // Close the modal when clicking outside the image
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Load images for the property (adjust paths and counts as necessary)
  loadImages('/images/property-2', 36); // Adjust folder path and image count as necessary
});
