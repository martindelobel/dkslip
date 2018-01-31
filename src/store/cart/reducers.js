const initialState = localStorage.getItem("productList")
  ? {productList : JSON.parse(localStorage.getItem("productList"))}
  : {productList : [{id : 777, quantity:1}]};



export default function cartReducer(state = initialState, action) {
  switch (action.type){
    case "PUSH" :
      return {
        ...state,
        productList : [{id : 777, quantity:1}]
      };
    case "ADD_PRODUCTS" :
      return {
        ...state,
        productList:action.data
      };
    case 'ADD':
      return {
        ...state,
        productList : [{id : 777,quantity:2}]
      };
    case 'SUB':
      return {
        ...state,
        productList : [{id : 777,quantity:0}]
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
