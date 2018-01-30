export function catalogActions(dispatch) {
  return {
    getCatalog: () => {
      return fetch(`https://decath-product-api.herokuapp.com/categories/`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(result => {
          dispatch({ type: "GET_CATALOG", data: result });
        })
        .catch(error => {
          console.warn(error);
        });
    }
  };
}
