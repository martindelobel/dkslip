import React, { Component } from 'react';
import '../style-general.css';
import Counter from '../cart/Counter.js';
import DeleteProduct from '../cart/DeleteProduct.js';
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { catalogActions } from "../store/catalog/actions.js";
import { cartAction } from "../store/cart/actions.js";
import ProductList from "./productList.js";
import { displayCart } from "../store/cart/selectors.js";


class Cart extends Component {
  totalPrice = () => {
    return {this.props.counter} * {this.props.price}
  }


  render() {
    return (
      <div className="General-Cart">
      <div className="trouducul" style={{background:"#000"}}>
      </div>
        <div className="Title-Cart">Récapitulatif de mon panier</div>
        <div className="name-section">
            <span>Photo</span>
            <span>Name</span>
            <span>Quantité</span>
            <span>Supprimer</span>
            <span>Prix Unitaire</span>
            <span>Prix total</span>
        </div>
        <div className="cart-content">
            <div className="picture-item">
              <p> props.image </p>
            </div>
            <div className="name-item">
              <p> props.title </p>

            </div>
            <div className="quantity-item">
              <p> <Counter /> </p>

            </div>
            <div className="delete-item">
              <p> <DeleteProduct /> </p>

            </div>
            <div className="price-by-item">
              <p> props.price </p>

            </div>
            <div className="total-price">
              <p> {totalPrice} </p>

            </div>

        </div>
        <div className="Cart-Total">Total de la commande : 99Fr</div>
        <div className="Button-Cart">
          <button>Finaliser la commande</button>
        </div>
      </div>
    );
  }
}

export default Cart;
