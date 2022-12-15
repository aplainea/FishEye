class ImageCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    createImageCard() {
        const article = document.createElement('article');

        const imageCard = `
            <div id="${this._media.id}" class="photographer__portfolio--container">
                <img src="../../../public/assets/medias/${this._media.photographerId}/${this._media.image}" alt="${this._media.title}" class="photographer__portfolio--img">
            </div>
            <div class="photographer__portfolio--subcontainer">
                <h2>${this._media.title}</h2>
                <!-- like icon here -->
            </div>
        `;
        article.innerHTML = imageCard;
        return article;
    }
}
