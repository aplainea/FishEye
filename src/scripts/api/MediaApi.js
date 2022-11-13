class MediaApi extends Api {
    constructor(url) {
        super(url);
    }

    // Get all medias
    // async getMedias() {
    //     try {
    //         const data = await this.get();
    //         return data.photograpers;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // Get all data media by photographer
    // async getMedia(photograperId) {
    //     try {
    //         const data = await this.get();
    //         return data.media.filter((e) => e.photograperId === photograperId);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}
