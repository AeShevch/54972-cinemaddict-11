import AbstractComponent from "./abstract-component";

/**
 * Returns container html
 * @return {string}
 */
const getContentContainerHtml = () => (
  `<section class="films"></section>`
);

export default class ContentContainer extends AbstractComponent {
  getTemplate() {
    return getContentContainerHtml();
  }
}
