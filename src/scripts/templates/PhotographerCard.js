class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement('article');

        const photographerCard = `
        <!-- Photographer Card -->
        <div class="photographer__card">
            <a href="./src/pages/photographer.html?id=${this._photographer.id}" aria-label="vers la page du photographe ${this._photographer.name}" class="photographer__card--link">
                <!-- Profile -->
                <img src="${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}" class="photographer__card--avatar">
                <h2 class="photographer__card--name">${this._photographer.name}</h2>
            </a>
            <div class="photographer__card--subcontainer">
                <h3 class="photographer__card--place">${this._photographer.place}</h3>
                <p class="photographer__card--tagline">${this._photographer.tagline}</p>
                <p class="photographer__card--dailyprice">${this._photographer.dailyPrice}</p>
            </div>
        </div>
        `;

        article.innerHTML = photographerCard;

        return article;
    }
}

export { PhotographerCard };
