export function displayProductsList(state) {
  return {
    category: {
      productList: state.categoryReducer.productList
    }
  };
}
