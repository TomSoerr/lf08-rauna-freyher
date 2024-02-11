import Helper from './helper.js';
import section from './section.js';

const _ = Helper.create;

export default function sectionImgText(content = {}) {
  const {
    heading = 'undefined',
    text = 'undefined',
    img = { src: 'handseife.webp', alt: 'Handseife' },
    background,
    reverse,
  } = content;

  Helper.pathToMain(img.src);

  let classes = 'tst-grid-2';

  if (background) {
    classes = `${classes} ${background}`;
  }

  if (reverse) {
    classes = `${classes} tst-reverse-order`;
  }

  return section(
    [
      _('div', null, [_('h2', null, [heading]), _('p', null, [text])]),
      _('img', {
        src: `${Helper.pathToMain(window.location.pathname)}img/${img.src}`,
        alt: img.alt,
      }),
    ],
    classes,
  );
}
