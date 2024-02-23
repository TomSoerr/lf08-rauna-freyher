import nav from '../modules/nav.js';
import main from '../modules/main.js';
import footer from '../modules/footer.js';
import section from '../modules/section.js';

function load() {
  document.body.append(nav(), main(section(['Es gibt noch keine Datenschutzhinweise'])), footer());
}

export { load };
