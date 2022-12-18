import { PhotographerCard } from '../templates/PhotographerCard.js';
import { PhotographerPage } from '../templates/PhotographerPage.js';

export function createAllPhotographerCard(Photographers, photographersSection) {
    Photographers.forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        photographersSection.appendChild(Template.createPhotographerCard());
    });
}

export function createGlobalPhotographerpage(Photographer, photographerPage) {
    const Template = new PhotographerPage(Photographer);
    photographerPage.innerHTML = Template.createPhotographerPage();
}
