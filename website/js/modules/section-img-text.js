import Helper from '../modules/helper.js';

export default function sectionImgText() {
  return Helper.create('section', { class: 'tst-grid-2 tst-section' }, [
    Helper.create('div', { class: 'tst-section-inner' }, [
      Helper.create('div', null, [
        Helper.create('h2', null, 'Über mich'),
        Helper.create(
          'p',
          null,
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit omnis modi provident repellat, autem aut sapiente. Aliquam laborum qui eligendi fugit neque incidunt officia sit, adipisci rerum. Dolore, earum excepturi?',
        ),
      ]),
      Helper.create('img', { src: './img/gesichtsmaske.webp', alt: '' }),
    ]),
  ]);
}
