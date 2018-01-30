import React, { Component } from 'react';
import '../style-general.css';


class Header extends Component {
  render(){
    return(
      <div className="Header-wrap">
        <div className="header-content">
          <div className="Navbar-content">
            <div className="Logo">
            <p>DKSLIP</p>
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
