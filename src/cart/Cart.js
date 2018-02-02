import React, { Component } from 'react';
import '../style-general.css';
import ProductList from "./productList.js";


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
        <div className="Button-Cart">
          <button>Finaliser la commande</button>
        </div>

      </div>

    );
  }
}

export default Cart;
