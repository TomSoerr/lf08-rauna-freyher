/*
TODOs:
- Der Hero soll split rechts links sein. Das Bild soll rechts sein
- Die Überschriften sollen Federo sein. Außer bei den Cards.
- Über mich Seite -> Erste zwei Absätze in den Hero rechts, links daneben soll
das jetzige Hero-Bild in Form einer Wabe wie im Logo
- Über mich Seite -> unter dem Hero soll der Text so wie er jetzt ist, danach
kommt eine section mit dem braunen hintergrund in der drei Produkte gezeigt
werden mit weiterführenden links
- Kontakt Seite -> Der Text muss gekürzt und auf Rechtschreibung geprüft werden
- Kontakt Seite -> Die Wellen sollen weg und die Blume soll gedreht werden

Jule:
- Warum Naturkosmetik: Teaser fehlt
- Über mich: Bild weg, icon hin

*/

export default class Helper {
  static development = true;

  static imgPath(img, hidden = false) {
    if (hidden && Helper.development) {
      return `${Helper.pathToMain(window.location.pathname)}img-hidden/${img
      }`;
    }
    return `${Helper.pathToMain(window.location.pathname)}img/${
      img
    }`;
  }

  /* ______________________________________
  Site structure
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ */
  static navItems = {
    logo: { src: 'logo.svg', alt: 'Logo', srcset: 'logo-mobile.svg' },
    navigation: [
      { text: 'Home', href: 'index.html' },
      { text: 'Über mich', href: 'ueber-mich.html' },
      { text: 'Warum Naturkosmetik?', href: 'warum-naturkosmetik.html' },
      { text: 'Produkte', href: 'produkte.html' },
      { text: 'Kontakt', href: 'kontakt.html' },
    ],
  };

  /* ______________________________________
  Set fontFaceSet
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ */

  static fontFaceSet;

  /* ______________________________________
  Functions for removing preload class on hover links
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ */

  static removeAfterLoad(element, singleUseEventFn) {
    element.classList.remove('tst-preload');
    element.removeEventListener('mouseover', singleUseEventFn);
    element.removeEventListener('focusin', singleUseEventFn);
  }

  static getLiElement(target) {
    if (target.tagName === 'A') {
      return target.parentElement;
    }
    if (target.tagName === 'LI') {
      return target;
    }
    console.error('Invalid target');
  }

  static singleUseEvent(event, mode) {
    const element =
      mode === 'prevent' ? event.target : Helper.getLiElement(event.target);
    Helper.removeAfterLoad(element, Helper.singleUseEvent);
    event.stopPropagation();
  }

  /* ______________________________________
  Functions to get path to produkte.js, pages/*.js, subfolder/*.html, img/*,
  index.html and from subpage to other subpage
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ */

  static getFileName(pathname) {
    const fileNameRegEx = /[^/]+(?=\.html)/;
    let fileName = pathname.match(fileNameRegEx);

    if (fileName === null) {
      fileName = 'index';
    } else {
      fileName = fileName[0];
    }

    return fileName;
  }

  static getAllSubFolders() {
    const folders = [];
    this.navItems.navigation.forEach((item) => {
      if (item.folder) folders.push(item.folder);
    });
    return folders;
  }

  static folderExists(folder) {
    return this.getAllSubFolders().includes(folder);
  }

  static getFolderPath(pathname) {
    const path = pathname;

    if (path === '/' || path === '/index.html' || path === '/index') {
      return null;
    }

    const pathWithoutFileRegEx = /.*\//;
    const lastFolderRegEx = /\w+(?=\/$)/;

    const pathWithoutFile = path.match(pathWithoutFileRegEx);

    if (pathWithoutFile) {
      const lastFolder = pathWithoutFile[0].match(lastFolderRegEx)[0];

      if (this.folderExists(lastFolder)) {
        return lastFolder;
      }
    }
    return null;
  }

  // input should be window.location.pathname
  static pathToMain(pathname) {
    const path = pathname;

    if (this.getFolderPath(path)) {
      return '../';
    }
    return '';
  }

  static getFolderData(fileName) {
    const subNav = this.navItems.navigation.filter((item) => item.folder);
    const folder = subNav.find((item) => {
      // folderObj is undefined if filename is not in the folder
      const folderObj = item.unterpunkte.find(
        (pages) => pages.href === fileName,
      );
      return folderObj;
    });

    if (!folder) return null;
    return folder.folder;
  }

  static checkIfNotSubpage(fileName) {
    const notSubNav = this.navItems.navigation.filter((item) => !item.folder);
    return notSubNav.find((item) => item.href === fileName);
  }

  static relativPath(from, to) {
    const relativePath = this.pathToMain(from);

    if (this.getFolderPath(from) === this.getFolderData(to)) {
      return to;
    }

    if (this.checkIfNotSubpage(to)) {
      return `${relativePath}${to}`;
    }

    return `${this.pathToMain(from)}${this.getFolderData(to)}/${to}`;
  }

  static absolutePath(pathname, origin) {
    const pathWithoutFileRegEx = /.*\//;
    const PathWithoutLastFolder = /.*\/(?=\w*\/)/;

    const pathWithoutFile = pathname.match(pathWithoutFileRegEx);

    if (pathWithoutFile[0] === '/') {
      return `${origin}/`;
    }

    if (this.getFolderPath(pathname)) {
      return `${origin}${pathname.match(PathWithoutLastFolder)}`;
    }

    return `${origin}${pathWithoutFile}`;
  }

  /* ______________________________________
  Functions that will load if the dom changes
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ */
  static initFn = [];

  static addInitFn(fn) {
    Helper.initFn.push(fn);
  }

  static init() {
    // called when the js created content is added to the dom
    Promise.resolve().then(() => {
      if (Helper.initFn) Helper.initFn.forEach((fn) => fn());
      // maybe remove all functions after inital load
      Helper.initFn = null;
    });
  }

  /* ______________________________________
  Function that will load if user scrolls
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ */
  static scrollFn = [];

  static addScrollFn(fn) {
    Helper.scrollFn.push(fn);
  }

  static removeScrollFn(fn) {
    Helper.scrollFn = Helper.scrollFn.filter((f) => f !== fn);
  }

  static scroll(event) {
    if (Helper.scrollFn) Helper.scrollFn.forEach((fn) => fn(event));
  }

  /* ______________________________________
  Function to build HTML Elements
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ */
  static elements = {};

  /**
   * @param {string} el - The element to create
   * @param {Object} elAtt - Attributes for the element
   * @param {array} elChildren - Children of the element
   * @param {Array} elEvent - Object inside an Array containing a type and a listener.
   */
  static create(el, elAtt, elChildren, elEvent) {
    if (!Helper.elements[el]) {
      Helper.elements[el] = document.createElement(el);
    }

    const newEl = Helper.elements[el].cloneNode(true);

    if (elAtt) {
      Object.entries(elAtt).forEach(([key, value]) => {
        if (key === 'class') {
          value.split(' ').forEach((className) => {
            newEl.classList.add(className);
          });
        } else if (key === 'text') {
          newEl.textContent = value;
        } else if (key === 'data') {
          Object.entries(value).forEach(([dataKey, dataValue]) => {
            newEl.dataset[dataKey] = dataValue;
          });
        } else {
          newEl.setAttribute(key, value);
        }
      });
    }
    if (elChildren) {
      newEl.append(...elChildren);
    }

    if (elEvent) {
      elEvent.forEach((event) => {
        if (event) newEl.addEventListener(event.type, event.listener);
      });
    }

    return newEl;
  }
}
