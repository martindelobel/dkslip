import ReactDOM from 'react-dom';
import App from './App';
import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
