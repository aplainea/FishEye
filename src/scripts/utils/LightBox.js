///--- DOM ELEMENTS
const bodyLightBox = document.getElementById('body');
const headerLightBox = document.getElementById('header');
const mainLightBox = document.getElementById('main');
const modalLightBox = document.getElementById('modal__lightbox');
const modalBackgroundLightBox = document.querySelector('.modal__lightbox--background');
const modalLightBoxClose = document.querySelector('.modal__lightbox--close');

///--- FUNCTIONS

// Show modal lightbox
function showModalLightBox(media) {
    // Disable scroll on body when modal is open
    bodyLightBox.classList.add('no-scroll');
    // Change attribute hidden
    headerLightBox.setAttribute('aria-hidden', 'true');
    mainLightBox.setAttribute('aria-hidden', 'true');
    modalLightBox.setAttribute('aria-hidden', 'false');
    // Show modal
    modalLightBox.style.display = 'block';
    modalBackgroundLightBox.style.display = 'block';

    console.log(media);

    // TODO:
    // compare Image and Video
    // innerHTML media on modal__lightbox--media
    // add function next (left or right)
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

// Close modal event
modalLightBoxClose.addEventListener('click', closeModalLightBox);
modalLightBoxClose.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        closeModalLightBox();
    }
});
