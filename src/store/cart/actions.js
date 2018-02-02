export function cartAction(dispatch) {
  return {
    pushCart: (product) => dispatch({type: "PUSH", data: product}),
    increment: (product) => Promise.resolve(dispatch({type: "ADD", data: product})),
    decrement: (product) => Promise.resolve(dispatch({type: "SUB", data: product})),
    deleteCart: () => Promise.resolve(dispatch({type: "DELETE_CART"})),
    addQuantity:(product) => Promise.resolve(dispatch({type:"ADD_QUANTITY", data: product})),
    deleteProduct:(product) => Promise.resolve(dispatch({type:"DELETE_PRODUCT", data:product}))
  }
}
