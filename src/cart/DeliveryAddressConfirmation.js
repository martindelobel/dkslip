import React, { Component } from "react";
import { connect } from "react-redux";
import { deliveryAction } from "../store/delivery/actions"
import Delivery from "./Delivery"

class DeliveryAddressConfirmation extends Component {
  render() {
    return (
      <div>
        <Delivery onSubmit={this.props.getDeliveryAddress}/>
      </div>
    );
  }
}
export default connect(null, deliveryAction)(DeliveryAddressConfirmation);
