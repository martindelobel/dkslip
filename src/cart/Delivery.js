import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { NavLink } from "react-router-dom";

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
          <label>Address</label>
          <Field name="Address" component="input" type="text"/>
        </div>
        <div>
          <label>ZipCode</label>
          <Field name="zipcode" component="input" type="text"/>
        </div>
        <div>
          <label>City</label>
          <Field name="city" component="input" type="text"/>
        </div>
        <div>
          <label>Country</label>
          <Field name="country" component="input" type="text"/>
        </div>
        <button type="submit"><NavLink to={`/payment`}>Submit</NavLink></button>
      </form>
    );
  }
}

// Decorate the form component
Delivery = reduxForm({
  form: 'delivery' // a unique name for this form
})(Delivery);

export default Delivery;
