import {render} from "../utils/render";
import NoDataComponent from "../components/no-data";
import FilmsContainerComponent from "../components/films-container";
import TopRatedComponent from "../components/top-rated";
import MostCommentedComponent from "../components/most-commented";
import ButtonShowMoreComponent from "../components/show-more-btn";
import FilmComponent from "../components/film-card";
import PopUpComponent from "../components/details-popup";

const FILM_CARDS_COUNT = 5;
// Film cards in extra blocks count - «Top rated» and «Most commented»
const EXTRA_FILM_CARDS_COUNT = 2;

export class PageController {
  constructor(container) {
    this._container = container.getElement();

    // Components
    this._noDataComponent = new NoDataComponent();
    this._filmsContainerComponent = new FilmsContainerComponent();
    this._topRatedComponent = new TopRatedComponent();
    this._mostCommentedComponent = new MostCommentedComponent();
  }

  render(films) {

    if (!films.length) {
      render(this._container, this._noDataComponent);
      return;
    }

    // Renders films containers
    render(this._container, this._filmsContainerComponent);
    render(this._container, this._topRatedComponent);
    render(this._container, this._mostCommentedComponent);

    // Containers to render films
    const filmsListContainer = this._container.querySelector(`.films-list`);
    const filmsListInnerContainer = this._container.querySelector(`.films-list__container`);
    const topRatedFilmsContainer = this._container.querySelector(`.films-list__container_top-rated`);
    const mostCommentedFilmsContainer = this._container.querySelector(`.films-list__container_most-commented`);

    // Creates show new films function
    const showNewFilms = this._makeShowNewFilmsFunc(films, filmsListInnerContainer);
    showNewFilms();

    // Extra films
    this._sortAndRender(films, this._sortByCommentsCount, mostCommentedFilmsContainer);
    this._sortAndRender(films, this._sortByRating, topRatedFilmsContainer);

    // Show more button
    const buttonShowMoreComponent = new ButtonShowMoreComponent();
    render(filmsListContainer, buttonShowMoreComponent);
    buttonShowMoreComponent.setHandler(`click`, showNewFilms);
  }

  _renderFilm(container, film) {
    const filmCardComponent = new FilmComponent(film);

    render(container, filmCardComponent);

    filmCardComponent.setHandler(`click`, this._openPopup.bind(film), `.film-card__poster`);
    filmCardComponent.setHandler(`click`, this._openPopup.bind(film), `.film-card__title`);
    filmCardComponent.setHandler(`click`, this._openPopup.bind(film), `.film-card__comments`);
  }

  /**
   * Returns show new films function
   * @param {Object[]} films Array of films objects
   * @param {HTMLElement} container
   * @return {function}
   * @private
   */
  _makeShowNewFilmsFunc(films, container) {
    let filmsArr = films.slice();
    return () => {
      filmsArr.splice(0, FILM_CARDS_COUNT).forEach((film) => this._renderFilm(container, film));
      if (!filmsArr.length) {
        document.querySelector(`.films-list__show-more`).remove();
      }
    };
  }

  _openPopup() {
    const closePopup = () => {
      document.removeEventListener(`keyup`, onEscapePress);

      popUpComponent.getElement().remove();
      popUpComponent.removeElement();
    };

    const onEscapePress = (evt) => {
      if (evt.key === `Escape`) {
        closePopup();
      }
    };

    const popUpComponent = new PopUpComponent(this);
    document.body.appendChild(popUpComponent.getElement());
    popUpComponent.setHandler(`click`, closePopup, `.film-details__close-btn`);
    document.addEventListener(`keyup`, onEscapePress);
  }

  _sortByCommentsCount(a, b) {
    return b.comments.length - a.comments.length;
  }

  _sortByRating(a, b) {
    return b.rating - a.rating;
  }

  /**
   * Sorts an array of objects by the specified function and renders the markup to the specified container
   * @param {Object[]} array Array of objects
   * @param {function} sortFunc Function to sort
   * @param {HTMLElement} containerToRender Node to append html to
   * @private
   */
  _sortAndRender(array, sortFunc, containerToRender) {
    array.slice().sort(sortFunc).slice(0, EXTRA_FILM_CARDS_COUNT).forEach((film) => this._renderFilm(containerToRender, film));
  }
}
