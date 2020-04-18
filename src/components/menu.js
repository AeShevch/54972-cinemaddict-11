import {getMenuData} from '../mock/menu';

/**
 * Returns menu items html
 * @return {string}
 */
const getMenuItemsHtml = () => (
  getMenuData().map((item) => {
    const itemCountHtml = item.count ? `<span class="main-navigation__item-count">${item.count}</span>` : ``;
    return `<a href="#${item.anchor}" class="main-navigation__item">${item.text}${itemCountHtml}</a>`;
  }).join(`\n`)
);

/**
 * Returns menu html
 * @return {string}
 */
export const getMenuHtml = () => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${getMenuItemsHtml()}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);
