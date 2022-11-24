class App {
    /**
     * "#" private
     * "_" protected
     * "$" variable
     */
    constructor() {
        // Section with all photographers profiles
        this.$photographersSection = document.querySelector('.photographer__section');
        // Photographer's Page, with all the photographer's data
        this.$photographerPage = document.querySelector('.photographer__page');
        // Create PhotographerApi to get data Photographer
        this._photographerApi = new PhotographerApi('../../src/data/photographers.json');

        // Create MediaApi to get data media
        // this._mediaApi = new MediaApi('../../src/data/photographers.json');
    }

    // Home Page
    async homePage() {
        // Get all photographers data
        const allPhotographersData = await this._photographerApi.getAllPhotographers();

        // Check if we have all photographers data
        if (allPhotographersData) {
            // Use Factory
            const Photographers = allPhotographersData.map(
                (photographer) => new PhotographersFactory(photographer, 'PhotographerApi'),
            );

            // All photographers data
            console.log('===[ All photographers data ]===');
            console.log(Photographers);

            // Create all PhotographerCard
            Photographers.forEach((photographer) => {
                const Template = new PhotographerCard(photographer);
                this.$photographersSection.appendChild(Template.createPhotographerCard());
            });
        } else {
            // Error
            const message = 'Erreur Data: problème pour récuperer les données.';
            this.alertError(message);
        }
    }

    // Photographer Page
    async photographerPage() {
        // Get photographerID on URL
        const parametersURL = new URL(document.location).searchParams;
        const photographerID = parseInt(parametersURL.get('id'));
        // Init message error
        const messageError = "Erreur URL: L'ID du photographe n'existe pas, ou n'est pas la bonne.";

        // Check if ID
        if (photographerID) {
            // Get all photographers data
            const photographerData = await this._photographerApi.getOnePhotographer(photographerID);

            // Check if we have photographer data
            if (photographerData) {
                // Use Factory
                const Photographer = new PhotographersFactory(photographerData, 'PhotographerApi');

                // All photographer data
                console.log('===[ Photographer data ]===');
                console.log(Photographer);

                // Create Photographer Page
                const Template = new PhotographerPage(Photographer);
                this.$photographerPage.innerHTML = Template.createPhotographerPage();

                // Modal Contact
                const modalContactButton = document.querySelector('.photographer__contact--btn');
                // Show modal event on click
                modalContactButton.addEventListener('click', () => showModalContact(Photographer));
                // Show modal event when "Entrer" press
                modalContactButton.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        showModalContact(Photographer);
                    }
                });
            } else {
                // Error
                this.alertError(messageError);
            }
        } else {
            // Error
            this.alertError(messageError);
        }
    }

    // Alert Error
    alertError(message) {
        // Warning error message
        alert(message);
        // Return to Home Page
        document.location.href = '/index.html';
    }
}

// Create App "FishEye"
const app = new App();

// Router
const currentPage = document.location.pathname;
// Default Error message
const messageError = "Vous êtes perdu ? Retournons à l'accueil.\nCette URL n'existe pas.";
switch (currentPage) {
    // Home Page
    case '/index.html':
        app.homePage();
        break;
    // Photographer Page
    case '/src/pages/photographer.html':
        app.photographerPage();
        break;
    // Default page (if error, etc.) --> return to Home Page
    default:
        app.alertError(messageError);
}
