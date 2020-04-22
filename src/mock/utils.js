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

/**
 * Adds zero to number that less then 10
 * @param {number} number
 * @return {string}
 */
export const addZeroToNumber = (number) => number.toString().length < 2 ? `0` + number : number;

/**
 * Truncates the string to the specified number of characters
 * @param {string} str String
 * @param {number} maxSize Max length of the string
 * @return {string}
 */
export const truncate = (str, maxSize) => str.length > maxSize ? `${str.slice(0, maxSize - 1)}...` : str;

/**
 * Inserts dom-element
 * @param {object} container Container for inserting a components markup
 * @param {HTMLElement} element Component markup
 * @param {string} [place=beforeend] Insert position (optional)
 */
export const render = (container, element, place = `beforeend`) => {
  switch (place) {
    case `beforeend`:
      container.append(element);
      break;
    case `afterbegin`:
      container.prepend(element);
      break;
  }
};
