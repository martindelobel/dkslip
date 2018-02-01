import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

class Delivery extends Component {
  handleSubmit() {
    this.props.onSubmit({
      firstName: this.props.firstName,
    })
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label>Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
Delivery = reduxForm({
  form: 'delivery' // a unique name for this form
})(Delivery);

export default Delivery;
