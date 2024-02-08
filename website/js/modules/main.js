import Helper from '../modules/helper.js';

export default function main(...args) {
  const content = Helper.create('main');
  content.append(...args);
  return content;
}
