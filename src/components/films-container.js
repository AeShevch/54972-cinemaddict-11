import AbstractComponent from "./abstract-component";

/**
 * Returns main films container html
 * @return {string}
 */
const getFilmsHtml = () => (
  `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
   </section>`
);

export default class FilmsContainer extends AbstractComponent {
  getTemplate() {
    return getFilmsHtml();
  }
}
