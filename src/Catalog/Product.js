import React, { Component } from "react";
import { connect } from "react-redux";
import { productAction } from "../store/product/actions.js";
import { cartAction } from "../store/cart/actions.js";
import { displayProduct } from "../store/product/selectors.js";

class Product extends Component {
  componentDidMount() {
    this.props.actions.productAction.getProduct(this.props.match.params.id);
  }

  render() {
    return (
      <div className="Product">
        <div className="content-wrap">
          <div className="best-sellers-items">
            <h3 className="best-sellers-title" />
            <div className="best-sellers-row">
              <div className="item-content">
                <span className="title-item">
                  {this.props.product.product.title}
                </span>
                <img
                  src={
                    "https://www.decathlon.fr/media/" +
                    this.props.product.product.image_path
                  }
                  alt={this.props.product.product.description}
                />
                <p>{this.props.product.product.description}</p>
                <p className="price">{this.props.product.product.min_price}€</p>
              </div>
              <div className="item-button-zone">
                <button
                  onClick={() => this.props.actions.cartAction.increment(
                    this.props.product.product.id
                  )}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      productAction: productAction(dispatch),
      cartAction: cartAction(dispatch)
    }
  };
}

export default connect(displayProduct, mapDispatchToProps)(Product);
