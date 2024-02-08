import nav from '../modules/nav.js';
import main from '../modules/main.js';
import sectionImgText from '../modules/section-img-text.js';
import footer from '../modules/footer.js';

function load() {
  document.body.append(
    nav(),
    main(
      sectionImgText(),
      sectionImgText(),
      sectionImgText(),
      sectionImgText(),
      sectionImgText(),
      sectionImgText(),
    ),
    footer(),
  );
}

export { load };
