import {createElement} from "../utils/render";

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
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

  /**
   * Sets handler on components element
   * @param {string} type handler type
   * @param {callback} handler Callback function
   * @param {string} [elementSelector] Css selector of element. If selector is unspecified the handler will be attached on the parent element
   */
  setHandler(type, handler, elementSelector) {
    const parentElement = this.getElement();
    let element = parentElement;
    if (elementSelector) {
      element = parentElement.querySelector(elementSelector);
    }

    element.addEventListener(type, handler);
  }
}
