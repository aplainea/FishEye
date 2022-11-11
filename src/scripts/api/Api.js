class Api {
  constructor(url) {
    this._url = url;
  }

  // get all data
  async get() {
    try {
      const response = await fetch(this._url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}
