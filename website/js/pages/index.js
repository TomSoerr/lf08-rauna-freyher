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
        buttonObj: {
          text: 'Zu den Produkten',
          href: 'produkte.html',
          type: 'link',
        },
      }),
      sectionImgText({
        heading: 'Warum Naturkosmetik?',
        text: 'Erfahren sie mehr über meine Gründe',
        img: { src: 'warum-naturkosmetik-hero.jpg', alt: 'Handseife' },
        background: 'f r',
        buttonObj: {
          text: 'Mehr erfahren',
          href: 'warum-naturkosmetik.html',
          type: 'link',
        },
      }),
      sectionImgText({
        heading: 'Meine Produkte',
        text: 'Erfahren sie mehr über meine Produkte',
        img: { src: 'produkte-hero.jpg', alt: 'Handseife' },
        reverse: true,
        background: 'secondary f',
        buttonObj: {
          text: 'Zu den Produkten',
          href: 'produkte.html',
          type: 'link',
        },
      }),
      sectionImgText({
        heading: 'Über mich',
        text: 'Erfahren sie mehr über mich',
        img: { src: 'ueber-mich-hero.jpg', alt: 'Handseife' },
        background: 'f r',
        buttonObj: {
          text: 'Mehr über mich',
          href: 'ueber-mich.html',
          type: 'link',
        },
      }),
    ),
    footer(),
  );
}

export { load };
