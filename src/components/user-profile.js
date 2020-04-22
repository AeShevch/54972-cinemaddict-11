import {createElement} from "../mock/utils";

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

export default class UserProfileComponent {
  constructor(user) {
    this._user = user;
    this._element = null;
  }

  getTemplate() {
    return getUserProfileHtml(this._user);
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
