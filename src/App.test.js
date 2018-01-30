import ReactDOM from 'react-dom';
import App from './App';
import React, { Component } from "react";
import { connect } from "react-redux";
import { catalogActions } from "../store/catalog/actions.js";
import { displayCatalog } from "../store/catalog/selectors.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
