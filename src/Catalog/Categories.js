import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <p>Camp2 Fewlines Team</p>
      </div>
    );
  }
}

export default connect(null, null)(Categories);
