import AbstractComponent from "./abstract-component";

/**
 * Returns user profile html
 * @param {object} user User data
 * @return {string}
 */
const getUserProfileHtml = (user) => (
  `<section class="header__profile profile">
    <p class="profile__rating">${user.rating}</p>
    <img class="profile__avatar" src="images/${user.avatar}" alt="Avatar" width="35" height="35">
  </section>`
);

export default class UserProfile extends AbstractComponent {
  constructor(user) {
    super();
    this._user = user;
  }

  getTemplate() {
    return getUserProfileHtml(this._user);
  }
}
