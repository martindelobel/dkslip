export function displayProduct(state) {
  return {
    product: {
      product: state.productReducer.product
    }
  };
}
