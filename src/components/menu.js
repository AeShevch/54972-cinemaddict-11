import {createElement} from "../utils";

/**
 * Returns menu items html
 * @param {Object[]} menu Menu data
 * @return {string}
 */
const getMenuItemsHtml = (menu) => (
  menu.map((item) => {
    const itemCountHtml = item.count ? `<span class="main-navigation__item-count">${item.count}</span>` : ``;
    return `<a href="#${item.anchor}" class="main-navigation__item">${item.text}${itemCountHtml}</a>`;
  }).join(`\n`)
);

/**
 * Returns menu html
 * @param {Object[]} menu Menu data
 * @return {string}
 */
const getMenuHtml = (menu) => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${getMenuItemsHtml(menu)}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

export default class Menu {
  constructor(menu) {
    this._menu = menu;
    this._element = null;
  }

  getTemplate() {
    return getMenuHtml(this._menu);
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
