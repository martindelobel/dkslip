const initialState = localStorage.getItem("productList")
  ? {productList: JSON.parse(localStorage.getItem("productList"))}
  : {productList: []};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "PUSH":
      localStorage.setItem("productList", JSON.stringify([action.data]));
      return {
        ...state,
        productList: [action.data]
      };
    case "ADD_PRODUCTS":
      localStorage.setItem("productList", JSON.stringify([action.data]));
      return {
        ...state,
        productList: [action.data]
      };
    case "ADD":
      const productToUpdate = state.productList.findIndex(
        product => product.iteminfo.id === action.data.id
      );
      if (productToUpdate >= 0) {
        const quantityUpdated = state.productList.slice();
        quantityUpdated.splice(productToUpdate, 1, {
          iteminfo: action.data,
          quantity: state.productList[productToUpdate].quantity + 1
        });
        localStorage.setItem("productList", JSON.stringify(quantityUpdated));
        return {
          ...state,
          productList: quantityUpdated
        };
      } else {
        const tempArray = state.productList.slice();
        tempArray.push({ iteminfo: action.data, quantity: 1 })
        localStorage.setItem("productList", JSON.stringify(tempArray));
        return {
          ...state,
          productList: tempArray
        };
      };
    case "ADD_QUANTITY":
    const addQuantityToProduct = state.productList.findIndex(
      product => (product.iteminfo.id === action.data.id)
    );
    const quantityUpdatedToProduct = state.productList.slice();
    quantityUpdatedToProduct.splice(addQuantityToProduct, 1, {
        iteminfo: state.productList[addQuantityToProduct].iteminfo,
        quantity: state.productList[addQuantityToProduct].quantity + 1
      });
    localStorage.setItem("productList", JSON.stringify(quantityUpdatedToProduct));
    return {
      ...state,
      productList: quantityUpdatedToProduct
    };
    case "SUB":
    const subQuantityToProduct = state.productList.findIndex(
      product => (product.iteminfo.id === action.data.id)
    );
    if (state.productList[subQuantityToProduct].quantity > 0){
    const quantityToDecrement = state.productList.slice();
    quantityToDecrement.splice(subQuantityToProduct, 1, {
        iteminfo: state.productList[subQuantityToProduct].iteminfo,
        quantity: state.productList[subQuantityToProduct].quantity - 1
      });
    localStorage.setItem("productList", JSON.stringify(quantityToDecrement));
    return {
      ...state,
      productList: quantityToDecrement
    };}
    case "DELETE":
      localStorage.clear();
      return {
        ...state,
        productList:[]
      };
    default:
      return state;
  }
}
