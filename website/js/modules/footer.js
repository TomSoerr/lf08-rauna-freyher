import Helper from './helper.js';

const _ = Helper.create;

const events = [
  {
    type: 'mouseover',
    listener: (e) => Helper.singleUseEvent(e, 'prevent'),
  },
  {
    type: 'focusin',
    listener: (e) => Helper.singleUseEvent(e, 'prevent'),
  },
];

export default function footer() {
  return _('footer', { class: 'tst-section', id: 'tst-footer' }, [
    _('span', { style: 'z-index: 1000; position: fixed; bottom: 0; left: 0; color: black; background-color: white; text-decoration: none; font-size: 16px; font-family: sans-serif; padding: 2px; border: thin solid black;', text: 'Keine kommerzielle Website, nur für Bildungszwecke.' }),
    _('a', {style: 'z-index: 1000; position: fixed; bottom: 0; right: 0; color: black; background-color: white; text-decoration: none; font-size: 16px; font-family: sans-serif; padding: 2px; border: thin solid black;', href: 'https://tomsoerr.github.io/#/impressum', text: "Impressum" }),
    _('div', { class: 'tst-section-inner' }, [
      _('ul', null, [
        _('li', null, [
          _(
            'a',
            {
              href: `${Helper.pathToMain(window.location.pathname)}impressum.html`,
              class: 'tst-preload',
            },
            ['Impressum'],
            events,
          ),
        ]),
        _('li', null, [
          _(
            'a',
            {
              href: `${Helper.pathToMain(
                window.location.pathname,
              )}datenschutz.html`,
              class: 'tst-preload',
            },
            ['Datenschutz'],
            events,
          ),
        ]),
        _('li', { class: 'tst-contact-link' }, [
          'Webdesign von ',
          _(
            'a',
            {
              href: 'https://tomsoerr.github.io/#/kontakt',
              target: '_blank',
              class: 'tst-preload',
            },
            ['Tom Soerr'],
            events,
          ),
        ]),
      ]),

    ]),
  ]);
}
