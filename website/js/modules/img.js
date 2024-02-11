import Helper from './helper';

const _ = Helper.create;

export default function img({ src, alt }) {
  return _('img', { src, alt });
}
