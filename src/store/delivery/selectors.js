export function displayDeliveryAddress(state) {
  return {
    deliveryAddress: {
      deliveryAddress: state.deliveryReducer.deliveryAddress
    }
  };
}
