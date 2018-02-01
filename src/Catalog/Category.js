import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { categoryAction } from "../store/category/actions.js";
import { displayProductsList } from "../store/category/selectors.js";

class Category extends Component {
  componentDidMount() {
    this.props.getProducts(this.props.match.params.idCategory);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.idCategory !== prevProps.match.params.idCategory
    ) {
      this.props.getProducts(this.props.match.params.idCategory);
    }
  }

  render() {
    return (
      <div className="Categories">
        <div>
          {this.props.category.productList.map(products => (
            <NavLink key={products.id} to={`/product/${products.id}`}>
              <div className="Product">
                <div className="content-wrap">
                  <div className="best-sellers-items">
                    <h3 className="best-sellers-title" />
                    <div className="best-sellers-row">
                      <div className="item-content">
                        <span className="title-item">{products.title}</span>
                        <img
                          src={
                            "https://www.decathlon.fr/media/" +
                            products.image_path
                          }
                          alt={products.description}
                        />
                      </div>
                      <div className="item-button-zone">
                        <button
                          onClick={() =>
                            this.props.actions.cartAction.increment(
                              this.props.product.product.id
                            )
                          }
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(displayProductsList, categoryAction)(Category);
