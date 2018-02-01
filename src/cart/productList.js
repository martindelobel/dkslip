import React, { Component } from "react";
import "../style-general.css";
import { connect } from "react-redux";
import { displayCart } from "../store/cart/selectors";
import { displayProduct } from "../store/product/selectors";
import { cartAction } from "../store/cart/actions.js";
import { productAction } from "../store/product/actions.js";


class ProductList extends Component {
  render() {
    console.log(this.props.cart.productList);
    return (
      <div>
        {this.props.cart.productList.map(product => {
          if (!this.props.product.product.title){
            this.props.actions.productAction.getProduct(product.id)
          }
          return (
          <div className="cart-content" key={product.id}>
            <div className="picture-item">
              <img
                src={
                  "https://www.decathlon.fr/media/" +
                  this.props.product.product.image_path
                }
                alt={this.props.product.product.description}
              />
            </div>
            <div className="name-item">
              <p> {this.props.product.product.title} </p>
            </div>
            <div className="quantity-item">
              <p>
                <button onClick={this.props.decrement}> - </button>
                <span>{product.quantity}</span>
                <button onClick={this.props.increment}> + </button>
              </p>
            </div>
            <div className="delete-item">
              <p>
                {" "}
                <button onClick={this.props.delete}> Delete </button>
                <span>{product.quantity}</span>{" "}
              </p>
            </div>
            <div className="price-by-item">
              <p> {this.props.product.product.min_price} </p>
            </div>
            <div className="total-price">
              <p> {product.quantity * this.props.product.product.min_price} </p>
            </div>
          </div>
        )}
      )}
        <div className="Cart-Total">Total de la commande : 99Fr</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: {
      productList: state.cartReducer.productList
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
