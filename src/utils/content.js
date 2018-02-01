import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Category from "../Catalog/Category";
import Product from "../Catalog/Product";
import Cart from "../cart/Cart";
import { getUserState } from "../store/user/selectors";
import DeliveryAddressConfirmation from "../cart/DeliveryAddressConfirmation";
import Home from "./home.js";



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
        </Switch>

        </div>
      </div>
    );
  }
}

export default withRouter(connect(getUserState, null)(Content));
