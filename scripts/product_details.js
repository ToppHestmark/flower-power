const detailsContainer = document.querySelector('.details__container');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const flower_id = params.get("product_id");
const products_url = `https://www.gomi.no/wp-json/wc/v3/products/${flower_id}?consumer_key=ck_dffd8b3de85de77df20571ca5215cbbbb06e9b5e&consumer_secret=cs_a18432a4f7bbc2afab4279687247a39913f55629`;

async function flowerDetails() {

  try {
    const response = await fetch(products_url);
    const results = await response.json();

    const name = results.name;
    const image = results.images[0].src;
    const imageAlt = results.images[0].alt;
    const price = results.price;
    const stockStatus = results.stock_status;
    const description = results.description;

    function stock() {
      return stockStatus === 'instock' ? 'In stock' : 'Not in stock';
    }

    detailsContainer.innerHTML = `
    <div class="details__imageContainer">
      <img class=""details__image src=${image} alt="${imageAlt}" />
    </div>
    <div class="details__textContainer">
      <h2 class="details__name">${name}</h2>
      <p class="details__price">$ ${price}</p>
      <p class="details__stockStatus">Stock status: <b>${stock()}</b></p>
      <h3 class="details__descriptionHeader">Description</h3>
      <div class="details__description">
        ${description}
      </div>
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
