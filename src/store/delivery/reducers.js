const initialState = {
  deliveryAddress: []
};

export default function deliveryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DELIVERY_ADDRESS":
      return {
        ...state,
        deliveryAddress: action.data
      };
    default:
      return state;
  }
}
