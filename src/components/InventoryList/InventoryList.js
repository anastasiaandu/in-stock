import axios from "axios";
import React from "react";
import DetailsListItem from "../DetailsListItem/DetailsListItem";
import InventoryHeader from "../InventoryHeader/InventoryHeader";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./InventoryList.scss";

class InventoryList extends React.Component {
  state = {
    inventory: [],
    selectedInventoryId: "",
    selectedInventoryName: "",
    showModal: false
  };

  //function to handle inventory delete
  handleDelete = (selectedInventoryId, selectedInventoryName) => {
    this.setState({
      showModal: true,
      selectedInventoryId: selectedInventoryId,
      selectedInventoryName: selectedInventoryName,
    });
  };

  //function to handle delete cancel
  handleCancel = () => {
    this.setState({
      showModal: false,
    });
  };

  //function to handle delete confirm
  handleConfirmDelete = (id) => {
    axios
      .delete(`http://localhost:8080/inventories/${id}`)
      .then(() => {
        this.setState({
          showModal: false,
        });
        this.updatePage();
      })
      .catch((error) => {
        console.log("There was an error deleting the warehouse: ", error);
      });
  };

  //function to update page
  updatePage = () => {
    axios
      .get(`http://localhost:8080/inventories`)
      .then((response) => {
        this.setState({
          inventory: response.data
        });
      })
      .catch((error) => {
        console.log("There was an error retrieving the inventory:", error);
      });
  };

  componentDidMount() {
    this.updatePage();
  }

  render() {
    return (
      <section className="inventory">
        <DeleteModal
          show={this.state.showModal}
          onClose={this.handleCancel}
          onConfirmDelete={this.handleConfirmDelete}
          id={this.state.selectedInventoryId}
          title={this.state.selectedInventoryName}
          itemType="inventory list"
        />

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
                onDelete={this.handleDelete}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default InventoryList;
