function createAllPhotographerCard(Photographers, photographersSection) {
    Photographers.forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        photographersSection.appendChild(Template.createPhotographerCard());
    });
}

function createGlobalPhotographerpage(Photographer, photographerPage) {
    const Template = new PhotographerPage(Photographer);
    photographerPage.innerHTML = Template.createPhotographerPage();
}
