import DetailsListItem from "../DetailsListItem/DetailsListItem";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { Component } from "react";
import axios from "axios";
import "./WarehouseDetails.scss";

class WarehouseDetails extends Component {
  state = {
    address: null,
    city: null,
    country: null,
    contact: null,
    id: null,
    inventory: null,
    name: null,
    isLoading: true,
  };
  componentDidMount() {
    console.log("WarehouseDetails mounted");
    axios
      .get(`http://localhost:8080/warehouses/${this.props.warehouseId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          address: response.data.address,
          city: response.data.city,
          country: response.data.country,
          contact: response.data.contact,
          id: response.data.id,
          inventory: response.data.inventory,
          name: response.data.name,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(
          "There was an error fetching the warehouse details: ",
          error
        );
      });
  }
  render() {
    return this.state.isLoading ? (
      <h1 className="loading-state">Loading...</h1>
    ) : (
      <article className="warehouse-details">
        <NavigationHeader title={this.state.name} showEditButton={true} />
        <section className="warehouse-info">
          <div className="warehouse-info__address">
            <h4>Warehouse address:</h4>
            <p2>{this.state.address}</p2>
            <p2>
              {this.state.city}, {this.state.country}
            </p2>
          </div>
          <div className="warehouse-info__contact-name">
            <h4>Contact name:</h4>
            <p2>{this.state.contact.name}</p2>
            <p2>{this.state.contact.position}</p2>
          </div>
          <div className="warehouse-info__contact-info">
            <h4>Contact information:</h4>
            <p2>{this.state.contact.phone}</p2>
            <p2>{this.state.contact.email}</p2>
          </div>
        </section>
        <section className="warehouse-sort-header">
          <div className="warehouse-sort-header__section">
            <h4>Inventory Item</h4>
            <img
              className="warehouse-sort-header__sort-icon"
              src={sortIcon}
              alt="sort"
            />
          </div>
          <div className="warehouse-sort-header__section">
            <h4>Category</h4>
            <img
              className="warehouse-sort-header__sort-icon"
              src={sortIcon}
              alt="sort"
            />
          </div>
          <div className="warehouse-sort-header__section">
            <h4>Status</h4>
            <img
              className="warehouse-sort-header__sort-icon"
              src={sortIcon}
              alt="sort"
            />
          </div>
          <div className="warehouse-sort-header__section">
            <h4>Quantity</h4>
            <img
              className="warehouse-sort-header__sort-icon"
              src={sortIcon}
              alt="sort"
            />
          </div>
          <h4>Actions</h4>
        </section>
        {this.state.inventory.map((item) => {
          return (
            <DetailsListItem
              key={item.id}
              id={item.id}
              inventoryItem={item.itemName}
              category={item.category}
              status={item.status}
              quantity={item.quantity}
            />
          );
        })}
      </article>
    );
  }
}

export default WarehouseDetails;
