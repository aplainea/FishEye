function router(app, currentPage) {
    let route;
    // Default Error message
    const messageError = "Vous êtes perdu ? Retournons à l'accueil.\nCette URL n'existe pas.";

    switch (currentPage) {
        // Home Page
        case '/index.html':
        case '/FishEye/index.html':
        case '/FishEye/':
            route = app.homePage();
            break;
        // Photographer Page
        case '/src/pages/photographer.html':
        case '/FishEye/src/pages/photographer.html':
            route = app.photographerPage();
            break;
        // Default page (if error, etc.) --> return to Home Page
        default:
            route = app.alertError(messageError);
    }
    return route;
}
