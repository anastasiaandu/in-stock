import axios from "axios";
import React from "react";
import DetailsListItem from "../DetailsListItem/DetailsListItem";
import InventoryHeader from "../InventoryHeader/InventoryHeader";
import "./InventoryList.scss";

class InventoryList extends React.Component {
  state = {
    inventory: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/inventories")
      .then((response) => {
        this.setState({ inventory: response.data });
      })
      .catch((error) => {
        console.log("There was an error retrieving the inventory:", error);
      });
  }
  render() {
    return (
      <section className="inventory">
        <InventoryHeader enableLocation={true} />
        <ul>
          {this.state.inventory.map((item) => {
            return (
              <DetailsListItem
                key={item.id}
                id={item.id}
                inventoryItem={item.itemName}
                status={item.status}
                category={item.category}
                quantity={item.quantity}
                location={item.warehouseName}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default InventoryList;
