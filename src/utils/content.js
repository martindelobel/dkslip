import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/user/actions";
import { getUserState } from "../store/user/selectors";
import Category from "../Catalog/Category";
import Product from "../Catalog/Product";
import Cart from "../cart/Cart";

class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/category/:idCategory" component={Category} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <div className="content-wrap">
          <div className="best-sellers-items">
            <h3 className="best-sellers-title"> Best Sellers </h3>
            <div className="best-sellers-row">
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button onClick={this.props.addToCart}>Add to cart TEST</button>
                  <button>View details</button>
                </div>
              </div>
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button>Add to cart</button>
                  <button>View details</button>
                </div>
              </div>
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button>Add to cart</button>
                  <button>View details</button>
                </div>
              </div>
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button>Add to cart</button>
                  <button>View details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="Reviews-test">
            <div className="review-bg" />
            <h3>"Good retention to there underpants"</h3>
            <p>
              John Doe, <i>12/12/2017</i>
            </p>
          </div>
          <div className="news-items-test">
            <h3 className="best-sellers-title"> Best Sellers </h3>
            <div className="best-sellers-row">
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button>Add to cart</button>
                  <button>View details</button>
                </div>
              </div>
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button>Add to cart</button>
                  <button>View details</button>
                </div>
              </div>
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button>Add to cart</button>
                  <button>View details</button>
                </div>
              </div>
              <div className="item-content">
                <span className="title-item">Underpants</span>
                <img src="https://www.decathlon.fr/media/823/8237717/big_595c9a2093c54b9e95c1818561369fc7.jpg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="price">9,99€</p>
                <div className="item-button-zone">
                  <button>Add to cart</button>
                  <button>View details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(getUserState, signOut)(Content));
