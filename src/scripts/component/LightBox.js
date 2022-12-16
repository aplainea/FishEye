///--- DOM ELEMENTS
const bodyLightBox = document.getElementById('body');
const headerLightBox = document.getElementById('header');
const mainLightBox = document.getElementById('main');
const modalLightBox = document.getElementById('modal__lightbox');
const modalBackgroundLightBox = document.querySelector('.modal__lightbox--background');
const modalLightBoxClose = document.querySelector('.modal__lightbox--close');
const modalLightBoxMedia = document.querySelector('.modal__lightbox--media');
const modalLightBoxMediaTitle = document.querySelector('.modal__lightbox--title');

///--- FUNCTIONS

// Show modal lightbox
function showModalLightBox(media, arrayMedia) {
    // Disable scroll on body when modal is open
    bodyLightBox.classList.add('no-scroll');
    // Change attribute hidden
    headerLightBox.setAttribute('aria-hidden', 'true');
    mainLightBox.setAttribute('aria-hidden', 'true');
    modalLightBox.setAttribute('aria-hidden', 'false');
    // Show modal
    modalLightBox.style.display = 'block';
    modalBackgroundLightBox.style.display = 'block';

    //console.log('showMedia', media);
    //console.log('showMedia ARRAY', arrayMedia);

    // Create Template

    // Add title media
    const title = `
            <h2>${media.title}</h2>
        `;
    modalLightBoxMediaTitle.innerHTML = title;

    // Compare Media if Image or Video, and add content
    if (media.image) {
        const content = `
            <img src="../../../public/assets/medias/${media.photographerId}/${media.image}" alt="${media.title}" class="modal__lightbox--mediacontainer">
        `;
        modalLightBoxMedia.innerHTML = content;
    } else if (media.video) {
        const content = `
            <video controls="controls" class="modal__lightbox--mediacontainer">
                <source src="../../../public/assets/medias/${media.photographerId}/${media.video}" type="video/mp4">
            </video>
    `;
        modalLightBoxMedia.innerHTML = content;
    }

    // Add event listner
    const modalLightBoxMediaNext = document.querySelector('.modal__lightbox--arrowright');
    const modalLightBoxMediaPreview = document.querySelector('.modal__lightbox--arrowleft');
    const currentMediaIndex = arrayMedia.findIndex((Media) => Media.id === media.id);
    nextEvent(modalLightBoxMediaNext, arrayMedia, currentMediaIndex);
    previewEvent(modalLightBoxMediaPreview, arrayMedia, currentMediaIndex);
}

// Switch to next media
function nextModalLightBox(arrayMedia, currentMedia) {
    let i = currentMedia;
    i++;
    i = i % arrayMedia.length;
    console.log('NEXT', arrayMedia[i]);
    return showModalLightBox(arrayMedia[i], arrayMedia); // TODO: need fix this infinity loop
}

// Switch to preview media
function previewModalLightBox(arrayMedia, currentMedia) {
    let i = currentMedia;
    if (i === 0) {
        i = arrayMedia.length;
    }
    i--;
    console.log('PREVIEW', arrayMedia[i]);
    return showModalLightBox(arrayMedia[i], arrayMedia); // TODO: need fix this infinity loop
}

// Close modal lightbox
function closeModalLightBox() {
    // Remove disable scroll on body when modal is open
    bodyLightBox.classList.remove('no-scroll');
    // Change attribute hidden
    headerLightBox.setAttribute('aria-hidden', 'false');
    mainLightBox.setAttribute('aria-hidden', 'false');
    modalLightBox.setAttribute('aria-hidden', 'true');
    // Hidden modal
    modalLightBox.style.display = 'none';
    modalBackgroundLightBox.style.display = 'none';
}

///--- Event Listener

function nextEvent(modalLightBoxMediaNext, arrayMedia, currentMediaIndex) {
    // Next Media
    modalLightBoxMediaNext.addEventListener(
        'click',
        nextModalLightBox(arrayMedia, currentMediaIndex),
    );
    modalLightBoxMediaNext.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            nextModalLightBox(arrayMedia, currentMediaIndex);
        }
    });
}

function previewEvent(modalLightBoxMediaPreview, arrayMedia, currentMediaIndex) {
    // Preview Media
    modalLightBoxMediaPreview.addEventListener(
        'click',
        previewModalLightBox(arrayMedia, currentMediaIndex),
    );
    modalLightBoxMediaPreview.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            previewModalLightBox(arrayMedia, currentMediaIndex);
        }
    });
}

// Close modal event
modalLightBoxClose.addEventListener('click', closeModalLightBox);
modalLightBoxClose.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        closeModalLightBox();
    }
});
