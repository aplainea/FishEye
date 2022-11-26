class VideoCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    createVideoCard() {
        const article = document.createElement('article');

        const videoCard = `
            <div class="photographer__portfolio--container">
                <video class="photographer__portfolio--video">
                    <source src="../../../public/assets/medias/${this._media.photographerId}/${this._media.video}" type="video/mp4">
                </video>
            </div>
            <div class="photographer__portfolio--subcontainer">
                <h2>${this._media.title}</h2>
                <!-- like icon here -->
            </div>
        `;
        article.innerHTML = videoCard;
        return article;
    }
}
