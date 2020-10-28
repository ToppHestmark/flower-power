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
