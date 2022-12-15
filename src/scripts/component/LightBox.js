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
function showModalLightBox(media, MediaFilter) {
    // Disable scroll on body when modal is open
    bodyLightBox.classList.add('no-scroll');
    // Change attribute hidden
    headerLightBox.setAttribute('aria-hidden', 'true');
    mainLightBox.setAttribute('aria-hidden', 'true');
    modalLightBox.setAttribute('aria-hidden', 'false');
    // Show modal
    modalLightBox.style.display = 'block';
    modalBackgroundLightBox.style.display = 'block';

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
}

// TODO:
// add function next (left or right)

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
