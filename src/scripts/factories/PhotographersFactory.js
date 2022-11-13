class PhotographersFactory {
    constructor(data, type) {
        // Photographer
        if (type === 'PhotographerApi') {
            return new Photographer(data);
        } else {
            throw 'Unknown type';
        }
    }
}
