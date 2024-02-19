import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import sectionImgText from '../modules/section-img-text.js';
import section from '../modules/section.js';
import footer from '../modules/footer.js';

function load() {
  document.body.append(
    nav(),
    main(
      hero({
        img: { src: 'ueber-mich-hero.jpg', alt: 'Hero' },
        heading: 'Pflegeprodukte mit Persönlichkeit: Made in Hamburg.',
        text: 'Biologisch, effektiv, individuell',
        buttonObj: {
          text: 'Kontakt aufnehmen',
          href: 'kontakt.html',
          type: 'link',
        },
      }),
      sectionImgText(
        {
          heading: 'Über mich',
          text: 'Mein Name ist Rauna Freyher und ich erschaffe leidenschaftlich gerne Dinge mit meinen Händen…so Handarbeite ich seit meiner Kindheit und bin auch seit Kindheitstagen ein großer Bienenfreund. <br> Als Kind bin ich schon gerne mit Korbimkern in der Lüneburger Heide mitgelaufen. Ich habe einige Imkerseminare absolviert und vor circa 10 Jahren hatte ich meine ersten eigenen Bienenvölker. <br> Aus dieser Leidenschaft ist eine weitere Liebe gewachsen. Seit ein paar Jahren stelle ich eigene Kosmetikprodukte her. Angefangen habe ich damals, für den Eigengebrauch für meinen Mann und mich festes Duschgel/Shampoo herzustellen. Mich haben die vielen leeren Plastikflaschen von Duschgels und Shampoos genervt. Und ich habe mir gedacht, dass muss doch auch umweltfreundlicher funktionieren. So sind zunächst mein Shampoo und die Handseifen entstanden. <br> Als ich diese an Freunde und Familie verschenkte fand es großen Anklang und es entstand die Nachfrage zum Erwerb dieser Produkte. So begann mein kleines Business und die Produktauswahl wurde nach und nach größer. Einige Produkte habe ich speziell auf Nachfrage entwickelt. Mir ist wichtig, dass alle meine Produkte aus naturnahen, und biologischen Rohstoffen entstehen. Ich teste die Produkte alle selbst und werkel solange bis sie für mich die perfekte Konsistenz und Wirkung haben. Ich nutze möglichst wenig Verpackung. Die Tiegel etc. sind teilweise aus Glas und wiederverwendbar. <br> Die Tiegel aus Kunststoff nehme ich ebenfalls gerne zurück und nutze sie nach Reinigung mehrfach. Nachhaltigkeit, Natürlichkeit und Naturverbundenheit sind für mich und meine Produkte wichtige Schlagwörter. So komme ich in der Herstellung ohne Zusätze von Erdöl, synthetischen Konservierungsmitteln, Mikroplastik und Tierversuchen aus. <br> In meinen Produkten sorgen pflanzliche Öle und Fette für Geschmeidigkeit und gute Verträglichkeit. Es finden Blütenwasser, Kräuterextrakte und ätherische Öle Anwendung als Duftstoffe. <br> Mir ist es wichtig meine Kunden zufrieden zustellen, so kann man mir immer gerne ins Gespräch gehen, wenn bestimmte Hauptprobleme, Unverträglichkeiten oder ähnliches vorliegen und wir entwickeln gemeinsam eine passende Lösung. <br> Die Herstellung von natürlicher Kosmetik ist für mich eine erfüllende Freizeitbeschäftigung, eine Leidenschaft und Lebensfreude.',
        },
      ),

    ),
    footer(),
  );
}

export {
  load,
};

/*

*/
