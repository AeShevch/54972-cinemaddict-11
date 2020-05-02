/**
 * Inserts dom-element
 * @param {object} container Container for inserting a components markup
 * @param {object} component Component markup
 * @param {string} [place=beforeend] Insert position (optional)
 */
export const render = (container, component, place = `beforeend`) => {
  switch (place) {
    case `beforeend`:
      container.append(component.getElement());
      break;
    case `afterbegin`:
      container.prepend(component.getElement());
      break;
  }
};

/**
 * Creates DOM-element from Html-string
 * @param {string} template Html-string
 * @return {ChildNode} DOM-element
 */
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};
