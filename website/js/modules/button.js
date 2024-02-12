import Helper from './helper.js';

const _ = Helper.create;

/**
 * @param {('link'|'button'|'submit')} type - The type attribute
 * @param {string} text - The textContent
 * @param {string} href - The href attribute should only include the filename (only pagelinks)
 * @param {('undefined' | '_blank')} target - The target attribute
 * @param {Object} event - The event object
 * @param {string} event.type - The event type
 * @param {function} event.listener - The event listener
 * @param {string} color - The color of the button
 */
export default function picture({
  text,
  href,
  type,
  target = '',
  event,
  color = 'accent',
}) {
  if (type === 'link') {
    return _('a', {
      href: Helper.relativPath(window.location.pathname, href),
      target,
      text,
      class: `tst-button ${color}`,
    });
  }

  return _(
    'button',
    {
      type,
      text,
      class: `tst-button ${color}`,
    },
    null,
    [event],
  );
}