import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import './style-general.css';
import Header from './utils/header';
import Footer from './utils/footer';
import Content from './utils/content';
import Cart from './cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="General-Content">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null)(App));
