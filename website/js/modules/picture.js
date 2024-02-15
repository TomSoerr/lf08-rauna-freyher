import Helper from './helper.js';

const _ = Helper.create;

/**
 * @param {Object} content
 * @param {string} content.src - The source of the image
 * @param {string} content.alt - The alt of the image
 * @returns {HTMLElement}
 */
export default function picture({ src = 'undefined', alt = 'undefined' } = {}) {
  return _('img', {
    src: `${Helper.pathToMain(window.location.pathname)}img/${src}`,
    alt,
    class: 'tst-picture',
  });
}
