export function cartAction(dispatch) {
  return {
    increment: () => dispatch({type: "ADD"}),
    decrement: () => dispatch({type: "SUB"}),
    delete: () => dispatch({type: "DELETE"}),
  }
}
