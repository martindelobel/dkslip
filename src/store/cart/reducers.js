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
      const productToUpdate = state.productList.findIndex(
        product => product.id === action.data.id
      );
      if (productToUpdate >= 0) {
        const quantityUpdated = state.productList.slice();
        quantityUpdated.splice(productToUpdate, 1, {
          id: action.data,
          quantity: state.productList[productToUpdate].quantity + 1
        });
        return {
          ...state,
          productList: quantityUpdated
        };
      } else {
        const tempArray = state.productList.slice();
        tempArray.push({ iteminfo: action.data, quantity: 1 })
        return {
          ...state,
          productList: tempArray
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
