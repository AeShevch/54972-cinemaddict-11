import AbstractComponent from "./abstract-component";

const getMostCommentedHTML = () => (
  `<section class="films-list--extra">
     <h2 class="films-list__title">Most commented</h2>
     <div class="films-list__container films-list__container_most-commented"></div>
   </section>`
);

export default class MostCommented extends AbstractComponent {
  getTemplate() {
    return getMostCommentedHTML();
  }
}
