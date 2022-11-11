// url path to data "photographers.json"
const pathData = '../data/photographers.json';

class App {
    constructor() {
        // Section with all photographers profiles
        this.$photographersSection = document.querySelector('.photographer_section');
        // Create MediaApi to get data media
        this._mediaApi = new MediaApi(pathData);
        // Create PhotographerApi to get data Photographer
        this._photographerApi = new PhotographerApi(pathData);
    }

    // Home Page
    homePage() {
        // Get all photographers data
        const data = this._photographerApi.getPhotographers;

        data
            // Create Photographer
            .map((photographer) => new Photographer(photographer))
            // For each phtotographer, create profile
            .forEach((photographer) => {
                const template = new PhotographerProfile(photographer);
                // Add photographer profil on section
                this.$photographersSection.appendChild(template.createPhotographerProfile());
            });
    }

    // Photographer Page
    async photographerPage() {
        // use PhotographerFactory for media: Image or Video
    }
}

// Create App "FishEye"
const app = new App();

// Router
const currentPage = document.location.pathname;
switch (currentPage) {
    // Home Page
    case '/index.html':
        app.homePage();
        break;
    // Photographer Page
    case '/photographer.html':
        app.photographerPage();
        break;
    // Default page (if error, etc.) --> return to Home Page
    default:
        app.homePage();
}
