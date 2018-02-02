const initialState = {
  product: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.data
      };
    default:
      return state;
  }
}
