import React, { Component } from 'react';
import './style-general.css';
import Header from './utils/header';
import Footer from './utils/footer';
import Content from './utils/content';
import logo from './logo.svg';
import Catalog from './Catalog/Catalog'
import Cart from './cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="General-Content">
        <Header />
        <Cart />
        <Content />
        <Footer />
        <Catalog />
      </div>
    );
  }
}

export default App;
