const initialState = {
  productList: []
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        productList: action.data
      };
    default:
      return state;
  }
}
