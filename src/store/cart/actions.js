export function cartAction(dispatch) {
  return {
    addNewProductToCart: (product) => Promise.resolve(dispatch({type: "ADD_NEW", data: product})),
    decrement: (product) => Promise.resolve(dispatch({type: "SUB", data: product})),
    delete: () => Promise.resolve(dispatch({type: "DELETE"})),
    increment:(product) => Promise.resolve(dispatch({type:"ADD_QUANTITY", data: product})),
  }
}
