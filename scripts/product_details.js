const detailsContainer = document.querySelector('.details__container');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const flower_id = params.get("product_id");
const products_url = `https://www.gomi.no/wp-json/wc/v3/products/${flower_id}?consumer_key=ck_dffd8b3de85de77df20571ca5215cbbbb06e9b5e&consumer_secret=cs_a18432a4f7bbc2afab4279687247a39913f55629`;

console.log(flower_id);

async function flowerDetails() {

  try {
    const response = await fetch(products_url);
    const results = await response.json();

    const name = results.name;
    const image = results.images[0].src;
    const price = results.price;
    const stockStatus = results.stock_status;
    const description = results.description;

    detailsContainer.innerHTML = `
    <a href="../index.html">Back to products</a>
    <div>
      <img src=${image} />
      <h2>${name}</h2>
      <p>$ ${price}</p>
      <p>Stock status: ${stockStatus}</p>
      <h3>Description</h3>
      ${description}
    </div>
    `

    console.log(results);
  }
  catch(error) {
    console.log(error);
  }
}

flowerDetails();

// Been tried to install dotenv and put 'require('dotenv').config()' on top og the file but only received the syntex error.
// Alse created a .env file with API keys stored, the issue was within the node modules somewhere.
// Already have Node packages pre-installed. So free API key for this app then.
