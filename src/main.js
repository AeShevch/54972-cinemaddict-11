import UserProfileComponent from "./components/user-profile";
import MenuComponent from "./components/menu";
import SortComponent from "./components/sort";
import ContainerComponent from "./components/content-container";
import FilmComponent from "./components/film-card";
import ButtonShowMoreComponent from "./components/show-more-btn";
import PopUpComponent from "./components/details-popup";
import {films} from "./mock/film";
import {user} from "./mock/user";
import {menuItems} from "./mock/menu";
import {render} from "./mock/utils";

const FILM_CARDS_COUNT = 5;
// Film cards in extra blocks count - «Top rated» and «Most commented»
const EXTRA_FILM_CARDS_COUNT = 2;
const mainContainerElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.header`);

const sortByCommentsCount = (a, b) => b.comments.length - a.comments.length;
const sortByRating = (a, b) => b.rating - a.rating;

/**
 * Sorts an array of objects by the specified function and renders the markup to the specified container
 * @param {array} array Array of objects
 * @param {function} sortFunc Function to sort
 * @param {HTMLElement} containerToRender Node to append html to
 */
const sortAndRender = (array, sortFunc, containerToRender) => {
  array.slice().sort(sortFunc).slice(0, EXTRA_FILM_CARDS_COUNT).forEach((film) => renderFilm(containerToRender, film));
};

// Найдите обложку фильма, заголовок и элемент с количеством комментариев в компоненте
// карточки фильма и кнопку закрытия попапа (крестик) во втором компоненте
// (не нужно ходить за ними в document, используйте метод getElement).
// Навесьте на них пустые обработчики события click.
//
//   Реализуйте в добавленных обработчиках показ и скрытие
//   попапа с подробной информацией о фильме с помощью appendChild и removeChild.


const renderFilm = (container, film) => {
  const filmCardComponent = new FilmComponent(film);

  render(container, filmCardComponent.getElement());

  const cardPosterElement = filmCardComponent.getElement().querySelector(`.film-card__poster`);
  const cardTitleElement = filmCardComponent.getElement().querySelector(`.film-card__title`);
  const cardCommentsElement = filmCardComponent.getElement().querySelector(`.film-card__comments`);

  const openPopup = () => {
    const closePopup = () => {
      popupCloseButtonElement.removeEventListener(`click`, closePopup);
      popUpComponent.getElement().remove();
      popUpComponent.removeChild();
    };
    const popUpComponent = new PopUpComponent(film);
    document.body.appendChild(popUpComponent.getElement());
    const popupCloseButtonElement = popUpComponent.getElement().querySelector(`.film-details__close-btn`);

    popupCloseButtonElement.addEventListener(`click`, closePopup);
  };

  cardPosterElement.addEventListener(`click`, openPopup);
  cardTitleElement.addEventListener(`click`, openPopup);
  cardCommentsElement.addEventListener(`click`, openPopup);

};

const renderContainer = () => {
  render(headerElement, new UserProfileComponent(user).getElement());
  render(mainContainerElement, new MenuComponent(menuItems).getElement());
  render(mainContainerElement, new SortComponent().getElement());
  render(mainContainerElement, new ContainerComponent().getElement());

  const filmsContainer = mainContainerElement.querySelector(`.films`);
  const filmsListContainer = filmsContainer.querySelector(`.films-list`);
  const filmsListInnerContainer = filmsContainer.querySelector(`.films-list__container`);
  const topRatedFilmsContainer = filmsContainer.querySelector(`.films-list__container_top-rated`);
  const mostCommentedFilmsContainer = filmsContainer.querySelector(`.films-list__container_most-commented`);

  // const makeShowNewFilmsFunc = () => {
  //   let filmsArr = films.slice();
  //   return () => {
  //     filmsArr.splice(0, FILM_CARDS_COUNT).forEach((film) => renderFilm(filmsListInnerContainer, film));
  //     if (!filmsArr.length) {
  //       document.querySelector(`.films-list__show-more`).remove();
  //     }
  //   };
  // };
  //
  // const showNewFilms = makeShowNewFilmsFunc();
  // showNewFilms();

  sortAndRender(films, sortByCommentsCount, mostCommentedFilmsContainer);
  sortAndRender(films, sortByRating, topRatedFilmsContainer);

  render(filmsListContainer, new ButtonShowMoreComponent().getElement());

  // filmsListContainer.querySelector(`.films-list__show-more`).addEventListener(`click`, showNewFilms);

  // render(document.body, new PopUpComponent(films[0]).getElement());

};

renderContainer();
