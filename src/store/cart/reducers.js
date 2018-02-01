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
      const productToUpdate = state.productList.filter(
        product => product.id === action.data
      );
      if (productToUpdate.length > 0 && action.data === productToUpdate[0].id) {
        const indexToUpdateInCart = state.productList.indexOf(
          productToUpdate[0]
        );
        const quantityUpdated = state.productList.slice();
        quantityUpdated.splice(indexToUpdateInCart, 1, {
          id: action.data,
          quantity: state.productList[indexToUpdateInCart].quantity + 1
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
