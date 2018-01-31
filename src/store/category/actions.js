export function categoryAction(dispatch) {
  return {
    getProducts: (catId) => {
      return fetch(`https://decath-product-api.herokuapp.com/categories/${catId}/products`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(result => {
          dispatch({ type: "GET_PRODUCTS", data: result });
        })
        .catch(error => {
          console.warn(error);
        });
    }
  };
}
