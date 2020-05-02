import AbstractComponent from "./abstract-component";

const getTopRatedHtml = () => (
  `<section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container films-list__container_top-rated"></div>
  </section>`
);

export default class TopRated extends AbstractComponent {
  getTemplate() {
    return getTopRatedHtml();
  }
}
