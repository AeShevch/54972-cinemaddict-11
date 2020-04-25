import {createElement} from "../utils";

/**
 * Returns container html
 * @return {string}
 */
const getContentContainerHtml = () => (
  `<section class="films"></section>`
);

export default class ContentContainer {
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
