const productsContainerHtml = (results) => {

  results.map(product => {
    const name = product.name;
    const image = product.images[0].src;
    const imageAlt = product.images[0].alt;
    const price = product.price_html;
    const flower_id = product.id;

    productsContainer.innerHTML += `
      <div class="product__card">
        <img class="products__image" src=${image} alt="${imageAlt}" />
        <div class="product__price">${price}</div>
        <p class="products__name">${name}</p>
        <a class="button__viewMore" href="./product_details.html?product_id=${flower_id}">View more</a>
      </div>
    `
  })
}
