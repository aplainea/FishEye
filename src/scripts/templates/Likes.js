class Likes {
    constructor(photographer, medias) {
        this._photographer = photographer;
        this._medias = medias;
    }

    getTotalLikes() {
        return this._medias.reduce(
            (previousValue, currentValue) => previousValue + currentValue.likes,
            0,
        );
    }

    createAsideLikes() {
        const aside = `
            <span class="aside__total-likes">
                <span id="total-likes">${this.getTotalLikes()}</span> <i class="fa-solid fa-heart" aria-label="likes"></i>
            </span>
            <span class="aside__daily-price">
                ${this._photographer.dailyPrice}
            </span>
        `;
        return aside;
    }
}
