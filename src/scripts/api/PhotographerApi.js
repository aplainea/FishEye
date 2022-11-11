class PhotographerApi extends Api {
    constructor(url) {
        super(url);
    }

    // Get all photographers
    async getPhotographers() {
        try {
            const data = await this.get();
            return data.photographers;
        } catch (error) {
            console.log(error);
        }
    }

    // get a photographer
    async getPhotographer(photographerId) {
        try {
            const data = await this.get();
            return data.photographers.find((e) => e.id === photographerId);
        } catch (error) {
            console.log(error);
        }
    }
}
