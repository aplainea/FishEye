import { Image } from '../models/Image.js';
import { Video } from '../models/Video.js';
import { ImageCard } from '../templates/ImageCard.js';
import { VideoCard } from '../templates/VideoCard.js';

class Lightbox {
    constructor(array, position) {
        this._array = array;
        this._position = position;
    }

    // Show LightBox modal
    showLightbox() {
        const bodyLightBox = document.getElementById('body');
        const headerLightBox = document.getElementById('header');
        const mainLightBox = document.getElementById('main');
        const modalLightBox = document.getElementById('modal__lightbox');
        const modalBackgroundLightBox = document.querySelector('.modal__lightbox--background');
        const modalLightBoxClose = document.querySelector('.modal__lightbox--close');

        // Disable scroll on body when modal is open
        bodyLightBox.classList.add('no-scroll');

        // Change attribute hidden
        headerLightBox.setAttribute('aria-hidden', 'true');
        mainLightBox.setAttribute('aria-hidden', 'true');
        modalLightBox.setAttribute('aria-hidden', 'false');

        // Show modal
        modalLightBox.style.display = 'block';
        modalBackgroundLightBox.style.display = 'block';

        // Lost current focus
        const currentFocusElement = document.activeElement;
        currentFocusElement.blur();

        // Focus close button on lightbox modal
        modalLightBoxClose.focus();

        // get media
        const media = this._array[this._position];

        // Add title
        const modalLightBoxMediaTitle = document.querySelector('.modal__lightbox--title');
        const titleMedia = media._title;
        modalLightBoxMediaTitle.textContent = titleMedia;

        // Create Template
        if (media instanceof Image) {
            const imageTemplate = new ImageCard(media);
            imageTemplate.createLightboxImage();
        } else if (media instanceof Video) {
            const videoTemplate = new VideoCard(media);
            videoTemplate.createLightboxVideo();
        }
    }

    // Close LightBox modal
    closeLightbox() {
        const bodyLightBox = document.getElementById('body');
        const headerLightBox = document.getElementById('header');
        const mainLightBox = document.getElementById('main');
        const modalLightBox = document.getElementById('modal__lightbox');
        const modalBackgroundLightBox = document.querySelector('.modal__lightbox--background');

        // Remove disable scroll on body when modal is open
        bodyLightBox.classList.remove('no-scroll');

        // Change attribute hidden
        headerLightBox.setAttribute('aria-hidden', 'false');
        mainLightBox.setAttribute('aria-hidden', 'false');
        modalLightBox.setAttribute('aria-hidden', 'true');

        // Hidden modal
        modalLightBox.style.display = 'none';
        modalBackgroundLightBox.style.display = 'none';

        // Lost current focus
        const currentFocusElement = document.activeElement;
        currentFocusElement.blur();

        // Focus first media
        const allMedia = document.querySelectorAll('.photographer__portfolio--container');
        if (allMedia.length > 0) {
            allMedia[0].focus();
        }
    }

    // Show next media on Lightbox
    nextLightbox() {
        const modalLightBoxMedia = document.querySelector('.modal__lightbox--mediacontainer');
        const modalLightBoxMediaTitle = document.querySelector('.modal__lightbox--title');

        // get media id with data
        let modalLightboxMediaId = modalLightBoxMedia.getAttribute('data');

        // get array index of media by id
        let arrayMediaIndex = this._array.findIndex((media) => media._id == modalLightboxMediaId);

        // get next index of array index for media
        let nextMediaIndex = arrayMediaIndex !== this._array.length - 1 ? arrayMediaIndex + 1 : 0;

        // Remove preview media with title
        if (modalLightBoxMedia.firstChild) {
            modalLightBoxMedia.firstChild.remove();
            modalLightBoxMediaTitle.textContent = '';
        }

        // get next media
        const nextMedia = this._array[nextMediaIndex];

        // replace previous media by next media
        if (nextMedia instanceof Image) {
            const imageTemplate = new ImageCard(nextMedia);
            imageTemplate.createLightboxImage();
        } else if (nextMedia instanceof Video) {
            const videoTemplate = new VideoCard(nextMedia);
            videoTemplate.createLightboxVideo();
        }

        // replace previous title by next title media
        modalLightBoxMediaTitle.textContent = nextMedia._title;
    }

    // Show previous media on Lightbox
    previousLightbox() {
        const modalLightBoxMedia = document.querySelector('.modal__lightbox--mediacontainer');
        const modalLightBoxMediaTitle = document.querySelector('.modal__lightbox--title');

        // get media id with data
        let modalLightboxMediaId = modalLightBoxMedia.getAttribute('data');

        // get array index of media by id
        let arrayMediaIndex = this._array.findIndex((media) => media._id == modalLightboxMediaId);

        // get previous index of array index for media
        let previousMediaIndex =
            arrayMediaIndex !== 0 ? arrayMediaIndex - 1 : this._array.length - 1;

        // Remove preview media with title
        if (modalLightBoxMedia.firstChild) {
            modalLightBoxMedia.firstChild.remove();
            modalLightBoxMediaTitle.textContent = '';
        }

        // get previous media
        const previousMedia = this._array[previousMediaIndex];

        // replace previous media by previous media
        if (previousMedia instanceof Image) {
            const imageTemplate = new ImageCard(previousMedia);
            imageTemplate.createLightboxImage();
        } else if (previousMedia instanceof Video) {
            const videoTemplate = new VideoCard(previousMedia);
            videoTemplate.createLightboxVideo();
        }

        // replace previous title by next title media
        modalLightBoxMediaTitle.textContent = previousMedia._title;
    }
}

export { Lightbox };
