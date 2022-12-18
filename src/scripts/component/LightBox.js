import { Lightbox } from '../models/Lightbox.js';

// For every media, add event listener click to show modal
export function addClickEventForLightBoxMedia(modalLightBoxMedia, Media) {
    // For every media, add event listener click to show modal
    modalLightBoxMedia.forEach((item, index) => {
        // Show modal event on click
        item.addEventListener('click', async () => showModalLightBox(Media, index));
        // Show modal event when "Entrer" press
        item.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                showModalLightBox(Media, index);
            }
        });
    });
}

// Show lightbox modal
function showModalLightBox(array, index) {
    const lightbox = new Lightbox(array, index);
    //lightbox.closeLightbox();
    lightbox.showLightbox();
}

// Manage Lightbox event: previous, next and close
export function manageLightbox(array) {
    const modalLightBoxClose = document.querySelector('.modal__lightbox--close');
    const modalLightBoxMediaNext = document.querySelector('.modal__lightbox--arrowright');
    const modalLightBoxMediaPreview = document.querySelector('.modal__lightbox--arrowleft');

    // Close Lightbox
    modalLightBoxClose.addEventListener('click', () => manageCloseLightbox(array));
    modalLightBoxClose.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            manageCloseLightbox(array);
        }
    });

    // Next media
    modalLightBoxMediaNext.addEventListener('click', () => manageNextMedia(array));
    modalLightBoxMediaNext.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            manageNextMedia(array);
        }
    });

    // Previous media
    modalLightBoxMediaPreview.addEventListener('click', () => managePreviousMedia(array));
    modalLightBoxMediaPreview.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            managePreviousMedia(array);
        }
    });
}

// Manage close lightbox
function manageCloseLightbox(array) {
    const modalLightBoxMedia = document.querySelector('.modal__lightbox--mediacontainer');
    // get media id with data
    let modalLightboxMediaId = modalLightBoxMedia.getAttribute('data');

    // get array index of media by id
    let arrayMediaIndex = array.findIndex((media) => media._id === modalLightboxMediaId);
    const lightbox = new Lightbox(array, arrayMediaIndex);
    lightbox.closeLightbox();
}

// Manage next lightbox
function manageNextMedia(array) {
    const modalLightBoxMedia = document.querySelector('.modal__lightbox--mediacontainer');
    // get media id with data
    let modalLightboxMediaId = modalLightBoxMedia.getAttribute('data');
    // get array index of media by id
    let arrayMediaIndex = array.findIndex((media) => media._id === modalLightboxMediaId);
    const lightbox = new Lightbox(array, arrayMediaIndex);
    lightbox.nextLightbox();
}

// Manage previous lightbox
function managePreviousMedia(array) {
    const modalLightBoxMedia = document.querySelector('.modal__lightbox--mediacontainer');
    // get media id with data
    let modalLightboxMediaId = modalLightBoxMedia.getAttribute('data');
    // get array index of media by id
    let arrayMediaIndex = array.findIndex((media) => media._id === modalLightboxMediaId);
    const lightbox = new Lightbox(array, arrayMediaIndex);
    lightbox.previousLightbox();
}
