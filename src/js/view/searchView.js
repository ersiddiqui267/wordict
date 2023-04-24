class SearchView {
  _parentElement = document.querySelector(`.navbar--form-search`);

  addHandler(callback) {
    this._parentElement.addEventListener(`submit`, function (e) {
      e.preventDefault();
      const query = e.target.querySelector(`.navbar--input-search`).value;
      callback(query);
    });
  }
}

export default new SearchView();
