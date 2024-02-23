import nav from '../modules/nav.js';
import main from '../modules/main.js';
import section from '../modules/section.js';
import footer from '../modules/footer.js';
import Helper from '../modules/helper.js';
import p from '../modules/paragraph.js';
import button from '../modules/button.js';
import image from '../modules/image.js';

const _ = Helper.create;

function load() {
  document.body.append(
    nav(),
    main(
      _('header', { class: 'tst-section tst-about-me-hero secondary-2' }, [
        _('div', { class: 'tst-section-inner' }, [
          image({ src: 'about-me-hero.png', alt: 'TODO' }),
          _('div', null, [
            _('h1', { text: 'Rauna Freyher' }),
            ...p('Mein Name ist Rauna Freyher und ich erschaffe leidenschaftlich gerne Dinge mit meinen Händen…so Handarbeite ich seit meiner Kindheit und bin auch seit Kindheitstagen ein großer Bienenfreund.'),

            ...p('Als Kind bin ich schon gerne mit Korbimkern in der Lüneburger Heide mitgelaufen. Ich habe einige Imkerseminare absolviert und vor circa 10 Jahren hatte ich meine ersten eigenen Bienenvölker.'),
          ])]),
      ]),

      section([

        _('h2', { text: 'Von Bienen zu Beauty' }),
        ...p('Aus dieser Leidenschaft ist eine weitere Liebe gewachsen. Seit ein paar Jahren stelle ich eigene Kosmetikprodukte her. Angefangen habe ich damals, für den Eigengebrauch für meinen Mann und mich festes Duschgel/Shampoo herzustellen.'),

        _('h2', { text: 'Der Umweltgedanke treibt an' }),
        ...p('Mich haben die vielen leeren Plastikflaschen von Duschgels und Shampoos genervt. Und ich habe mir gedacht, dass muss doch auch umweltfreundlicher funktionieren. So sind zunächst mein Shampoo und die Handseifen entstanden.'),

        _('h2', { text: 'Von Hobby zu Berufung' }),
        ...p('Als ich diese an Freunde und Familie verschenkte fand es großen Anklang und es entstand die Nachfrage zum Erwerb dieser Produkte. So begann mein kleines Business und die Produktauswahl wurde nach und nach größer. Einige Produkte habe ich speziell auf Nachfrage entwickelt. '),

        _('h2', { text: 'Das Herzstück: Naturnahe Inhaltsstoffe' }),
        ...p('Mir ist wichtig, dass alle meine Produkte aus naturnahen, und biologischen Rohstoffen entstehen. Ich teste die Produkte alle selbst und werkel solange bis sie für mich die perfekte Konsistenz und Wirkung haben. Ich nutze möglichst wenig Verpackung. Die Tiegel etc. sind teilweise aus Glas und wiederverwendbar.'),

        _('h2', { text: 'Nachhaltigkeit im Fokus' }),
        ...p('Die Tiegel aus Kunststoff nehme ich ebenfalls gerne zurück und nutze sie nach Reinigung mehrfach. Nachhaltigkeit, Natürlichkeit und Naturverbundenheit sind für mich und meine Produkte wichtige Schlagwörter. So komme ich in der Herstellung ohne Zusätze von Erdöl, synthetischen Konservierungsmitteln, Mikroplastik und Tierversuchen aus.'),

        _('h2', { text: 'Die Kraft der Natur in jedem Produkt' }),
        ...p('In meinen Produkten sorgen pflanzliche Öle und Fette für Geschmeidigkeit und gute Verträglichkeit. Es finden Blütenwasser, Kräuterextrakte und ätherische Öle Anwendung als Duftstoffe.'),

        _('h2', { text: 'Im Dialog mit der Community' }),
        ...p('Mir ist es wichtig meine Kunden zufrieden zustellen, so kann man mir immer gerne ins Gespräch gehen, wenn bestimmte Hauptprobleme, Unverträglichkeiten oder ähnliches vorliegen und wir entwickeln gemeinsam eine passende Lösung.'),

        _('h2', { text: 'Meine Philosophie' }),
        ...p('Die Herstellung von natürlicher Kosmetik ist für mich eine erfüllende Freizeitbeschäftigung, eine Leidenschaft und Lebensfreude.'),

      ], 'tst-about-me small f'),

      section([
        _('h2', { text: 'Habe ich dein Interesse geweckt?' }),
        _('div', { class: 'tst-about-me-cta' }, [
          button({
            text: 'Kontakt aufnehmen',
            href: 'kontakt.html',
            type: 'link',
          }),
          button({
            text: 'Produkte entdecken',
            href: 'produkte.html',
            type: 'link',
          }),
        ])], 'tst-about-me secondary small'),

    ),
    footer(),
  );
}

export {
  load,
};
