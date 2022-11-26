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
                        <img src="../../../${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}">
                    </div>
                </div>
                
                <!-- Photographer filter -->
                <div class="photographer__filter">
                    <label class="photographer__filter--label">Trier par</label>
                    <div class="photographer__filter--menu">
                        <div class="photographer__filter--list" role="button" tabindex="0" aria-label="trier les médias par ..."
                            aria-haspopup="true" aria-expanded="false" aria-selected="true">
                            <p class="photographer__filter--active">Popularité</p>
                            <i class="fa-solid fa-angle-down"></i>
                            <i class="fa-solid fa-angle-up"></i>
                        </div>
                        <div class="photographer__filter--hidden">
                            <button class="photographer__filter--option" value="popularity" role="listbox" tabindex="0" aria-label="tri des médias par popularité"
                                aria-selected="true">Popularité</button>
                        </div>
                        <button class="photographer__filter--option" value="date" role="listbox" tabindex="0" aria-label="tri des médias par date"
                            aria-selected="false">Date</button>
                        <button class="photographer__filter--option" value="title" role="listbox" tabindex="0" aria-label="tri des médias par titre"
                            aria-selected="false">Titre</button>
                    </div>
                </div>
        `;

        return photographerPage;
    }
}
