import React, { Component } from "react";
import axios from "axios";
import "./InventoryForm.scss";
import errorImg from "../../assets/icons/error-24px.svg";

class InventoryForm extends Component {
  handleSubmit = (e) => {
    console.log("Sumbit clicked");
  };
  render() {
    return (
      <article className="inventory-form">
        <NavigationHeader title="Edit Inventory item" showEditButton={false} />
        <form
          className="inventory-form__panel"
          onSubmit={this.handleSubmit}
        ></form>
      </article>
    );
  }
}
