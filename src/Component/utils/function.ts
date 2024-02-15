/**
 * Truncates a given text to a specified maximum length.
 *
 * @param {string} txt - The input text to be truncated.
 * @param {number} maxLength - The maximum length of the truncated text.
 * @returns {string} - The truncated text.
 */

export function txtSlicer(txt: string, maxLength: number = 100) {
  if (txt.length >= maxLength) return `${txt.slice(0, maxLength)} ...`;
  return txt;
}
export function hSlicer(txt: string, maxLength: number = 15) {
  if (txt.length >= maxLength) return `${txt.slice(0, maxLength)} ...`;
  return txt;
}
