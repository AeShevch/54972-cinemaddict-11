import {createElement} from "../utils";

const getNoDataHtml = () => (
  `<section class="films-list"><h2 class="films-list__title">There are no movies in our database</h2></section>`
);

export default class NoData {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getNoDataHtml();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
