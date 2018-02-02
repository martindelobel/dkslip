import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Category from "../Catalog/Category";
import Product from "../Catalog/Product";
import Cart from "../cart/Cart";
import { getUserState } from "../store/user/selectors";
import DeliveryAddressConfirmation from "../cart/DeliveryAddressConfirmation";
import Home from "./home.js";
import Stripe from "../utils/stripe";
import Success from "../utils/payment_success";
import Failed from "../utils/payment_failed";

class Content extends Component {
  render() {
    return (
      <div>
      <div className="content-wrap">
        <Switch>
          <Route exact path="/"
          component={Home}/>
          <Route path="/category/:idCategory" component={Category} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/DeliveryAddressConfirmation" component={DeliveryAddressConfirmation}/>
          <Route path="/payment" component={Stripe}/>
          <Route path="/Success" component={Success}/>
          <Route path="/Failed" component={Failed}/>

        </Switch>

        </div>
      </div>
    );
  }
}

export default withRouter(connect(getUserState, null)(Content));
