export function deliveryAction(dispatch) {
  return {
    getDeliveryAddress: (address) => dispatch({type: "GET_DELIVERY_ADDRESS", data: address}),
  };
}
