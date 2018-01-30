const initialState = {
  catList: [],
  productList: []
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATALOG":
      return {
        ...state,
        catList: action.data
      };
    default:
      return state;
  }
}
