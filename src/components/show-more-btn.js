import AbstractComponent from "./abstract-component";

/**
 * Returns show more button html
 * @return {string}
 */
const getButtonShowMoreHtml = () => (
  `<button class="films-list__show-more">Show more</button>`
);

export default class ButtonShowMore extends AbstractComponent {
  getTemplate() {
    return getButtonShowMoreHtml();
  }
}
