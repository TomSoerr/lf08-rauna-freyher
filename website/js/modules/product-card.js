import Helper from './helper.js';
import button from './button.js';
import modal from './modal.js';
import picture from './picture.js';

const _ = Helper.create;

export default function productCard({
  name,
  img,
  price,
  description,
  variant,
}) {
  return _('section', { class: 'tst-product-card' }, [
    picture({
      src: img.src,
      alt: img.alt,
      hidden: true,
    }),
    _('div', null, [
      _('h2', null, [name]),
      _('p', { class: 'tst-product-price' }, [price]),
      button({
        type: 'button',
        text: 'Details',
        color: 'secondary',
        event: {
          type: 'click',
          listener: (e) => {
            e.target.parentElement.parentElement.lastElementChild.showModal();
            document.body.style.overflow = 'hidden';
          },
        },
      }),
    ]),
    modal({
      name, img, price, description, variant,
    }),
  ]);
}
