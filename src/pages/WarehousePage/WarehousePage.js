import React, { Component } from "react";
import axios from "axios";
import "./WarehousePage.scss";
// import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

class WarehousePage extends Component {
  state = {
    warehouses: [],
    selectedWarehouseId: "",
    selectedWarehouseName: "",
    showModal: false,
    isError: false,
  };

  //function to handle warehouse delete
  handleDelete = (selectedWarehouseId, selectedWarehouseName) => {
    this.setState({
      showModal: true,
      selectedWarehouseId: selectedWarehouseId,
      selectedWarehouseName: selectedWarehouseName,
    });
  };

  //function to handle delete cancel
  handleCancel = () => {
    this.setState({
      showModal: false,
    });
  };

  handleConfirmDelete = (id) => {
    axios
      .delete(`http://localhost:8080/warehouses/${id}`)
      .then(() => {
        this.setState({
          showModal: false,
        });
        this.updatePage();
      })
      .catch((error) => {
        console.log("There was an error deleting the warehouse: ", error);
        this.setState({
          isError: true,
        });
      });
  };

  //function to update page
  updatePage = () => {
    axios
      .get(`http://localhost:8080/warehouses`)
      .then((response) => {
        this.setState({
          warehouses: response.data,
        });
      })
      .catch(() => {
        this.setState({
          iisError: true,
        });
      });
  };

  componentDidMount() {
    this.updatePage();
  }

  render() {
    if (this.state.warehouses.length === 0) {
      return;
    }

    return (
      <>
        <DeleteModal
          show={this.state.showModal}
          onClose={this.handleCancel}
          onConfirmDelete={this.handleConfirmDelete}
          id={this.state.selectedWarehouseId}
          title={this.state.selectedWarehouseName}
          itemType="warehouse"
        />
        <main>
          {/* <WarehouseForm /> */}
          <WarehousesList
            warehouses={this.state.warehouses}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default WarehousePage;
