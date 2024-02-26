import Helper from './helper.js';
import button from './button.js';
import p from './paragraph.js';
import picture from './picture.js';

const _ = Helper.create;

export default function modal({
  name, img, price, description, variant,
}) {
  const descriptionArray = description.split('<br>');

  return _('dialog', { class: 'tst-modal' }, [
    _('div', null, [
      picture({
        src: img.src,
        alt: img.alt,
        hidden: true,
      }),
      _('div', null, [
        _('h2', { text: name }),
        _('p', { class: 'tst-product-price tst-paragraph', text: price }),
        ...p(description),

        variant ? _('h3', { text: 'Varianten' }) : '',
        variant
          ? _('ul', null, [
            ...variant.reduce((prev, curr) => {
              prev.push(_('li', null, [curr]));
              return prev;
            }, []),
          ])
          : '',
        button({
          type: 'link',
          text: 'Kontaktieren',
          href: 'kontakt.html',
        }),
        _('form', { method: 'dialog' }, [
          button({
            type: 'submit',
            text: 'Zurück',
            color: 'secondary',
            event: {
              type: 'click',
              listener: (e) => {
                document.body.style.overflow = 'visible';
              },
            },
          }),
        ]),
      ]),
    ]),
  ]);
}
