import nav from '../modules/nav.js';
import main from '../modules/main.js';
import footer from '../modules/footer.js';
import section from '../modules/section.js';
import p from '../modules/paragraph.js';

function load() {
  document.body.append(nav(), main(
    // section(p('Angaben gemäß §5 TMG <br> Rauna Freyher <br>Wiesengrund 125 <br>22534 Hamburg <br> <br>Kontakt <br>Telefon (0 40) 33 30 36- 0  <br>Telefax (0 40) 33 30 36-100 <br>E-Mail: info@raunafreyher.de <br>www.raunafreyher-naturkosmetik.de <br>Geschäftsführerin: Rauna Freyher <br> <br>Verantwortlich für diese Seiten: Rauna Freyer'))
  ), footer());
}

export { load };
