import Helper from '../modules/helper.js';
import section from '../modules/section.js';
import button from '../modules/button.js';

const _ = Helper.create;

const path = `${Helper.absolutePath(
  window.location.pathname,
  window.location.origin,
)}data/produkte.json`;

const dataJson = await fetch(path, {
  method: 'GET',
  mode: 'cors',
});
const productData = await dataJson.json();

const formItems = (() => {
  const givenName = () =>
    _('label', { for: 'name' }, [
      _('span', { text: 'Name*', class: 'label' }),
      _('input', {
        type: 'text',
        name: 'name',
        id: 'name',
        placeholder: ' ',
        autocomplete: 'given-name',
        required: '',
        title: 'Vorname',
        pattern: '.{2,}',
        oninvalid: "setCustomValidity('Bitte gib deinen Vornamen ein')",
      }),
      _('span'),
    ]);

  const famName = () =>
    _('label', { for: 'nachname' }, [
      _('span', { text: 'Nachname*', class: 'label' }),
      _('input', {
        type: 'text',
        name: 'nachname',
        id: 'nachname',
        placeholder: ' ',
        required: true,
        autocomplete: 'family-name',
        title: 'Nachname',
        pattern: '.{2,}',
        oninvalid: "setCustomValidity('Bitte gib deinen Nachnamen ein')",
      }),
      _('span'),
    ]);

  const email = () =>
    _('label', { for: 'email' }, [
      _('span', { text: 'E-Mail*', class: 'label' }),
      _('input', {
        type: 'email',
        name: 'email',
        id: 'email',
        autocomplete: 'email',
        placeholder: ' ',
        required: true,
        title: 'E-Mail',
        oninvalid:
          "setCustomValidity('Bitte gib deine E-Mail an (Beispiel: vorname@nachname.com)')",
      }),
      _('span'),
    ]);

  const tel = () =>
    _('label', { for: 'phone' }, [
      _('span', { text: 'Telefon', class: 'label' }),
      _('input', {
        type: 'tel',
        id: 'phone',
        name: 'phone',
        inputmode: 'numeric',
        placeholder: ' ',
        autocomplete: 'off',
        pattern: '\\d{10,18}',
        title: 'Telefonnummer',
        oninvalid:
          "setCustomValidity('Bitte gib deine Telefonnummer im richtigen Format an (Beispiel: 012345678901)')",
      }),
      _('span'),
    ]);

  const productChangeEvent = (number) => ({
    type: 'change',
    listener: (e) => {
      const productName = e.target.value;
      const productObj = productData.products.find(
        (prod) => prod.name === productName,
      );

      if (
        e.target.parentElement.parentElement.lastChild
          .getAttribute('for')
          .match('variant')
      ) {
        e.target.parentElement.parentElement.lastChild.remove();
      }

      if (productObj?.variants) {
        e.target.parentElement.parentElement.append(
          _('label', { for: `variant-${number}` }, [
            _('span', { text: 'Variante*', class: 'label' }),
            _(
              'select',
              {
                title: 'Variante auswählen',
                name: `variant-${number}`,
                id: `variant-${number}`,
                required: '',
                oninvalid:
                  "setCustomValidity('Bitte wähle eine Variante aus oder lösche das Produkt')",
              },
              [
                _(
                  'option',
                  {
                    value: '',
                    title: 'Variante',
                    disabled: '',
                    selected: '',
                  },
                  ['Keine Variante'],
                ),
                ...productObj.variants.map((variant) =>
                  _('option', { value: variant }, [variant]),
                ),
              ],
            ),
          ]),
        );
      }
    },
  });

  const product = (number) =>
    _('div', { class: 'product' }, [
      _('div', null, [
        _('label', { for: `product-${number}` }, [
          _('span', { text: 'Produkt*', class: 'label' }),
          _(
            'select',
            {
              title: 'Produkt auswählen',
              name: `product-${number}`,
              id: `product-${number}`,
              required: '',

              oninvalid:
                "setCustomValidity('Bitte wähle eine Variante aus oder lösche das Produkt')",
            },
            [
              _(
                'option',
                { value: '', title: 'Produkt', disabled: '', selected: '' },
                ['Kein Produkt'],
              ),
              ...productData.products.map((product) =>
                _('option', { value: product.name }, [product.name]),
              ),
            ],
            [productChangeEvent(number)],
          ),
        ]),
      ]),
      button({
        type: 'button',
        event: {
          type: 'click',
          listener: (e) => e.target.parentElement.remove(),
        },
      }),
    ]);

  let idCounter = 1;

  const productsWrapper = () =>
    _('div', { class: 'products' }, [
      button({
        type: 'button',
        text: 'Produkt hinzufügen',
        event: {
          type: 'click',
          listener: (e) => e.target.parentElement.append(product(idCounter++)),
        },
      }),
      product(idCounter++),
    ]);

  const message = () =>
    _('label', { for: 'message' }, [
      _('span', { text: 'Nachricht*', class: 'label' }),
      _('textarea', {
        name: 'message',
        id: 'message',
        placeholder: ' ',
        rows: '4',
        required: true,
        title: 'Nachricht',
        oninvalid:
          "setCustomValidity('Schreibe mir eine Nachricht, damit ich deine Anfrage noch schneller beantworten kann')",
      }),
    ]);

  const privacy = () =>
    _('label', { class: 'Datenschutz', for: 'privacy' }, [
      _('span', { class: 'label' }, [
        _('a', {
          href: `${Helper.pathToMain(window.location.pathname)}datenschutz.html`,
          text: 'Datenschutzerklärung*',
        }),
      ]),
      _('input', {
        type: 'checkbox',
        name: 'privacy',
        id: 'privacy',
        value: 'accepted',
        required: true,
        title: 'Datenschutzerklärung akzeptieren',
        oninvalid:
          "setCustomValidity('Du must die Datenschutzerklärung akzeptieren, um das Formular absenden zu können')",
      }),
    ]);
  const submit = () =>
    button({
      type: 'submit',
      text: 'Anfrage senden',
    });

  return {
    givenName,
    famName,
    email,
    tel,
    productsWrapper,
    message,
    privacy,
    submit,
  };
})();

export default function form() {
  return section([
    _('p', null, [
      _('strong', {
        text: 'Verpflichtende Felder sind mit einem * gekennzeichnet.',
      }),
    ]),
    _(
      'form',
      {
        id: 'tst-form',
        action: '###https://formspree.io/f/mleqbrwr',
        method: 'POST',
      },
      [
        _('div', { class: 'two-col' }, [
          formItems.givenName(),
          formItems.famName(),
        ]),
        formItems.email(),
        formItems.tel(),
        formItems.productsWrapper(),
        formItems.message(),
        formItems.privacy(),
        formItems.submit(),
      ],
    ),
  ]);
}
