import Helper from './helper.js';

const _ = Helper.create;

export default function picture({ src, alt }) {
  return _('img', {
    src: `${Helper.pathToMain(window.location.pathname)}img/${src}`,
    alt,
  });
}
