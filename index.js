const upperPhotos = document.getElementById('upperPhotos');
const lowerPhotos = document.getElementById('lowerPhotos');
const featuredImage = document.getElementById('featuredImage');

function selectImage(event) {
    const selectedThumbnail = event.currentTarget;
    featuredImage.src = selectedThumbnail.src;
    featuredImage.alt = `Selected gallery image ${selectedThumbnail.dataset.imageNumber}`;
}

function selectImageWithKeyboard(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectImage(event);
    }
}

function createThumbnail(position) {
    const imageNumber = (position % 6) + 1;
    const thumbnail = document.createElement('img');

    thumbnail.src = `images/${imageNumber}.jpeg`;
    thumbnail.alt = `Gallery thumbnail ${imageNumber}`;
    thumbnail.dataset.imageNumber = imageNumber;
    thumbnail.tabIndex = 0;
    thumbnail.setAttribute('role', 'button');
    thumbnail.setAttribute('aria-label', `Show image ${imageNumber}`);
    thumbnail.addEventListener('keydown', selectImageWithKeyboard);
    thumbnail.addEventListener('focus', selectImage);

    if (position < 6) {
        thumbnail.addEventListener('click', selectImage);
        upperPhotos.appendChild(thumbnail);
    } else {
        thumbnail.addEventListener('pointerenter', selectImage);
        lowerPhotos.appendChild(thumbnail);
    }
}

for (let index = 0; index < 12; index += 1) {
    createThumbnail(index);
}
