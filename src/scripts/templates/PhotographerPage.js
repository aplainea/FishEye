class PhotographerPage {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerPage() {
        const photographerPage = `
            <!-- Photographer Page -->
                <div class="photographer__page--headcontainer">
                    <!-- Photographer presentation -->
                    <div class="photographer__page--presentation">
                        <h1>${this._photographer.name}</h1>
                        <p class="photographer__page--place">${this._photographer.place}</p>
                        <p class="photographer__page--tagline">${this._photographer.tagline}</p>
                    </div>
                    <!-- Photographer contact -->
                    <div class="photographer__page--contact">
                        <button class="photographer__contact--btn FE-button">Contacter-moi</button>
                    </div>
                    <!-- Photographer avatar -->
                    <div class="photographer__page--avatar">
                        <img src="${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}">
                    </div>
                </div>
        `;

        return photographerPage;
    }
}
