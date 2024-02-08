import Helper from '../modules/helper.js';
import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import section from '../modules/section.js';
import sectionImgText from '../modules/section-img-text.js';
import footer from '../modules/footer.js';

const path = `${Helper.absolutePath(
  window.location.pathname,
  window.location.origin,
)}data/produkte.json`;

const dataJson = await fetch(path, {
  method: 'GET',

  mode: 'cors',
});
const data = await dataJson.json();

function load() {
  document.body.append(
    nav(),
    main(hero(), section([data.produkt1]), sectionImgText()),
    footer(),
  );
}

export { load };
