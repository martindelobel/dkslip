import React, { Component } from "react";
import "../style-general.css";
import logo from "./logo.png";
import { connect } from "react-redux";
import { signOut } from "../store/user/actions";
import { getUserState } from "../store/user/selectors";
import Catalog from "../Catalog/Catalog";
import { NavLink, withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header-wrap">
        <div className="header-content">
          <div className="header-bg" />
          <div className="Navbar-content">
            <div className="Logo">
              <p className="dk-text">DK</p>
              <img className="logo-image" src={logo} alt="logo underpants" />
              <p className="slip-text">SLIP</p>
            </div>
            <div className="Item-Navbar">

                <div className="item-menu"><a href="/">Home</a></div>

              <div className="item-menu">
                Catalog
                <div className="subitem-menu">
                  <Catalog />
                </div>
              </div>
              <div className="item-menu">

                <NavLink to={`/cart`}>
                  cart
                  </NavLink>
              </div>
              <div className="google-connection">
                {this.props.user.id ? (
                  <div
                    className="signout item-menu"
                    onClick={this.props.signOut}
                  >
                    Sign out
                  </div>
                ) : (
                  <div
                    className="g-signin2"
                    data-onsuccess="googleConnectCallback"
                    data-theme="light"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="title-slider">
            {this.props.user.id ? (
              <div>
                <span>Welcome {this.props.user.fullname}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(getUserState, signOut)(Header));
