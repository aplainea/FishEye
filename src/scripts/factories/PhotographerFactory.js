class PhotographerFactory {
  constructor(data, type) {
    if (type === "Image") {
      return new Image(data);
    } else if (type === "Video") {
      return new Video(data);
    } else {
      throw "ERROR: unknown type format. Available: Image or Video";
    }
  }
}

// https://github.com/OpenClassrooms-Student-Center/Utilisez-des-design-patterns-en-JavaScript/blob/partie-2/chapitre-2-fin/js/App.js

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
