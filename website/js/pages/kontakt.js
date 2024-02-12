import nav from '../modules/nav.js';
import main from '../modules/main.js';
import form from '../modules/form.js';
import footer from '../modules/footer.js';

function load() {
  document.body.append(nav(), main(form()), footer());
}
export { load };
