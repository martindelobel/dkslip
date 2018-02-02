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
        <div className="Title-Cart">Récapitulatif de mon panier</div>
        <div className="name-section">
            <span>Photo</span>
            <span>Name</span>
            <span>Quantité</span>
            <span>Supprimer</span>
            <span>Prix Unitaire</span>
            <span>Prix total</span>
        </div>
        <ProductList />
        <p>
          <button className="Button-Cart" onClick={()=>this.props.actions.cartAction.deleteCart()}> Delete Cart</button>
        </p>
        <div className="Button-Cart">
          <button><NavLink to={`/DeliveryAddressConfirmation`}>Finaliser la commande</NavLink></button>
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
