import {menuData} from '../mock/menu';

/**
 * Returns menu items html
 * @param {array} menuData The array of objects with menu data
 * @return {string}
 */
const getMenuItemsHtml = (menuData) => (
  menuData.map((item) => {
    const itemCountHtml = item.count ? `<span class="main-navigation__item-count">${item.count}</span>` : ``;
    return `<a href="#${item.anchor}" class="main-navigation__item">${item.text}${itemCountHtml}</a>`;
  }).join(`\n`)
);

/**
 * Returns menu html
 * @return {string}
 */
const getMenuHtml = () => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${getMenuItemsHtml(menuData)}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

export {getMenuHtml};
