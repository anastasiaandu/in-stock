import React, { Component } from "react";
import axios from "axios";
import "./InventoryDetails.scss";
import NavigationHeader from "../NavigationHeader/NavigationHeader";

class InventoryDetails extends Component {
  state = {
    id: "",
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    console.log("Inventory ID", this.props.inventoryId);
    axios
      .get(`http://localhost:8080/inventories/${this.props.inventoryId}`)
      .then((response) => {
        console.log(response);
        this.setState({
          id: response.data.id,
          warehouseName: response.data.warehouseName,
          itemName: response.data.itemName,
          description: response.data.description,
          category: response.data.category,
          status: response.data.status,
          quantity: response.data.quantity,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      <h1 className="loading-state">Loading...</h1>;
      return;
    }

    return (
      <article className="inventory">
        <NavigationHeader title={this.state.itemName} showEditButton={true} />
        <div className="inventory__container">
          <div className="inventory__titles">
            <div className="inventory__description-heading">
              <h4 className="inventory__subtitle--mobile">Item Description:</h4>
              <p className="inventory__detail">{this.state.description}</p>
            </div>
            <div className="inventory__category-heading">
              <h4 className="inventory__subtitle--mobile">Category:</h4>
              <p className="inventory__detail inventory__detail--bottom">
                {this.state.category}
              </p>
            </div>
          </div>
          <div className="inventory__details">
            <div className="inventory__status-heading">
              <h4 className="inventory__subtitle--mobile">Status:</h4>
              <div
                className={`inventory__highlight ${
                  this.state.status === "In Stock"
                    ? "inventory__highlight--green"
                    : "inventory__highlight--red"
                }`}
              >
                <h4
                  className={`inventory__stock ${
                    this.state.status === "In Stock"
                      ? "inventory__stock--green"
                      : "inventory__stock--red"
                  }`}
                >
                  {this.state.status}
                </h4>
              </div>
            </div>
            <div className="inventory__warehouse-heading">
              <h4 className="inventory__subtitle--mobile">Warehouse:</h4>
              <p className="inventory__detail inventory__detail--bottom">
                {this.state.warehouseName}
              </p>
            </div>
            <div className="inventory__quantity-heading">
              <h4 className="inventory__subtitle--mobile">Quantity:</h4>
              <p className="inventory__detail">{this.state.quantity}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default InventoryDetails;
