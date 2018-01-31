import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import { productAction } from "../store/product/actions.js";
import { displayProduct } from "../store/product/selectors.js";


class Product extends Component {

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    return (
      <div className="Product">
        <div>
          <ul>
            <li>{this.props.product.product.id}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(displayProduct, productAction)(Product);
