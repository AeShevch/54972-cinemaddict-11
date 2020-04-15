import {getUserProfileHtml} from './components/user-profile';
import {getMenuHtml} from './components/menu';
import {getSortHtml} from './components/sort';
import {getContentContainerHtml} from './components/content-container';
import {getFilmCardHtml} from './components/film-card';
import {getButtonShowMoreHtml} from './components/show-more-btn';
import {getDetailsPopupHtml} from './components/details-popup';
import {getFilm} from './mock/film';
import {USER_DATA_MOCK} from './mock/user';

const FILM_CARDS_COUNT = 5;
const FILMS_COUNT = 20;
// Film cards in extra blocks count - «Top rated» and «Most commented»
const EXTRA_FILM_CARDS_COUNT = 2;
const mainContainerElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.header`);

const films = [];
for (let i = 0; i < FILMS_COUNT; i++) {
  films.push(getFilm());
}

/**
 * Renders components markup
 * @param {object} container Container for inserting a components markup
 * @param {string} template Component markup
 * @param {string} [place] Insert position (optional)
 */
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const init = () => {
  render(headerElement, getUserProfileHtml(USER_DATA_MOCK));
  render(mainContainerElement, getMenuHtml());
  render(mainContainerElement, getSortHtml());
  render(mainContainerElement, getContentContainerHtml());

  const filmsContainer = mainContainerElement.querySelector(`.films`);
  const filmsListContainer = filmsContainer.querySelector(`.films-list`);
  const filmsListInnerContainer = filmsContainer.querySelector(`.films-list__container`);
  const topRatedFilmsContainer = filmsContainer.querySelector(`.films-list__container_top-rated`);
  const mostCommentedFilmsContainer = filmsContainer.querySelector(`.films-list__container_most-commented`);

  // Renders main film cards
  films.slice(0, FILM_CARDS_COUNT).forEach((film) => render(filmsListInnerContainer, getFilmCardHtml(film)));

  render(filmsListContainer, getButtonShowMoreHtml());

  const makeShowNewFilmsFunc = () => {
    let filmsArr = films.slice().splice(FILM_CARDS_COUNT, FILMS_COUNT - FILM_CARDS_COUNT);
    return () => {
      filmsArr.splice(0, FILM_CARDS_COUNT).forEach((film) => render(filmsListInnerContainer, getFilmCardHtml(film)));
      if (!filmsArr.length) {
        document.querySelector(`.films-list__show-more`).remove();
      }
    };
  };

  const onShowMoreClick = makeShowNewFilmsFunc();

  filmsListContainer.querySelector(`.films-list__show-more`).addEventListener(`click`, onShowMoreClick);

  // Filters films by rating, renders top rated films
  films.slice().sort((a, b) => b.rating - a.rating).slice(0, EXTRA_FILM_CARDS_COUNT).forEach((film) => render(topRatedFilmsContainer, getFilmCardHtml(film)));
  // Filters films by comments count, renders top commented films
  films.slice().sort((a, b) => b.comments.length - a.comments.length).slice(0, EXTRA_FILM_CARDS_COUNT).forEach((film) => render(mostCommentedFilmsContainer, getFilmCardHtml(film)));

  render(document.body, getDetailsPopupHtml(films[0]));
};

init();
