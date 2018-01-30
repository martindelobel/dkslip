const fetch = require("node-fetch");

export function catalogActions(dispatch){
  return {
    getCatalog:() => {
      fetch(
        `https://decath-product-api.herokuapp.com/products/`,
        {method: "GET"}
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          dispatch ({type: "GET_CATALOG", data:result})
        })
        .catch((error) => {
          console.warn(error);
        });
      }
    }
  }
