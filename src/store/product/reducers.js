const initialState = {
  product: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      const tempArray = state.product.slice();
      tempArray.push(action.data)
      return {
        ...state,
        product: tempArray
      };
    default:
      return state;
  }
}
