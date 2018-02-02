import React, { Component } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { cartAction } from "../store/cart/actions.js";


class Stripe extends Component {
  onToken = token => {
    fetch("/charge", {
      method: "POST",
      body: JSON.stringify({
        stripeData: token,
        products: this.props.cart.productList,
        amount: this.props.cart.totalQty * 100
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "succeeded") {

          console.log(data);
          // dispatch a success
            this.props.actions.cartAction.deleteCart();
          this.props.history.push(`/Success`);

        } else {
          console.warn(data);
          this.props.history.push(`/Failed`);
        }
      });
  };
  render() {
    return (
      <div>
        <h1>Pay with Stripe</h1>
        <div className="Checkout">
          <StripeCheckout
            token={this.onToken}
            amount={this.props.cart.totalQty * 100}
            currency="EUR"
            stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            email=""
            name="Stripe Payment"
            description="Pay with Stripe"
          >
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: {
      productList: state.cartReducer.productList,
      totalQty:state.cartReducer.totalQty
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      cartAction: cartAction(dispatch)
    }
  };
}

export default connect( mapStateToProps,mapDispatchToProps)(Stripe);
