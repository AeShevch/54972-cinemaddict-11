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

export const menuItems = getMenuData();
