import React, { Component } from 'react';
import '../style-general.css';
import { connect } from "react-redux";
import { catalogActions } from "../store/catalog/actions.js";
import { cartAction } from "../store/cart/actions.js";
import ProductList from "./productList.js";
import { NavLink } from "react-router-dom";


class Cart extends Component {
  render() {
    return (
      <div className="General-Cart">
        <div className="Title-Cart">RESUME CART</div>
        <div className="name-section">
            <span></span>
            <span>Name</span>
            <span>Quantities</span>
            <span>Delete</span>
            <span>Unit price</span>
            <span>Total price</span>
        </div>
        <ProductList />
        <div className="Button-Cart-Trash">
          <button className="Button-Cart" onClick={()=>this.props.actions.cartAction.deleteCart()}> Delete Cart</button>
        </div>
        <div className="Button-Cart">
          <button><NavLink
          style={{ textDecoration: 'none', color:'#FFF' }} to={`/DeliveryAddressConfirmation`}>Finalize order</NavLink></button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      cartAction: cartAction(dispatch)
    }
  };
}

export default connect(null, mapDispatchToProps)(Cart);
