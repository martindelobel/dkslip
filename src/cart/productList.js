import React, { Component } from "react";
import "../style-general.css";
import { connect } from "react-redux";
import { displayCart } from "../store/cart/selectors";
import { displayProduct } from "../store/product/selectors";
import { cartAction } from "../store/cart/actions.js";
import { productAction } from "../store/product/actions.js";


class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.cart.productList.map(product => {
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
                      localStorage.setItem("productList", JSON.stringify(this.props.cart.productList))
                    )
                }}> - </button>
                <span>{product.quantity}</span>
                <button className="update-quantity" onClick={() => {
                  this.props.actions.cartAction.addQuantity(product.iteminfo)
                    .then(() =>
                      localStorage.setItem("productList", JSON.stringify(this.props.cart.productList))
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
