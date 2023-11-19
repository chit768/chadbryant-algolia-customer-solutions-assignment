const resultHit = (hit, { html, sendEvent }) => html
  `<a class="result-hit">
    <div class="result-hit__image-container">
      <img class="result-hit__image" src="${hit.image}" />
    </div>
    <div class="result-hit__details">
      <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
      <p class="result-hit__price">$${hit.price}</p>
    </div>
    <div class="result-hit__controls">
    <button
      id="view-item"
      class="result-hit__view"
      onclick="${() => sendEvent('view', hit, 'Viewed item')}"
    >
      View
    </button>
      <button
        id="add-to-cart"
        class="result-hit__cart"
        onclick="${() => sendEvent('conversion', hit, 'Added to cart')}"
      >
      Add to cart
      </button>
    </div>
  </a>`

export default resultHit;