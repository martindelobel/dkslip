import React, { Component } from 'react';
import '../style-general.css';
import logo from './logo.png';
import { connect } from "react-redux";
import { signOut } from "../store/user/actions";
import { getUserState } from "../store/user/selectors";


class Header extends Component {
  render(){
    return(
      <div className="Header-wrap">
        <div className="header-content">
          <div className="Navbar-content">
            <div className="Logo">
              <p className="dk-text">DK</p><img className="logo-image" src={logo}></img><p className="slip-text">SLIP</p>
            </div>
            <div className="Item-Navbar">
                <span className="item-menu">Home</span>
                <span className="item-menu">Catalog</span>
                <div className="google-connection">
              {this.props.user.id ? (
                  <div className="signout item-menu" onClick={this.props.signOut}>
                    Sign out
                  </div>
                ) : (
                  <div
                    className="g-signin2"
                    data-onsuccess="googleConnectCallback"
                    data-theme="light"/>
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

export default connect(getUserState, signOut)(Header);
