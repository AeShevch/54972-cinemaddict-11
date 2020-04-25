import {createElement} from "../utils";

const getTopRatedHtml = () => (
  `<section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container films-list__container_top-rated"></div>
  </section>`
);

export default class TopRated {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getTopRatedHtml();
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
