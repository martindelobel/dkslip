const initialState = () => {
  const defaultValue = {productsCarted: []};
  if (typeof localStorage === "undefined") {
    return defaultValue
  }
  return localStorage.getItem("productsCarted")
  ? {productsCarted: JSON.parse(localStorage.getItem("productsCarted"))}
  : defaultValue;
}

export default function cartReducer(state = initialState(), action) {
  switch (action.type) {
    case "ADD_NEW":
      const productToUpdate = state.productsCarted.findIndex(
        product => product.iteminfo.id === action.data.id
      );
      if (productToUpdate >= 0) {
        const quantityUpdated = state.productsCarted.slice();
        quantityUpdated.splice(productToUpdate, 1, {
          iteminfo: action.data,
          quantity: state.productsCarted[productToUpdate].quantity + 1
        });
        return {
          ...state,
          productsCarted: quantityUpdated
        };
      } else {
        const tempArray = state.productsCarted.slice();
        tempArray.push({ iteminfo: action.data, quantity: 1 })
        return {
          ...state,
          productsCarted: tempArray
        };
      };
    case "ADD_QUANTITY":
      const addQuantityToProduct = state.productsCarted.findIndex(
        product => (product.iteminfo.id === action.data.id)
      );
      const quantityUpdatedToProduct = state.productsCarted.slice();
      quantityUpdatedToProduct.splice(addQuantityToProduct, 1, {
          iteminfo: state.productsCarted[addQuantityToProduct].iteminfo,
          quantity: state.productsCarted[addQuantityToProduct].quantity + 1
        });
      return {
        ...state,
        productsCarted: quantityUpdatedToProduct
      };
    case "SUB":
      const subQuantityToProduct = state.productsCarted.findIndex(
        product => (product.iteminfo.id === action.data.id)
      );
      if (state.productsCarted[subQuantityToProduct].quantity > 0){
        const quantityToDecrement = state.productsCarted.slice();
        quantityToDecrement.splice(subQuantityToProduct, 1, {
          iteminfo: state.productsCarted[subQuantityToProduct].iteminfo,
          quantity: state.productsCarted[subQuantityToProduct].quantity - 1
        });
        return {
          ...state,
          productsCarted: quantityToDecrement
        };
      }
    case "DELETE":
      return {
        ...state,
        productsCarted:[]
      };
    default:
      return state;
  }
}
