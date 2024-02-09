import Helper from './helper.js';
import section from './section.js';

export default function sectionImgText(content = {}) {
  const { text, img, background, reverse } = content;

  return section(
    [
      Helper.create('div', null, [
        Helper.create('h2', null, 'Über mich'),
        Helper.create(
          'p',
          null,
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit omnis modi provident repellat, autem aut sapiente. Aliquam laborum qui eligendi fugit neque incidunt officia sit, adipisci rerum. Dolore, earum excepturi?',
        ),
      ]),
      Helper.create('img', { src: './img/gesichtsmaske.webp', alt: '' }),
    ],
    'tst-grid-2',
  );
}
