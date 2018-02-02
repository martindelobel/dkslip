import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";


class Stripe extends Component {
  onToken = token => {
    fetch("/charge", {
      method: "POST",
      body: JSON.stringify({
        stripeData: token,
        products: [
          {id: 42, quantity: 2},
          {id: 1337, quantity: 1}
        ]
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "succeeded") {

          console.log(data);
          // dispatch a success
          this.props.history.push(`/Success`);
        } else {
          console.warn(data);
          this.props.history.push(`/Failed`);
        }
      });
  };
  render() {
    return (
        <div className="Checkout">
          <StripeCheckout
            token={this.onToken}
            amount={999}
            currency="EUR"
            stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            email="toto@toto.com"
            name="My Demo of Stripe"
            description="Change me into a description"
          >
          </StripeCheckout>
        </div>
    );
  }
}

export default Stripe;
