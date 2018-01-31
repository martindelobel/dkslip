import React, { Component } from 'react';
import './style-general.css';
import Counter from './cart/Counter.js';
import DeleteProduct from './cart/DeleteProduct.js'



class App extends Component {
  totalPrice = () => {
    return {props.counter} * {props.price}
  }


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

export default App;
