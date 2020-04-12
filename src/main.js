import {getUserProfileHtml} from './components/user-profile';
import {getMenuHtml} from './components/menu';
import {getSortHtml} from './components/sort';
import {getContentContainerHtml} from './components/content-container';
import {getFilmCardHtml} from './components/film-card';
import {getButtonShowMoreHtml} from './components/show-more-btn';
import {getExtraFilmCardHtml} from './components/film-card-extra';
import {getDetailsPopupHtml} from './components/details-popup';
import {getFilm} from './mock/film';

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

console.log(films);

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
  render(headerElement, getUserProfileHtml());
  render(mainContainerElement, getMenuHtml());
  render(mainContainerElement, getSortHtml());
  render(mainContainerElement, getContentContainerHtml());

  const filmsContainer = mainContainerElement.querySelector(`.films`);
  const filmsListContainer = filmsContainer.querySelector(`.films-list`);
  const filmsListInnerContainer = filmsContainer.querySelector(`.films-list__container`);
  const topRatedFilmsContainer = filmsContainer.querySelector(`.films-list__container_top-rated`);
  const mostCommentedFilmsContainer = filmsContainer.querySelector(`.films-list__container_most-commented`);

  let filmsCounter = 0;
  for (const film of films) {
    render(filmsListInnerContainer, getFilmCardHtml(film));
    if (++filmsCounter === FILM_CARDS_COUNT) {
      break;
    }
  }

  render(filmsListContainer, getButtonShowMoreHtml());

  for (let i = 0; i < EXTRA_FILM_CARDS_COUNT; i++) {
    render(topRatedFilmsContainer, getExtraFilmCardHtml());
    render(mostCommentedFilmsContainer, getExtraFilmCardHtml());
  }

  render(document.body, getDetailsPopupHtml(films[0]));
};

init();
