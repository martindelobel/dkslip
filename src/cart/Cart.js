import React, { Component } from 'react';
import '../style-general.css';
import { connect } from "react-redux";
import { cartAction } from "../store/cart/actions.js";
import { productAction } from "../store/product/actions.js";

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
        <div>
          {this.props.cart.products.map(product => {
            return (
            <div className="cart-content" key={product.iteminfo.id}>
              <div className="picture-item">
                <img
                  src={
                    "https://www.decathlon.fr/media/" +
                    product.iteminfo.image_path
                  }
                  alt={product.iteminfo.description}
                />
              </div>
              <div className="name-item">
                <p> {product.iteminfo.title} </p>
              </div>
              <div className="quantity-item">
                <p>
                  <button className="update-quantity" onClick={()=>{
                    this.props.actions.cartAction.decrement(product.iteminfo)
                      .then(() =>
                        localStorage.setItem("productList", JSON.stringify(this.props.cart.products))
                      )
                  }}> - </button>
                  <span>{product.quantity}</span>
                  <button className="update-quantity" onClick={() => {
                    this.props.actions.cartAction.increment(product.iteminfo)
                      .then(() =>
                        localStorage.setItem("productList", JSON.stringify(this.props.cart.products))
                      )
                  }}> + </button>
                </p>
              </div>
              <div className="delete-item">
                <p>
                  {" "}
                  <button onClick={() => {
                    this.props.actions.cartAction.delete()
                      .then(() => localStorage.clear())
                  }}> Delete </button>
                  <span>{product.quantity}</span>{" "}
                </p>
              </div>
              <div className="price-by-item">
                <p> {product.iteminfo.min_price} </p>
              </div>
              <div className="total-price">
                <p> {product.quantity * product.iteminfo.min_price} </p>
              </div>
            </div>
          )}
         )}
          <div className="Cart-Total">Total de la commande : EUR</div>
        </div>
        <div className="Button-Cart">
          <button>Finaliser la commande</button>
        </div>

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    cart: {
      products: state.cartReducer.productsCarted
    },
    product: {
      product: state.productReducer.product
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      productAction: productAction(dispatch),
      cartAction: cartAction(dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
