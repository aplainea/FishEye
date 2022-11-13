class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement('article');

        const photographerCard = `
        <!-- Photographer Card -->
        <a href="../../pages/photographer.html?id=${this._photographer.id}" aria-label="vers la page du photographe ${this._photographer.name}">
            <!-- Profile -->
            <div>
                <img src="../../../public/assets/photographers/${this._photographer.portrait}" alt="Profile de ${this._photographer.name}">
                <h2>${this._photographer.name}</h2>
            </div>
        </a>
        <div>
            <h3>${this._photographer.place}</h3>
            <p>${this._photographer.tagline}</p>
            <p>${this._photographer.dailyPrice}</p>
        </div>
        
        `;

        article.innerHTML = photographerCard;

        return article;
    }
}
