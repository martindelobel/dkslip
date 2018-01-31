import React, { Component } from "react";
import { connect } from "react-redux";
import { catalogActions } from "../store/catalog/actions.js";
import { displayCatalog } from "../store/catalog/selectors.js";

const slipCategories = [
  "b2342ec8-17e9-45b5-8286-db9a607ff33b",
  "a4cc335a-2d28-43a5-907a-b1de73324268",
  "4ac8d13e-b5e3-4ea1-942a-f8e651ea6220",
  "8afa89a2-1700-4ead-b674-140ba786b0f9",
  "e75cda8e-4ff7-4c14-9147-0c132f5ac955",
  "b9e509fa-e155-4ef2-a45c-1e5ac6360a5a",
  "54b40503-000f-4577-963b-750768cb8a5b",
  "00b3393b-e013-4e28-ab06-ada7c4cd53dc",
  "1d55e52f-b24b-4104-afb9-ae232f0c12e1",
  "dece0180-5722-4bd1-a8b1-cc3846ef522d",
  "1e50a483-a896-44e5-80d7-4d3692eb075c",
  "a48d7d2f-bf23-407e-ae75-77e3e7b1f599",
  "7c9d1df9-0fe6-4369-8476-d0c5f561d5fb",
  "5f8fd5f6-a4a3-444d-91e9-6c8483318b64",
  "e7d50dc4-3327-4662-a91a-2622fa5ad044"
];

class Catalog extends Component {

  componentDidMount() {
    this.props.getCatalog();
  }




  render() {
    const slippedCat = this.props.catalog.catList.filter(cat =>
      slipCategories.includes(cat.id)
    );

    return (
      <div>
        {slippedCat.map(cat => (
          <ul key={cat.id} >
            <li>{cat.label}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default connect(displayCatalog, catalogActions)(Catalog);
