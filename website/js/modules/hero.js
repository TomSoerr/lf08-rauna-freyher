import Helper from './helper.js';
import picture from './picture.js';
import button from './button.js';

const _ = Helper.create;

/**
 * @param {Object} content
 * @param {string} content.heading - The heading of the hero
 * @param {string} content.text - The text of the hero
 * @param {Object} content.img - The image of the hero
 * @param {string} content.img.src - The source of the image
 * @param {string} content.img.alt - The alt of the image
 * @param {Object} content.button - The button of the hero
 * @param {string} content.button.text - The text of the button
 * @param {string} content.button.href - The link of the button
 */
export default function sectionImgText({
  heading = 'undefined',
  text = 'undefined',
  img = {
    src: 'index-hero.jpg',
    alt: 'Hamburger Fernsehturm aus einem Park fotografiert',
    hidden: false,
  },
  buttonObj = '',
} = {}) {
  return _('header', { class: 'tst-hero tst-section secondary-2 w' }, [
    _('div', { class: 'tst-section-inner' }, [
      _('h1', null, [heading]),
      picture(img),
      _('div', null, [
        _('p', null, [text]),
        buttonObj ? button(buttonObj) : '',
      ]),
    ]),
  ]);
}
