import {createElement} from "../mock/utils";

/**
 * Returns container html
 * @return {string}
 */
export const getContentContainerHtml = () => (
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container films-list__container_top-rated"></div>
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container films-list__container_most-commented"></div>
    </section>
  </section>`
);

export default class ContainerComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return getContentContainerHtml();
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
