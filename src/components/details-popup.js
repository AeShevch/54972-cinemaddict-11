/**
 * Adds zero to number that less then 10
 * @param {number} number
 * @return {string}
 */
const addZeroToNumber = (number) => number.toString().length < 2 ? `0` + number : number;

/**
 * Return film details cell
 * @param {(string|array|object)} value Details string, array or date
 * @return {string}
 */
const getFilmDetailsCellHtml = (value) => {
  let str = value;
  if (Array.isArray(value)) {
    str = value.map((valueItem) => `<span class="film-details__genre">${valueItem}</span>`).join(`\n`);
  } else if (value instanceof Date) {
    const day = value.getDay();
    const month = value.toLocaleString(`en`, {month: `long`});
    const year = value.getFullYear();
    str = `${day} ${month} ${year}`;
  }
  return str;
};

/**
 * Returns film details html
 * @param {array} details array of film details
 * @return {string}
 */
const getFilmDetailsTableHtml = (details) => (
  details.map(([detailName, detailValue]) => (
    `<tr class="film-details__row">
       <td class="film-details__term">${detailName}</td>
       <td class="film-details__cell">${getFilmDetailsCellHtml(detailValue)}</td>
     </tr>`
  )).join(`\n`)
);

/**
 * Returns comments html
 * @param {Array.<Object>} comments Array of objects with comments data
 * @return {string}
 */
const getCommentsListHtml = (comments) => (
  comments.map((comment) => (
    `<li class="film-details__comment">
       <span class="film-details__comment-emoji">
         <img src="./images/emoji/${comment.emoji.icon}" width="55" height="55" alt="${comment.emoji.alt}">
       </span>
       <div>
         <p class="film-details__comment-text">${comment.message}</p>
         <p class="film-details__comment-info">
           <span class="film-details__comment-author">${comment.author}</span>
           <span class="film-details__comment-day">
            ${comment.date.getFullYear()}/${addZeroToNumber(comment.date.getMonth())}/${addZeroToNumber(comment.date.getDay())}
            ${addZeroToNumber(comment.date.getHours())}:${addZeroToNumber(comment.date.getMinutes())}
           </span>
           <button class="film-details__comment-delete">Delete</button>
         </p>
       </div>
     </li>`
  )).join(`\n`)
);

/**
 * Returns details popup html
 * @param {object} film Object with film data
 * @return {string}
 */
export const getDetailsPopupHtml = (film) => (
  `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="form-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${film.poster.file}" alt="${film.poster.name}">

            <p class="film-details__age">${film.ageRating}</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${film.name}</h3>
                <p class="film-details__title-original">Original: ${film.nameOriginal}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${film.rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              ${getFilmDetailsTableHtml(Object.entries(film.details))}
            </table>

            <p class="film-details__film-description">
              ${film.description}
            </p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${film.comments.length}</span></h3>

          <ul class="film-details__comments-list">
            ${getCommentsListHtml(film.comments)}
          </ul>

          <div class="film-details__new-comment">
            <div for="add-emoji" class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`
);
