import {getUserProfileHtml} from './components/user-profile';
import {getMenuHtml} from './components/menu';
import {getSortHtml} from './components/sort';
import {getContentContainerHtml} from './components/content-container';
import {getFilmCardHtml} from './components/film-card';
import {getButtonShowMoreHtml} from './components/show-more-btn';
import {getDetailsPopupHtml} from './components/details-popup';
import {films} from './mock/film';
import {getUserData} from './mock/user';

const FILM_CARDS_COUNT = 5;
// Film cards in extra blocks count - «Top rated» and «Most commented»
const EXTRA_FILM_CARDS_COUNT = 2;
const mainContainerElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.header`);

/**
 * Renders components markup
 * @param {object} container Container for inserting a components markup
 * @param {string} template Component markup
 * @param {string} [place] Insert position (optional)
 */
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const sortByCommentsCount = (a, b) => b.comments.length - a.comments.length;
const sortByRating = (a, b) => b.rating - a.rating;

/**
 * Sorts an array of objects by the specified function and renders the markup to the specified container
 * @param {array} array Array of objects
 * @param {function} sortFunc Function to sort
 * @param {HTMLElement} containerToRender Node to append html to
 */
const sortAndRender = (array, sortFunc, containerToRender) => {
  array.slice().sort(sortFunc).slice(0, EXTRA_FILM_CARDS_COUNT).forEach((film) => render(containerToRender, getFilmCardHtml(film)));
};

const init = () => {
  render(headerElement, getUserProfileHtml(getUserData()));
  render(mainContainerElement, getMenuHtml());
  render(mainContainerElement, getSortHtml());
  render(mainContainerElement, getContentContainerHtml());

  const filmsContainer = mainContainerElement.querySelector(`.films`);
  const filmsListContainer = filmsContainer.querySelector(`.films-list`);
  const filmsListInnerContainer = filmsContainer.querySelector(`.films-list__container`);
  const topRatedFilmsContainer = filmsContainer.querySelector(`.films-list__container_top-rated`);
  const mostCommentedFilmsContainer = filmsContainer.querySelector(`.films-list__container_most-commented`);

  const makeShowNewFilmsFunc = () => {
    let filmsArr = films.slice();
    return () => {
      filmsArr.splice(0, FILM_CARDS_COUNT).forEach((film) => render(filmsListInnerContainer, getFilmCardHtml(film)));
      if (!filmsArr.length) {
        document.querySelector(`.films-list__show-more`).remove();
      }
    };
  };

  const showNewFilms = makeShowNewFilmsFunc();
  showNewFilms();

  render(filmsListContainer, getButtonShowMoreHtml());

  filmsListContainer.querySelector(`.films-list__show-more`).addEventListener(`click`, showNewFilms);

  sortAndRender(films, sortByCommentsCount, mostCommentedFilmsContainer);
  sortAndRender(films, sortByRating, topRatedFilmsContainer);

  render(document.body, getDetailsPopupHtml(films[0]));
};

init();
