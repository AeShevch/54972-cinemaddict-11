import {createElement, truncate} from "../utils";

const DESCRIPTION_MAX_SIZE = 140;

const getCommentCountString = (count) => {
  switch (count) {
    case 0:
      return `no comments`;
    case 1:
      return `${count} comment`;
    default:
      return `${count} comments`;
  }
};

/**
 * Returns film card html
 * @param {object} film Object with film data
 * @return {string}
 */
const getFilmCardHtml = (film) => (
  `<article class="film-card">
     <h3 class="film-card__title">${film.name}</h3>
     <p class="film-card__rating">${film.rating}</p>
     <p class="film-card__info">
       <span class="film-card__year">${film.releaseDate.getFullYear()}</span>
       <span class="film-card__duration">${film.runtime}</span>
       <span class="film-card__genre">${film.genres.join(`, `)}</span>
     </p>
     <img src="./images/posters/${film.poster.file}" alt="${film.poster.alt}" class="film-card__poster">
     <p class="film-card__description">${truncate(film.description, DESCRIPTION_MAX_SIZE)}</p>
     <a class="film-card__comments">${getCommentCountString(film.comments.length)}</a>
     <form class="film-card__controls">
       <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
       <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
       <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
     </form>
   </article>`
);

export default class FilmCard {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  getTemplate() {
    return getFilmCardHtml(this._film);
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
