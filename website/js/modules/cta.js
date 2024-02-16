import Helper from './helper.js';
import section from './section.js';
import button from './button.js';

const _ = Helper.create;

export default function cta({ text, buttonObj, classes }) {
  return section(
    [_('p', { text, class: 'tst-paragraph' }), button(buttonObj)],
    'tst-cta' + (classes ? ` ${classes}` : ''),
  );
}
