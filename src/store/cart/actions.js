export function cartAction(dispatch) {
  return {
    pushCart: () => dispatch({type: "PUSH"}),
    increment: () => dispatch({type: "ADD"}),
    decrement: () => dispatch({type: "SUB"}),
    delete: () => dispatch({type: "DELETE"}),
  }
}
