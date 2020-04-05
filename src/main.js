import {getUserProfileHtml} from "./components/user-profile";
import {getMenuHtml} from "./components/menu";
import {getSortHtml} from "./components/sort";
import {getContentContainerHtml} from "./components/content-container";
import {getFilmCardHtml} from "./components/film-card";
import {getBtnShowMoreHtml} from "./components/show-more-btn";
import {getExtraFilmCardHtml} from "./components/film-card-extra";
import {getDetailsPopupHtml} from "./components/details-popup";

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

  for (let i = 0; i < FILM_CARDS_COUNT; i++) {
    render(filmsListInnerContainer, getFilmCardHtml());
  }
  render(filmsListContainer, getBtnShowMoreHtml());

  for (let i = 0; i < EXTRA_FILM_CARDS_COUNT; i++) {
    render(topRatedFilmsContainer, getExtraFilmCardHtml());
    render(mostCommentedFilmsContainer, getExtraFilmCardHtml());
  }

  render(document.body, getDetailsPopupHtml());
};

init();
