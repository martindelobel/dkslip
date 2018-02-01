const initialState = { productList: [] };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "PUSH":
      return {
        ...state,
        productList: [action.data]
      };
    case "ADD_PRODUCTS":
      return {
        ...state,
        productList: [action.data]
      };
    case "ADD":
      const arrayFiltered = state.productList.filter(
        product => product.id === action.data
      );
      if (arrayFiltered.length > 0 && action.data === arrayFiltered[0].id) {
        console.log("l'article est deja dans le panier");
        const productToUpdate = state.productList.filter(
          product => product.id === action.data
        );
        const indexToUpdate = state.productList.indexOf(productToUpdate[0]);
        const quantityUpdated = state.productList.slice();

        quantityUpdated.splice(indexToUpdate, 1, {
          id: action.data,
          quantity: state.productList[indexToUpdate].quantity + 1
        });

        return {
          ...state,
          productList: quantityUpdated
        };
      } else {
        return {
          ...state,
          productList: [{ id: action.data, quantity: 1 }]
        };
      }
    case "SUB":
      return {
        ...state,
        productList: [{ id: 777, quantity: 0 }]
      };
    case "DELETE":
      return {
        ...state,
        productList: [{ id: 777, quantity: 0 }]
      };
    default:
      return state;
  }
}
