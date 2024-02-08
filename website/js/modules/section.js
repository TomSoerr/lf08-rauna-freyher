import Helper from '../modules/helper.js';

export default function section(children, classes) {
  return Helper.create(
    'section',
    { class: classes ? `tst-section ${classes}` : 'tst-section' },
    [Helper.create('div', { class: 'tst-section-inner' }, children)],
  );
}
