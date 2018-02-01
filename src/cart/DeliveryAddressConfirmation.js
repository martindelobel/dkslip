import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { displayDeliveryAddress } from "../store/delivery/selectors";
import { Field, reduxForm } from 'redux-form';
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
