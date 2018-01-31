export function displayCatalog(state) {
  return {
    catalog: {
      catList: state.catalogReducer.catList
    }
  };
}
