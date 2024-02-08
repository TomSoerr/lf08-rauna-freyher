import Helper from '../modules/helper.js';

export default function footer() {
  return Helper.create('footer', { class: 'tst-section' }, [
    Helper.create('div', { class: 'tst-section-inner', id: 'tst-footer' }, [
      Helper.create('ul', null, [
        Helper.create('li', null, [
          Helper.create(
            'a',
            {
              href: `${Helper.pathToMain(window.location.pathname)}impressum.html`,
            },
            'Impressum',
          ),
        ]),
        Helper.create('li', null, [
          Helper.create(
            'a',
            {
              href: `${Helper.pathToMain(
                window.location.pathname,
              )}datenschutz.html`,
            },
            'Datenschutz',
          ),
        ]),
      ]),
      Helper.create('p', { class: 'tst-contact-link' }, [
        'Webdesign von ',
        Helper.create(
          'a',
          {
            href: 'https://tomsoerr.github.io/portfolio/#/contact',
            target: '_blank',
            class: 'tst-preload',
          },
          ['Tom Soerr'],
          [
            {
              type: 'mouseover',
              listener: (e) => Helper.singleUseEvent(e, 'prevent'),
            },
            {
              type: 'focusin',
              listener: (e) => Helper.singleUseEvent(e, 'prevent'),
            },
          ],
        ),
      ]),
    ]),
  ]);
}
