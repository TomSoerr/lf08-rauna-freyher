import Helper from '../modules/helper.js';
import button from '../modules/button.js';
import modal from '../modules/modal.js';
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
      // This should be picture funciton
      src: img.src,
      alt: img.alt,
    }),
    _('div', null, [
      _('h2', null, [name]),
      _('p', { class: 'tst-product-card-price' }, [price]),
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
    modal({ name, img, price, description, variant }),
  ]);
}
