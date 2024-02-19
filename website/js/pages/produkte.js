import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import sectionImgText from '../modules/section-img-text.js';
import footer from '../modules/footer.js';
import productList from '../modules/product-list.js';
import cta from '../modules/cta.js';

function load() {
  document.body.append(
    nav(),
    main(
      hero({
        img: { src: 'produkte-hero.jpg', alt: 'Hero', hidden: true },
        heading: 'Pflegeprodukte mit Persönlichkeit: Made in Hamburg.',
        text: 'Biologisch, effektiv, individuell',
        buttonObj: {
          text: 'Kontakt aufnehmen',
          href: 'kontakt.html',
          type: 'link',
        },
      }),
      productList(),
      cta({
        text: 'Gefallen dir meine Produkte? Dann schreib mir eine Nachricht! Feedback ist auch erwünscht!',
        classes: 'secondary',
        buttonObj: {
          text: 'Nachricht schreiben',
          href: 'kontakt.html',
          type: 'link',
        },
      }),
    ),
    footer(),
  );
}

export { load };
