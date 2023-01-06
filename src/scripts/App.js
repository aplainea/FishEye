import { PhotographerApi } from './api/PhotographerApi.js';
import { MediaApi } from './api/MediaApi.js';
import { PhotographersFactory } from './factories/PhotographersFactory.js';
import { MediaFactory } from './factories/MediaFactory.js';
import { Likes } from './templates/Likes.js';

import {
    createAllPhotographerCard,
    createGlobalPhotographerpage,
} from './component/Photographer.js';
import { showModalEvent } from './utils/ContactForm.js';
import { filterSelectEvent } from './utils/FilterMedia.js';
import { updateMedia } from './component/Media.js';
import { closeModalFilterOptions } from './utils/Dropdown.js';
import { manageLightbox } from './component/Lightbox.js';

class App {
    constructor() {
        // Section with all photographers profiles
        this.$photographersSection = document.querySelector('.photographer__section');
        // Photographer's Page, with all the photographer's data
        this.$photographerPage = document.querySelector('.photographer__page');
        // Create PhotographerApi to get data Photographer
        this._photographerApi = new PhotographerApi('./src/data/photographers.json');
        this._photographerMediaApi = new PhotographerApi('../../src/data/photographers.json');

        // Section will all media by photographer
        this.$mediaSection = document.querySelector('.photographer__portfolio--media');
        // Create MediaApi to get data media
        this._mediaApi = new MediaApi('../../src/data/photographers.json');
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
            createAllPhotographerCard(Photographers, this.$photographersSection);
        }
    }

    // Photographer Page
    async photographerPage() {
        // Get photographerID on URL
        const parametersURL = new URL(document.location).searchParams;
        const photographerID = parseInt(parametersURL.get('id'));
        // Init message error
        const messageError =
            "Erreur: L'ID du photographe n'existe pas, ou n'est pas la bonne (photographerPage).";

        // Check if ID
        if (photographerID) {
            // Get all photographers data
            const photographerData = await this._photographerMediaApi.getOnePhotographer(
                photographerID,
            );

            // Check if we have photographer data
            if (photographerData) {
                // Use Factory
                const Photographer = new PhotographersFactory(photographerData, 'PhotographerApi');

                // All photographer data
                console.log('===[ Photographer data ]===');
                console.log(Photographer);

                // Create Photographer Page
                createGlobalPhotographerpage(Photographer, this.$photographerPage);

                // Modal Contact
                const modalContactButton = document.querySelector('.photographer__contact--btn');
                // Add event listner on contact button
                showModalEvent(modalContactButton, Photographer);

                // Filter

                // Default active filter
                const filterActive = document.querySelector('.photographer__filter--active');
                filterActive.innerText = 'Popularité';

                // Filter select
                const filterSelect = document.querySelector('.photographer__filter--select');
                // Add event listner on filter select
                filterSelectEvent(filterSelect);

                // All Media data by Photographer
                const mediaData = await this._mediaApi.getAllMediaByPhotographer(photographerID);

                // Check if we have media data
                if (mediaData) {
                    // Use Factory (manage media: Image or Video)
                    const Media = new MediaFactory(mediaData, 'PhotographerApi');

                    // Create initial all PhotographerCard (by Popularity)
                    updateMedia(Media, 'Popularité', this.$mediaSection);

                    // All options filter
                    const filterPopularite = document.getElementById('filter-popularite');
                    const filterDate = document.getElementById('filter-date');
                    const filterTitre = document.getElementById('filter-titre');
                    // On click option, replace active filter

                    // 'Popularité'
                    this.filterEvent(filterPopularite, Media, 'Popularité');
                    // 'Date'
                    this.filterEvent(filterDate, Media, 'Date');
                    // 'Titre'
                    this.filterEvent(filterTitre, Media, 'Titre');

                    // manage lightbox: previous, next and close
                    manageLightbox(Media);

                    // aside info total likes
                    const asideLikes = document.querySelector('.aside-likes');
                    const asideTemplate = new Likes(Photographer, Media);
                    asideLikes.innerHTML = asideTemplate.createAsideLikes();
                }
            }
        }
    }

    // add event listner on filter by option
    filterEvent(filter, Media, option) {
        filter.addEventListener('click', () => updateMedia(Media, option, this.$mediaSection));
        filter.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                updateMedia(Media, option, this.$mediaSection);
                closeModalFilterOptions();
                filterSelect.focus();
            }
        });
    }
}
// Create App "FishEye"
const app = new App();

// Router
const currentPage = document.location.pathname;
app.photographerPage();
router(app, currentPage);
