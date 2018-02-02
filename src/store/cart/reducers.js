const initialState = () => {
  const defaultValue = {
    productList: [],
    totalQty:0
  };
  if (typeof localStorage === "undefined") {
    return defaultValue
  }
  return localStorage.getItem("productList")
  ? {
      productList: JSON.parse(localStorage.getItem("productList")),
      totalQty: JSON.parse(localStorage.getItem("totalQty"))
    }
  : defaultValue;
}

export default function cartReducer(state = initialState(), action) {
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
        product => product.iteminfo.id === action.data.id
      );
      if (productToUpdate >= 0) {
        const quantityUpdated = state.productList.slice();
        quantityUpdated.splice(productToUpdate, 1, {
          iteminfo: action.data,
          quantity: state.productList[productToUpdate].quantity + 1
        });
        return {
          ...state,
          productList: quantityUpdated,
          totalQty:state.totalQty + action.data.min_price
        };
      } else {
        const tempArray = state.productList.slice();
        tempArray.push({ iteminfo: action.data, quantity: 1 })
        return {
          ...state,
          productList: tempArray,
          totalQty:state.totalQty + action.data.min_price
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
      return {
        ...state,
        productList: quantityUpdatedToProduct,
        totalQty:state.totalQty + action.data.min_price
      };
    case "SUB":
      const indexOfProductTosubQty = state.productList.findIndex(
        product => (product.iteminfo.id === action.data.id)
      );
      if (state.productList[indexOfProductTosubQty].quantity > 0){
        const quantityToDecrement = state.productList.slice();
        quantityToDecrement.splice(indexOfProductTosubQty, 1, {
            iteminfo: state.productList[indexOfProductTosubQty].iteminfo,
            quantity: state.productList[indexOfProductTosubQty].quantity - 1
        });
        return {
          ...state,
          productList: quantityToDecrement,
          totalQty:state.totalQty - action.data.min_price
        };
      } else {
        return {
          ...state,
          productList: state.productList,
          totalQty:state.totalQty
        }
      }
    case "DELETE_CART":
      return {
        ...state,
        productList:[],
        totalQty:0
      };
    case "DELETE_PRODUCT":
      const productToDelete = state.productList.findIndex(
        product => (product.iteminfo.id === action.data.id)
      );
      const totalqtyligne= state.productList[productToDelete].quantity * state.productList[productToDelete].iteminfo.min_price
      const newProductList = state.productList.slice();
      newProductList.splice(productToDelete, 1);
      return {
        ...state,
        productList: newProductList,
        totalQty:state.totalQty-totalqtyligne
      };
    default:
      return state;
  }
}
