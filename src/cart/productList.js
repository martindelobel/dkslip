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
      <tr>
        {this.props.cart.productList.map(product => {
          return (
          <div className="cart-content" key={product.iteminfo.id}>
          <div className="product-info">
            <td className="picture-item ta-center">
              <img
                src={
                  "https://www.decathlon.fr/media/" +
                  product.iteminfo.image_path
                }
                alt={product.iteminfo.description}
              />
            </td>
            <td className="name-item ta-center">
              <p> {product.iteminfo.title} </p>
            </td>
            <td className="quantity-item ta-center">
              <p>
                <button className="update-quantity-less update-quantity" onClick={()=>{
                  this.props.actions.cartAction.decrement(product.iteminfo)
                }}> - </button>
                <span>{product.quantity}</span>
                <button className="update-quantity-more update-quantity" onClick={() => {
                  this.props.actions.cartAction.addQuantity(product.iteminfo)
                }}> + </button>
              </p>
            </td>
            <td className="delete-item ta-center">
              <p>
                <button className="trash-button" onClick={() => {
                  this.props.actions.cartAction.deleteProduct(product.iteminfo)
                }}> <i className="fas fa-trash-alt"></i></button>
              </p>
            </td>
            <td className="price-by-item ta-center price-product">
              <p> {product.iteminfo.min_price}€ </p>
            </td>
            <td className="total-price price-product-total ta-center">
              <p> {(product.quantity * product.iteminfo.min_price).toFixed(2)} €</p>
            </td>
            </div>
            <div className="product-separator"></div>
          </div>
        )}
       )}
        <div className="Cart-Total">Total Order : {this.props.cart.totalQty.toFixed(2)}EUR</div>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: {
      productList: state.cartReducer.productList,
      totalQty:state.cartReducer.totalQty
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
