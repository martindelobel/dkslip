import React, { Component } from 'react';
import './style-general.css';
import Header from './utils/header';
import Footer from './utils/footer';
import Content from './utils/content';
import logo from './logo.svg';
import './App.css';
import Getproduct from './Catalog/Product'

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

export default App;
