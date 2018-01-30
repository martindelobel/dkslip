const initialState= {
  productList:[{id : 777, quantity:1}],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type){
    case "ADD_PRODUCTS" :
      return {
        ...state,
        productList:action.data
      };
    case 'ADD':
      return {
        ...state,
        productList : state.quantity + 1
      };
    case 'SUB':
      return {
        ...state,
        productList : state.quantity - 1
      };
    case 'DELETE':
      return {
        ...state,
        productList : [{id : 777,quantity:0}]
      };
    default:
      return state;
  }
}
