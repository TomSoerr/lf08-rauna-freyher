import Helper from '../modules/helper.js';
import button from '../modules/button.js';
import picture from './picture.js';

const _ = Helper.create;

export default function modal({ name, img, price, description, variant }) {
  return _('dialog', { class: 'tst-modal' }, [
    picture({
      src: img.src,
      alt: img.alt,
    }),
    _('div', null, [
      _('h2', null, [name]),
      _('p', { class: 'tst-modal-price' }, [price]),
      _('p', { class: 'tst-modal-description' }, [description]),
      variant
        ? _('ul', null, [
            ...variant.reduce((prev, curr) => {
              prev.push(_('li', null, [curr]));
              return prev;
            }, []),
          ])
        : null,
      _('form', { method: 'dialog' }, [
        button({
          type: 'submit',
          text: 'Close',
          color: 'secondary',
          event: {
            type: 'click',
            listener: (e) => {
              document.body.style.overflow = 'auto';
            },
          },
        }),
      ]),
    ]),
  ]);
}
