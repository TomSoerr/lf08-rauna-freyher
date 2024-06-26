import Helper from '../modules/helper.js';
import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import section from '../modules/section.js';
import footer from '../modules/footer.js';
import p from '../modules/paragraph.js';
import picture from '../modules/picture.js';

const _ = Helper.create;

const elEvent = {
  type: 'click',
  listener: (e) => {
    e.target.parentElement.querySelectorAll('h2').forEach((h2) => {
      if (h2 !== e.target) {
        h2.classList.remove('tst-faq-open');
      }
    });
    console.log();
    e.target.classList.toggle('tst-faq-open');
  },
};

function load() {
  document.body.append(
    nav(),
    main(
      hero({
        img: { src: 'warum-naturkosmetik-hero.jpg', alt: 'Bild von einem volksdorfer Wald mit Blumen auf einer Lichtung' },
        heading: 'Warum Naturkosmetik?',
        text: 'Hier findest Du antworten auf häufig gestellte Fragen.',
        buttonObj: {
          text: 'Stell mir eine Frage',
          href: 'kontakt.html',
          type: 'link',
        },
      }),
      section([
        _('h2', { text: 'Warum Naturkosmetik?' }, null, [elEvent]),
        _('div', null, p('Die Verwendung von Naturkosmetik bietet zahlreiche Vorteile, die sowohl für die Haut als auch für die Umwelt relevant sind. Im Gegensatz zu herkömmlichen Kosmetikprodukten, die oft synthetische Inhaltsstoffe, Parabene und künstliche Duftstoffe enthalten, setzt Naturkosmetik auf natürliche und biologisch abbaubare Substanzen. Naturkosmetik verzichtet auf aggressive Chemikalien, die Hautreizungen und allergische Reaktionen auslösen können. <br> Stattdessen enthalten diese Produkte natürliche Inhaltsstoffe wie Pflanzenextrakte, ätherische Öle und Kräuter, die die Haut schonend pflegen und mit wichtigen Nährstoffen versorgen. Außerdem enthalten viele herkömmliche Kosmetikprodukte chemische Substanzen, die im Verdacht stehen, langfristig negative Auswirkungen auf die Gesundheit zu haben. Naturkosmetik setzt hingegen auf Inhaltsstoffe, die in der Regel gut verträglich sind und keine schädlichen Rückstände in der Haut hinterlassen.')),
        _('hr'),

        _('h2', { text: 'Welche Bienenprodukte sind in der Naturkosmetik?' }, null, [elEvent]),
        _(
          'div',
          null,
          [
            ...p('Bienenprodukte in Naturkosmetik entfalten ihre beeindruckenden Vorteile für Haut und Haare auf faszinierende Weise. Diese Schätze der Bienenwelt – Honig, Propolis, Gelee Royal und Bienenwachs – sind nicht nur charakteristisch, sondern auch äußerst vorteilhaft für die Schönheitspflege. <br> Betrachten wir zunächst den goldenen Nektar: Honig. Nicht nur als köstliches Süßungsmittel bekannt, sondern auch als Feuchtigkeitsspender für die Haut. Honig zieht Feuchtigkeit an und hält sie fest, was der Haut einen natürlichen Glanz verleiht. Gleichzeitig wirkt er beruhigend und entzündungshemmend, ideal für trockene Hauttypen. Dann haben wir Propolis, das "Bienenharz". Als natürliches Antibiotikum der Bienen ist es ein Kraftpaket für die Haut. Es beruhigt, bekämpft Entzündungen und zeigt sogar antibakterielle Eigenschaften. Eine ausgezeichnete Wahl für unreine Haut, um für Klarheit zu sorgen.'),

            picture({ src: 'propolis.jpg', alt: 'Propolis' }),
            ...p('Gelee Royal, der königliche Saft der Bienen, ist wie ein Jungbrunnen für die Haut. Reich an Vitaminen, Aminosäuren und Proteinen fördert es die Zellerneuerung und unterstützt die Hautelastizität, was zu einem frischen Teint führt.'),

            picture({
              src: 'gelee-royal.jpg',
              alt: 'Gelee Royal',
              caption: [

                _('a', { href: 'https://commons.wikimedia.org/wiki/File:Weiselzellen_68a.jpg', text: 'By Waugsberg' }),
                _('span', { text: ' licensed under the ' }),
                _('a', { href: 'https://creativecommons.org/licenses/by-sa/3.0/de/legalcode.de', text: 'Creative Commons BY-SA' }),

              ],
            }),
            ...p('Bienenwachs agiert als Baumeister in der Naturkosmetik. Es bildet eine schützende Barriere auf der Haut, ohne sie zu ersticken, und sorgt so für Geschmeidigkeit und Nährstoffversorgung. ')],
        ),
        _('hr'),
        _('h2', { text: 'Welche Duftstoffe sind in der Naturkosmetik' }, null, [elEvent]),
        _('div', null, [
          ...p('Ein wesentlicher Vorzug von Blütenwassern liegt in ihrer hautfreundlichen Natur. Sie enthalten Spuren von ätherischen Ölen, Antioxidantien und anderen pflanzlichen Wirkstoffen, die die Haut beleben, beruhigen und hydratisieren können. Rosenwasser beispielsweise ist für seine feuchtigkeitsspendenden und entzündungshemmenden Eigenschaften bekannt und eignet sich besonders gut für empfindliche Haut. <br> Die Vielfalt der verfügbaren Blütenwasser ermöglicht es, Produkte an individuelle Bedürfnisse anzupassen. Kamillenwasser wirkt beruhigend und eignet sich gut für gereizte Haut, während Lavendelwasser erfrischend und ausgleichend wirken kann. <br> Ätherische Öle sind die aromatischen Juwelen der Naturkosmetik, die nicht nur herrlich duften, sondern auch erstaunliche Vorteile für Haut und Sinne bieten. Diese konzentrierten Pflanzenessenzen werden durch Dampfdestillation oder Kaltpressung aus Blüten, Blättern, Früchten oder anderen Pflanzenteilen gewonnen und sind in der Naturkosmetik wegen ihrer vielfältigen Eigenschaften so beliebt.'),

          picture({ src: 'essential-oils.jpg', alt: 'Blütenwasser' }),

          ...p('Ein Hauptvorteil ätherischer Öle liegt in ihrer Fähigkeit, die Haut zu pflegen. Sie können feuchtigkeitsspendend, beruhigend oder sogar entzündungshemmend wirken. Lavendelöl beispielsweise ist für seine beruhigenden Eigenschaften bekannt, während Teebaumöl für seine antibakteriellen Kräfte geschätzt wird, was es zu einer hervorragenden Wahl für die Pflege unreiner Haut macht.')]),
        _('hr'),
      ], 'tst-faq small'),

    ),
    footer(),
  );
}

export { load };
