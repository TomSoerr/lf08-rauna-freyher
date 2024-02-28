import nav from '../modules/nav.js';
import main from '../modules/main.js';
import form from '../modules/form.js';
import footer from '../modules/footer.js';
import section from '../modules/section.js';
import Helper from '../modules/helper.js';

const _ = Helper.create;

function load() {
  document.body.append(
    nav(),
    main(
      section(
        [
          _('h1', { text: 'Kontakt' }),
          _('p', {
            text: 'Hast Du Interesse an einem oder mehreren Produkten? Oder hast Du Fragen zu unseren Produkten? Dann schreib uns eine Nachricht! Feedback ist auch erwünscht!',
            class: 'tst-paragraph',
          }),
        ],
        'secondary-2 w r',
      ),
      form(),
    ),
    footer(),
  );
}
export { load };
