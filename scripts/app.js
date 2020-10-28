const productsContainer = document.querySelector('.products__container');
const proxy_url = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://www.gomi.no/wp-json/wc/store/products/';
const newUrl = proxy_url + url;

async function flowerProducts() {
  try {
    const response = await fetch(newUrl);
    const results = await response.json();
    
    productsContainerHtml(results)
  }
  catch(error) {
    console.log(error);
  }
}

flowerProducts()
