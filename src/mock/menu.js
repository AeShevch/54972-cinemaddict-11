/**
 * Returns menu data
 * @return {[{anchor: string, text: string}, {anchor: string, count: string, text: string}, {anchor: string, count: string, text: string}, {anchor: string, count: string, text: string}]}
 */
const getMenuData = () => (
  [
    {
      anchor: `all`,
      text: `All movies`
    },
    {
      anchor: `watchlist`,
      text: `Watchlist`,
      count: `13`
    },
    {
      anchor: `history`,
      text: `History`,
      count: `4`
    },
    {
      anchor: `favorites`,
      text: `Favorites`,
      count: `8`
    }
  ]
);

class MenuItem {
  constructor(menuItem) {
    this.anchor = menuItem.anchor;
    this.text = menuItem.text;
    if (menuItem.count) {
      this.count = menuItem.count;
    }
  }
}

export const menuItems = getMenuData().map((menuItem) => new MenuItem(menuItem));
