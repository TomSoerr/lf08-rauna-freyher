import nav from '../modules/nav.js';
import main from '../modules/main.js';
import hero from '../modules/hero.js';
import sectionImgText from '../modules/section-img-text.js';
import footer from '../modules/footer.js';
import section from '../modules/section.js';

function load() {
  document.body.append(
    nav(),
    main(
      hero(),
      section([
        'Kontaktformular mit Name E-Mail Telefonnummer Nachricht Datenschutzerklärung Absenden',
      ]),
      sectionImgText(),
    ),
    footer(),
  );
}
export { load };
