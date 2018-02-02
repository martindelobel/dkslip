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
      <h2>Type your delivery information</h2>
        <div className="flex-colum">
          <label>Address</label>
          <Field name="Address" component="input" type="text"/>
        </div>
        <div className="flex-column">
          <label>ZipCode</label>
          <Field name="zipcode" component="input" type="text"/>
        </div>
        <div className="flex-column">
          <label>City</label>
          <Field name="city" component="input" type="text"/>
        </div>
        <div className="flex-column">
          <label>Country</label>
          <Field name="country" component="input" type="text"/>
        </div>
        <div className="flex-column-flex-end">
        <button type="submit"><NavLink to={`/payment`} style={{ textDecoration: 'none' }}><p>Submit</p></NavLink></button>
        </div>
      </form>
    );
  }
}

// Decorate the form component
Delivery = reduxForm({
  form: 'delivery' // a unique name for this form
})(Delivery);

export default Delivery;
