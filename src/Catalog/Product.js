import React, { Component } from 'react';
const fetch = require("node-fetch");


function Getproduct(props){
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${props.id}`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return (
        <div>
          <p>{result.brand_id}</p>
        </div>
      )
    })
    .catch((error) => {
      console.warn(error);
    });
}


export default Getproduct;
