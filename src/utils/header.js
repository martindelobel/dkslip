import React, { Component } from 'react';
import '../style-general.css';
import logo from './logo.png';


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
              <ul>
                <li className="visible">Home</li>
                <li className="visible">Catalog</li>
                <li className="visible">Login</li>
                <li className="hidden">Logout</li>
              </ul>
            </div>
          </div>
          <div className="Slider-Content">
            <h2 className="slider-title1">DKSLIP</h2>
          </div>
        </div>
      </div>



    );
  }
}

export default Header;
