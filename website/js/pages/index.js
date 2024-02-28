import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import sectionImgText from '../modules/section-img-text.js';
import footer from '../modules/footer.js';
import productPreview from '../modules/product-preview.js';

function load() {
  document.body.append(
    nav(),
    main(
      hero({
        img: { src: 'index-hero.jpg', alt: 'Hamburger Fernsehturm aus einem Park fotografiert' },
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
        text: 'Erfahre, warum Naturkosmetik die bessere Wahl für Ihre Hautpflege ist, von der Schonung Ihrer Haut bis zum Schutz der Umwelt. Lerne die Kraft von Honig, Propolis und mehr kennen.',
        img: { src: 'warum-naturkosmetik-hero.jpg', alt: 'Orangene Handseife mit einer Orange als Deko im Hintergrund' },
        background: 'ro f',
        buttonObj: {
          text: 'Mehr erfahren',
          href: 'warum-naturkosmetik.html',
          type: 'link',
        },
      }),
      sectionImgText({
        heading: 'Von Bienen und Beauty',
        text: 'Lerne meine Geschichte kennen, von der Kindheit in der Lüneburger Heide bis zu meiner Entscheidung, Naturkosmetik herzustellen. Ein persönlicher Einblick in meine Welt.',
        img: { src: 'ueber-mich-hero.jpg', alt: 'Zwei Hände die eine Creme aus einer Metalldose ziehen' },
        background: 'secondary',
        buttonObj: {
          text: 'Mehr über mich',
          href: 'ueber-mich.html',
          type: 'link',
        },
      }),
      productPreview(),
    ),
    footer(),
  );
}

export { load };
