/**
 * "#" private
 * "_" protected
 */

class App {
    constructor() {
        // Section with all photographers profiles
        this.$photographersSection = document.querySelector('.photographer_section');
        // Create PhotographerApi to get data Photographer
        this._photographerApi = new PhotographerApi('../../src/data/photographers.json');
        // Create MediaApi to get data media
        // this._mediaApi = new MediaApi('../../src/data/photographers.json');
    }

    // Home Page
    async homePage() {
        // Get all photographers data
        const allPhotographersData = await this._photographerApi.getAllPhotographers();

        // All photographers data
        console.log('===[ All photographers data ]===');
        console.log(allPhotographersData);

        // Use Factory
        const Photographers = allPhotographersData.map(
            (photographer) => new PhotographersFactory(photographer, 'PhotographerApi'),
        );

        // Create all PhotographerCard
        Photographers.forEach((photographer) => {
            const Template = new PhotographerCard(photographer);
            this.$photographersSection.appendChild(Template.createPhotographerCard());
        });
    }

    // Photographer Page
    // photographerPage() {
    //     // use PhotographerFactory for media: Image or Video
    //     console.log('profil');
    // }
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
    // case '/src/pages/photographer.html':
    //     app.photographerPage();
    //     break;
    // Default page (if error, etc.) --> return to Home Page
    default:
        app.homePage();
}
