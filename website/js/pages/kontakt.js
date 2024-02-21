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
            text: 'Hast du Interesse an einem order mehreren Produkte? Oder hast du Fragen zu unseren Produkten? Dann schreib uns eine Nachricht! Feedback ist auch erwünscht!',
            class: 'tst-paragraph',
          }),
          _('p', {
            text: 'Die Kosmetik ist handgefertigt und mit natürlichen Produkten hergestellt. Der Honig, das Propolis und das Bienenwachs stammen aus eigener Imkerei.',
            class: 'tst-paragraph',
          }),
          _('p', {
            text: 'Auf Wunsch können alle Kosmetika auch mit einem anderen Duftstoff, oder auch ohne hergestellt werden.',
            class: 'tst-paragraph',
          }),
        ],
        'secondary-2',
      ),
      form(),
    ),
    footer(),
  );
}
export { load };
