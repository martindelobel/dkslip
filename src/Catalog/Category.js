import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { categoryAction } from "../store/category/actions.js";
import { cartAction } from "../store/cart/actions.js";
import { displayProductsList } from "../store/category/selectors.js";
import { productAction } from "../store/product/actions.js";
import { displayProduct } from "../store/product/selectors.js";
import { displayCart } from "../store/cart/selectors";

class Category extends Component {
  componentDidMount() {
    this.props.actions.categoryAction.getProducts(this.props.match.params.idCategory);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.idCategory !== prevProps.match.params.idCategory)
    {
      this.props.actions.categoryAction.getProducts(this.props.match.params.idCategory);
    }
  }
  render() {
    return (
      <div className="Categories">
        <div className="item-content">
          <ul>
            {this.props.category.cartproductList.map(products => (
              <li key={products.id}>
                <h4>{products.title}</h4>
                <p className="price-item">{products.min_price}€</p>
                <img  src={"https://www.decathlon.fr/media/" + products.image_path} alt={products.description}></img>
                <p className="rating-jauge">
                  <div className="jauge">
                    <div style={{width: products.rating * 20 + "%"}}></div>
                  </div>
                </p>
                <p style={{height:"50vh"}}>{products.description}</p>
                <p><i className="fas fa-check-circle" style={{color:'green'}}></i> stock</p>
                <div className="item-button-zone">
                  <button
                  onClick={() => {
                    this.props.actions.cartAction.increment(products)
                  }}>Add to cart</button>
                  <NavLink
                    style={{ textDecoration: 'none' }}
                    key={products.id}
                    to={`/product/${products.id}`}
                  >
                    <button>View details</button>
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
    },
    category:{
      cartproductList: state.categoryReducer.productList
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      categoryAction: categoryAction(dispatch),
      cartAction: cartAction(dispatch),
      productAction: productAction(dispatch)
    }
  };
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(Category);
=======
export default connect(displayProductsList, mapDispatchToProps)(Category);
>>>>>>> update design and fix conflicts to add cart by catalog
