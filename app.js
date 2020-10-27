const productsContainer = document.querySelector('.products__container');
const proxy_url = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://www.gomi.no/wp-json/wc/store/products/';
const newUrl = proxy_url + url;


async function flowerProducts() {
  try {
    const response = await fetch(newUrl);
    const results = await response.json();

    // const sortByName = results.sort((a, b) => a.name.localeCompare(b.name));
    // const sortByPrice = results.sort((a, b) => a.price_html.localeCompare(b.price_html));
    
    productsContainerHtml(results)
  }
  catch(error) {
    console.log(error);
  }
}
flowerProducts()

const productsContainerHtml = (results) => {

  results.map(product => {
    const name = product.name;
    const image = product.images[0].src;
    const price = product.price_html;

    productsContainer.innerHTML += `
      <div class="product__card">
        <img class="products__image" src=${image} />
        <div class="product__price">${price}</div>
        <p class="products__name">${name}</p>
        <a class="button__viewMore" href="#">View more</a>
      </div>
    `
  })
}