import { MediaCard } from './MediaCard.js';

class ImageCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    createImageCard() {
        const article = document.createElement('article');

        const imageCard = `
            <div id="${this._media.id}" class="photographer__portfolio--container" aria-label="media__image" tabindex="0">
                <img src="../../public/assets/medias/${this._media.photographerId}/${this._media.image}" alt="${this._media.title}" class="photographer__portfolio--img">
            </div>
            <div class="photographer__portfolio--subcontainer">
                <h2>${this._media.title}</h2>
                <div class="photographer__portfolio--likecontainer" aria-label="media__image__likes" tabindex="0">
                    <h3 class="photographer__portfolio--likenumber">${this._media.likes}</h3>
                    <i class="fa-solid fa-heart" aria-label="Like le média"></i>
                </div>
            </div>
        `;
        article.innerHTML = imageCard;
        return article;
    }

    createLightboxImage() {
        const modalLightBoxMedia = document.querySelector('.modal__lightbox--media');

        const imageLighbox = `
            <img src="../../public/assets/medias/${this._media.photographerId}/${this._media.image}" alt="${this._media.title}" class="modal__lightbox--mediacontainer" data="${this._media.id}">
        `;

        return (modalLightBoxMedia.innerHTML = imageLighbox);
    }
}

export { ImageCard };
