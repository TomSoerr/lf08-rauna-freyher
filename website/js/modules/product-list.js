import Helper from './helper.js';
import section from './section.js';
import productCard from './product-card.js';

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

export default function productList() {
  return section(
    productData.products.reduce((prev, curr) => {
      prev.push(
        productCard({
          name: curr.name,
          img: { src: curr.image, alt: curr.name },
          price: curr.price,
          description: curr.description,
          variant: curr.variants ? curr.variants : null,
        }),
      );
      return prev;
    }, []),
    'tst-product-list f',
  );
}
