import { MediaCard } from './MediaCard.js';

class VideoCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    createVideoCard() {
        const article = document.createElement('article');

        const videoCard = `
            <div id="${this._media.id}" class="photographer__portfolio--container" aria-label="media__video" role="video" tabindex="0">
                <video class="photographer__portfolio--video">
                    <source src="../../public/assets/medias/${this._media.photographerId}/${this._media.video}" type="video/mp4">
                </video>
            </div>
            <div class="photographer__portfolio--subcontainer">
                <h2>${this._media.title}</h2>
                <div class="photographer__portfolio--likecontainer" aria-label="media__video__likes" tabindex="0">
                    <h3 class="photographer__portfolio--likenumber">${this._media.likes}</h3>
                    <i class="fa-solid fa-heart" aria-label="Like le média"></i>
                </div>
            </div>
        `;
        article.innerHTML = videoCard;
        return article;
    }

    createLightboxVideo() {
        const modalLightBoxMedia = document.querySelector('.modal__lightbox--media');

        const videoLighbox = `
            <video controls="controls" class="modal__lightbox--mediacontainer" data="${this._media.id}">
                <source src="../../public/assets/medias/${this._media.photographerId}/${this._media.video}" type="video/mp4">
            </video>    
        `;

        return (modalLightBoxMedia.innerHTML = videoLighbox);
    }
}

export { VideoCard };
