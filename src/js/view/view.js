import spinner from "../../img/spinner.gif";

class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML(`beforeend`, markup);
  }

  _clear() {
    this._parentElement.innerHTML = ``;
  }

  renderSpinner() {
    const markup = `
        <div class="conatiner--spinner mx-auto mt-16 w-24">
            <img class="" src="${spinner}" alt="spinner" />
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
  }
}

export default View;
