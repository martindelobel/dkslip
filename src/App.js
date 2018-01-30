import React, { Component } from "react";
import "./style-general.css";
import Header from "./utils/header";
import Footer from "./utils/footer";
import Content from "./utils/content";
import Catalog from "./Catalog/Catalog";

class App extends Component {
  render() {
    return (
      <div className="General-Content">
        <Header />
        <Content />
        <Footer />
        <Catalog />
      </div>
    );
  }
}

export default App;
