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
