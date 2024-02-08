import Helper from '../modules/helper.js';

export default function sectionImgText() {
  return Helper.create('header', { class: 'tst-hero-1' }, [
    Helper.create('div', null, [
      Helper.create('h1', null, 'Naturkosmetik aus eigener Herstellung'),
    ]),
  ]);
}
