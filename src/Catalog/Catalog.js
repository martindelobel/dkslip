import React, { Component } from 'react';
import { connect } from "react-redux";
import { catalogActions } from "../store/catalog/actions.js";
import { displayCatalog } from "../store/catalog/selectors.js";


class Catalog extends Component {

  componentDidMount(){
    this.props.getCatalog();
  }

  render(){
    return (
      <div>
        {this.props.catalog.productList.map((product) =>
          (
            <div>
              <p>
                {product.id}
              </p>
              <p>
                {product.title}
              </p>
              <p>
                {product.description}
              </p>
              <p>
                {product.min_price}
              </p>
            </div>
          )
        )}
    </div>
    )
  }
}


export default connect(displayCatalog, catalogActions)(Catalog);
