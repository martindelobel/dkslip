export function cartAction(dispatch) {
  return {
    pushCart: (product) => dispatch({type: "PUSH", data: product}),
    increment: (product) => dispatch({type: "ADD", data: product}),
    decrement: (product) => dispatch({type: "SUB", data: product}),
    deleteCart: () => dispatch({type: "DELETE_CART"}),
    addQuantity:(product) => dispatch({type:"ADD_QUANTITY", data: product}),
    deleteProduct:(product) => dispatch({type:"DELETE_PRODUCT", data:product})
  }
}
