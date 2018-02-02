export function displayCart(state) {
  return {
    cart: {
      products: state.cartReducer.productCarted
    }
  };
}
