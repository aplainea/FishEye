class PhotographerPage {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerPage() {
        const photographerPage = `
        <!-- Photographer Page -->
        <div>
            <!-- Photographer presentation -->
            <div>
                <div>
                    <h1>${this._photographer.name}</h1>
                    <p>${this._photographer.place}</p>
                    <p>${this._photographer.tagline}</p>
                </div>
                <!-- Photographer contact -->
                <div>
                    <button class="photographer__contact--btn">Contacter-moi</button>
                </div>
                <!-- Photographer avatar -->
                <div>
                    <img src="../../../${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}">
                </div>
            </div>
            
            <!-- Photographer portfolio -->
            <div>
                <!-- Photographer filter -->
                <div>
                    <p>Trier par</p>
                    <!-- Photographer filter select -->
                    <div>
                        <div role="button" aria-label="Filtrer par ..." aria-haspopup="true" aria-expanded="false" aria-selected="true">
                            <p>Popularité</p>
                            <i class="fa-solid fa-angle-down"></i>
                            <i class="fa-solid fa-angle-up"></i>
                        </div>
                        <!-- Popularité -->
                        <div>
                            <button value="popularity" role="listbox" aria-label="Filtre par popularité" aria-selected="true">Popularité</button>
                        </div>
                        <!-- Date -->
                        <div>
                            <button value="date" role="listbox" aria-label="Filtre par date" aria-selected="false">Date</button>
                        </div>
                        <!-- Titre -->
                        <div>
                            <button value="title" role="listbox" aria-label="Filtre par titre" aria-selected="false">Titre</button>
                        </div>
                    </div>
                </div>
                <!-- Photographer medias -->
                <section class="photographer__portfolio--medias"></section>
            </div>
        </div>
        `;

        return photographerPage;
    }
}
