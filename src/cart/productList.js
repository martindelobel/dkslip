import React, { Component } from 'react';
import '../style-general.css';
import { connect } from "react-redux";
import { displayCart } from "../store/cart/selectors";
import { cartAction } from "../store/cart/actions.js";


class ProductList extends Component {

  // componentDidMount(){
  //   this.props.pushCart([{id:"toto",quantity:3}]);
  // }

  render() {
    return (
    <div>

    {this.props.cart.productList.map((product) => (

      <div className="cart-content" key={product.id}>
          <div className="picture-item">
            <p> {product.image} </p>
          </div>
          <div className="name-item">
            <p> {product.title} </p>

          </div>
          <div className="quantity-item">
            <p>
              <button onClick={this.props.decrement}> - </button>
                <span>{product.quantity}</span>
              <button onClick={this.props.increment}> + </button>
            </p>

          </div>
          <div className="delete-item">
            <p> <button onClick={this.props.delete}> Delete </button>
              <span>{product.quantity}</span> </p>

          </div>
          <div className="price-by-item">
            <p> {product.price} </p>

          </div>
          <div className="total-price">
            <p> {product.quantity * product.price} </p>

          </div>
        </div>
      ))
    }
      <div className="Cart-Total">Total de la commande : 99Fr</div>
    </div>
  );
}
}
export default connect(displayCart, cartAction)(ProductList);
