class PhotographerProfile {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerProfile() {
        /*
        article card ===> Photographer
            a href ===> PhotographerPage
                img ===> PhotographerPicture
                title ===> PhotographerName
                subtitle ===> PhotographerPlace
                description ===> PhotographerTagline
                price ===> PhotographerDailyPrice
    */
        // function PhotographerFactory(data) {
        //   const { name, portrait } = data;
        //   const picture = `assets/photographers/${portrait}`;
        //   function getUserCardDOM() {
        //     const article = document.createElement("article");
        //     const img = document.createElement("img");
        //     img.setAttribute("src", picture);
        //     const h2 = document.createElement("h2");
        //     h2.textContent = name;
        //     article.appendChild(img);
        //     article.appendChild(h2);
        //     return article;
        //   }
        //   return { name, picture, getUserCardDOM };
        // }
    }
}
