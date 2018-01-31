export function productAction(dispatch) {
  return {
    getProduct: (id) => {
      return fetch(`https://decath-product-api.herokuapp.com/products/${id}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(result => {
          dispatch({ type: "GET_PRODUCT", data: result });
        })
        .catch(error => {
          console.warn(error);
        });
    }
  };
}
