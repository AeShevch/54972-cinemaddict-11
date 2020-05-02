import AbstractComponent from "./abstract-component";

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

export default class Menu extends AbstractComponent {
  constructor(menu) {
    super();
    this._menu = menu;
  }

  getTemplate() {
    return getMenuHtml(this._menu);
  }
}
