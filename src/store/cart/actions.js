export function cartAction(dispatch) {
  return {
    pushCart: (product) => dispatch({type: "PUSH", data: product}),
    increment: (product) => dispatch({type: "ADD", data: product}),
    decrement: (product) => dispatch({type: "SUB", data: product}),
    delete: () => dispatch({type: "DELETE"}),
    addQuantity:(product) => dispatch({type:"ADD_QUANTITY", data: product}),
  }
}
