class MediaApi extends Api {
    constructor(url) {
        super(url);
    }

    // Get all data media by photographer
    async getAllMediaByPhotographer(photographerId) {
        try {
            const data = await this.get();
            return data.media.filter((e) => e.photographerId === photographerId);
        } catch (error) {
            console.log(error);
        }
    }

    // get a photographer
    async getMediaByTitle(mediatitle) {
        try {
            const data = await this.get();
            return data.media.find((e) => e.title === mediatitle);
        } catch (error) {
            console.log(error);
        }
    }
}
