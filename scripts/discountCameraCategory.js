import algoliasearch from 'algoliasearch';

function discountCameraCategory() {
  // Connect and authenticate with Algolia
  const client = algoliasearch(
    'HM3MI2PHIM',
    '2d6e1c39dd03e7c5ce01e1c7fca1e63a'
  );
  // Init index
  const index = client.initIndex('dev_algoliaproductsdiscounted');

  // Fetch non-discounted products from products.json
  fetch('./data/products.json')
    .then(function (response) {
      return response;
    })
    .then(function (data) {
      return data.json();
    })
    .then(function (products) {
      // Run discount function
      makeDiscounts(products);
      // Save discounted prices to index
      index.saveObjects(products, {
        autoGenerateObjectIDIfNotExist: true,
      });
    })
    .catch(function (err) {
      console.log(`Fetch problem: ${err.message}`);
    });

  function makeDiscounts(products) {
    products.forEach((product) => {
      let isCameraCategory = false;

      product.categories.forEach((category) => {
        if (category.toLowerCase().indexOf('camera') > -1) {
          // One or more categories contains keyword "camera"
          isCameraCategory = true;
        }
      });

      if (isCameraCategory) {
        // Reduce price by 20% and round down to nearest integer
        const discountedPrice = Math.floor(product.price * 0.8);
        product.price = discountedPrice;
      }
    });
  }
}

export default discountCameraCategory;
