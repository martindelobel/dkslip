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
              <div className="product-single-header">
                <span className="title-item">
                  {this.props.product.product.title}
                </span>
                <div className="separator-title-item"></div>
              </div>
              <div className="product-info-content">
                <div className="product-left-info-part">
                  <img
                    src={
                      "https://www.decathlon.fr/media/" +
                      this.props.product.product.image_path
                    }
                  alt={this.props.product.product.description}/>
                </div>
                <div className="product-right-info-part">
                  <p>{this.props.product.product.description}</p>
                  <p className="rating-jauge">
                    <div className="jauge">
                      <div style={{width: this.props.product.product.rating * 20 + "%"}}></div>
                    </div>
                  </p>
                  <p><i className="fas fa-check-circle" style={{color:'green'}}></i> stock</p>
                  <p className="price">{this.props.product.product.min_price}€</p>
                  <div className="item-button-zone">
                    <button
                    onClick={() => this.props.actions.cartAction.increment(
                      this.props.product.product
                    )}
                    >Add to cart
                    </button>
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
