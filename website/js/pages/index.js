import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import sectionImgText from '../modules/section-img-text.js';
import footer from '../modules/footer.js';
// TODO: Kundenrezeption
function load() {
  document.body.append(
    nav(),
    main(
      hero(),
      sectionImgText({
        heading: 'Warum Naturkosmetik?',
        text: 'Erfahren sie mehr über meine Gründe',
        img: { src: 'body-mousse.webp', alt: 'Handseife' },
      }),
      sectionImgText({
        heading: 'Meine Produkte',
        text: 'Erfahren sie mehr über meine Produkte',
        reverse: true,
        background: 'tst-section-color-1',
      }),
      sectionImgText({
        heading: 'Über mich',
        text: 'Erfahren sie mehr über mich',
        background: 'tst-section-color-2',
      }),
      sectionImgText({ reverse: true }),
      sectionImgText(),
      sectionImgText({ reverse: true }),
    ),
    footer(),
  );
}

export { load };
