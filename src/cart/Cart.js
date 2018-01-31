import React, { Component } from 'react';
import '../style-general.css';
import { connect } from "react-redux";
import { catalogActions } from "../store/catalog/actions.js";
import { displayCatalog } from "../store/catalog/selectors.js";
import { cartAction } from "../store/cart/actions.js";
import { displayCart } from "../store/cart/selectors.js";
import ProductList from "./productList.js";


class Cart extends Component {
  // totalPrice = () => {
  //   return {props.counter} * {props.price}
  // }

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
        <div className="Button-Cart">
          <button>Finaliser la commande</button>
        </div>

      </div>

    );
  }
}

export default Cart;
