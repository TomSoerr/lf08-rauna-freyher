import Helper from '../modules/helper.js';

const _ = Helper.create;

export default function sectionImgText() {
  return _('header', { class: 'tst-hero-1' }, [
    _('div', null, [_('h1', null, 'Naturkosmetik aus eigener Herstellung')]),
  ]);
}
