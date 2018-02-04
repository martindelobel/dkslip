import React, { Component } from "react";
import { NavLink } from "react-router-dom";



class Success extends Component {
  render() {

    return (
      <div style={{textAlign:'center'}}>
      <div className="check_mark">
        <div className="sa-icon sa-success animate">
        <span className="sa-line sa-tip animateSuccessTip"></span>
        <span className="sa-line sa-long animateSuccessLong"></span>
        <div className="sa-placeholder"></div>
        <div className="sa-fix"></div>
        </div>
        </div>
        <p>Thank you for your order</p>
        <p>Click 
        <NavLink to={'/'}>
         here </NavLink>
        to return on home</p>
      </div>
    );
  }
}


export default Success;
