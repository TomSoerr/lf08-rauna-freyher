import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import sectionImgText from '../modules/section-img-text.js';
import footer from '../modules/footer.js';
import productList from '../modules/product-list.js';

function load() {
  document.body.append(
    nav(),
    main(hero(), productList(), sectionImgText()),
    footer(),
  );
}

export { load };
