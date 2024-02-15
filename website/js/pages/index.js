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
      hero({
        img: { src: 'index-hero.jpg', alt: 'Hero' },
        heading:
          'Naturnah un mit Hand maakt: Kiek mol, wat Rauna in Hamborg schafft.',
        text: 'Handgemachte, individuelle Naturkosmetik aus Hamburg',
        buttonObj: { text: 'Zu den Produkten', link: 'about.html' },
      }),
      sectionImgText({
        heading: 'Warum Naturkosmetik?',
        text: 'Erfahren sie mehr über meine Gründe',
        img: { src: 'body-mousse.webp', alt: 'Handseife' },
      }),
      sectionImgText({
        heading: 'Meine Produkte',
        text: 'Erfahren sie mehr über meine Produkte',
        reverse: true,
        background: 'secondary',
      }),
      sectionImgText({
        heading: 'Über mich',
        text: 'Erfahren sie mehr über mich',
      }),
    ),
    footer(),
  );
}

export { load };
