/**
 * Returns user profile html
 * @param {object} user User data
 * @return {string}
 */
export const getUserProfileHtml = (user) => (
  `<section class="header__profile profile">
    <p class="profile__rating">${user.rating}</p>
    <img class="profile__avatar" src="images/${user.avatar}" alt="Avatar" width="35" height="35">
  </section>`
);
