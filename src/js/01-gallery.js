// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const galleryPicture = createGaleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryPicture);
galleryContainer.addEventListener('click', onPictureClick)

function createGaleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
    }).join('');
}

function onPictureClick(evt) {
    evt.preventDefault()

    const isGalleryImageEl = evt.target.classList.contains('gallery__image');

    if (!isGalleryImageEl) {
        return;
    }
}

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
