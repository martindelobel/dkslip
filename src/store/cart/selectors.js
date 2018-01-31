export function displayCart(state){
  return {
    cart:{
      productList : state.cartReducer
    }
  }
}
