import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <div className="footer-wrap">
      <div className="footer-bg"></div>
        <div className="footer-left">
          <ul>
            <li className="visible">Home</li>
            <li className="visible">Catalog</li>
            <li className="visible">Login</li>
            <li className="visible">Login</li>
          </ul>
        </div>
        <div className="vertical-separator"></div>
        <div className="footer-middle">
          <div className="footer-review-item">
            <h3>"Good retention to there underpants"</h3>
            <p>John Doe, <i>12/12/2017</i></p>
          </div>
          <div className="footer-review-item">
            <h3>"Good retention to there underpants"</h3>
            <p>John Doe, <i>12/12/2017</i></p>
          </div>
          <div className="footer-review-item">
            <h3>"Good retention to there underpants"</h3>
            <p>John Doe, <i>12/12/2017</i></p>
          </div>
        </div>
        <div className="vertical-separator"></div>
        <div className="footer-right">
          <ul>
            <li className="visible">Home</li>
            <li className="visible">Catalog</li>
            <li className="visible">Login</li>
            <li className="visible">Login</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
