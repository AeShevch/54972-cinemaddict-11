/**
 * Returns container html
 * @return {string}
 */
const getContentContainerHtml = () => (
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container films-list__container_top-rated"></div>
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container films-list__container_most-commented"></div>
    </section>
  </section>`
);

export {getContentContainerHtml};
