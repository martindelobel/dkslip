export function cartAction(dispatch) {
  return {
    pushCart: () => dispatch({type: "PUSH"}),
    increment: () => dispatch({type: "ADD"}),
    decrement: () => dispatch({type: "SUB"}),
    delete: () => dispatch({type: "DELETE"}),
    addToCart: () => {
        try{
          localStorage.setItem('productList', 'toto');
          return true;
        } catch(error){
          console.warn('Something');
          return false;
        }
      }
  }
}
