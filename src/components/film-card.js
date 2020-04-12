const DESCRIPTION_MAX_SIZE = 140;
const truncate = (str, maxSize) => (str.length > maxSize) ? str.slice(0, maxSize) + `...` : str;

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
       <span class="film-card__year">${film.details[`Release Date`].year}</span>
       <span class="film-card__duration">${film.duration}</span>
       <span class="film-card__genre">${film.details.Genres.join(`, `)}</span>
     </p>
     <img src="./images/posters/${film.poster}" alt="${film.name}" class="film-card__poster">
     <p class="film-card__description">${truncate(film.description, DESCRIPTION_MAX_SIZE)}</p>
     <a class="film-card__comments">${film.comments.length} comments</a>
     <form class="film-card__controls">
       <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
       <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
       <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
     </form>
   </article>`
);

export {getFilmCardHtml};
