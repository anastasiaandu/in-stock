import React, { Component } from "react";
import axios from "axios";
import "./InventoryForm.scss";
import errorImg from "../../assets/icons/error-24px.svg";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
class InventoryForm extends Component {
  state = {
    id: "",
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: "",
    errorField: {
      warehouseName: false,
      itemName: false,
      description: false,
      category: false,
      status: false,
      quantity: false,
    },
  };
  actionStatus = "add";
  //Update page with pre-filled Inventory details
  componentDidMount() {
    this.actionStatus = this.props.props.status;
    if (this.actionStatus === "edit") {
      axios
        .get(`http://localhost:8080/inventories`)
        .then((response) => {
          const selectedInventory = response.data.find((inventory) => {
            return inventory.id === this.props.props.match.params.id;
          });

          this.setState({
            id: selectedInventory.id,
            warehouseName: selectedInventory.warehouseName,
            description: selectedInventory.description,
            category: selectedInventory.category,
            status: selectedInventory.status,
            itemName: selectedInventory.itemName,
            quantity: selectedInventory.quantity,
          });
        })
        .catch(() => {
          this.setState({
            isError: true,
          });
        });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let ifFormValid = true;
    if (!this.state.warehouseName) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          warehouseName: true,
        },
      }));
    }
    if (!this.state.itemName) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          itemName: true,
        },
      }));
    }
    if (!this.state.description) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          description: true,
        },
      }));
    }
    if (!this.state.category) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          category: true,
        },
      }));
    }
    if (!this.state.status) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          status: true,
        },
      }));
    }
    if (!this.state.quantity) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          quantity: true,
        },
      }));
    }
    if (!ifFormValid) {
      return;
    }

    this.actionStatus === "edit" &&
      axios
        .patch(`http://localhost:8080/inventories/${this.state.id}`, this.state)
        .then(() => {})
        .catch((error) => {
          ifFormValid = false;
        });
    this.actionStatus === "add" &&
      axios
        .post(`http://localhost:8080/inventories`, this.state)
        .catch((error) => {
          ifFormValid = false;
        });

    this.actionStatus === "add"
      ? alert("New Inventory Details has been added!")
      : alert("Inventory Details has been updated!");
    this.props.props.history.push("/inventory");
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFocus = (value) => (e) => {
    this.setState({
      errorField: { [value]: false },
    });
    e.target.removeAttribute(e.target.id);
  };

  render() {
    let titleHeading = "";
    this.actionStatus === "add" && (titleHeading = "Add New Inventory Item");
    this.actionStatus === "edit" && (titleHeading = "Edit Inventory Item");
    return (
      <article className="inventory-form">
        <NavigationHeader title={titleHeading} showEditButton={false} />
        <form className="inventory-form__panel" onSubmit={this.handleSubmit}>
          <div className="inventory-form__container">
            <section className="inventory-form__input-panel">
              <h2 className="inventory-form__title">Inventory Details</h2>
              <div className="inventory-form__inputfield">
                <label htmlFor="name" name="itemName">
                  Item Name
                </label>
                <input
                  onFocus={this.handleFocus("itemName")}
                  className="inventory-form__input"
                  id={`${
                    this.state.errorField.itemName &&
                    "inventory-form__error-border"
                  }`}
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.itemName}
                  name="itemName"
                  placeholder={
                    this.state.itemName ? this.state.itemName : "Item Name"
                  }
                ></input>
                {this.state.errorField.itemName && (
                  <div className="inventory-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="inventory-form__error-icon"
                    />
                    <p className="inventory-form__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
              <div className="inventory-form__inputfield">
                <label htmlFor="description" name="description">
                  Description
                </label>
                <textarea
                  onFocus={this.handleFocus("description")}
                  className="inventory-form__input"
                  rows={7}
                  id={`${
                    this.state.errorField.description &&
                    "inventory-form__error-border"
                  }`}
                  type="textarea"
                  onChange={this.handleChange}
                  value={this.state.description}
                  name="description"
                  placeholder={
                    this.state.description
                      ? this.state.description
                      : "Description"
                  }
                ></textarea>
                {this.state.errorField.description && (
                  <div className="inventory-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="inventory-form__error-icon"
                    />
                    <p className="inventory-form__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
              <div className="inventory-form__inputfield">
                <label htmlFor="category" name="category">
                  Category
                </label>
                <select
                  className="inventory-form__input"
                  name="category"
                  id={`${
                    this.state.errorField.category &&
                    "inventory-form__error-border"
                  }`}
                  value={this.state.category}
                  onChange={this.handleChange}
                  defaultValue={"default"}
                  placeholder={
                    this.state.category ? this.state.category : "Please Select"
                  }
                >
                  <option disabled={true} value="">
                    Please Select
                  </option>
                  <option value="electronics">Electronics</option>
                  <option value="gear">Gear</option>
                  <option value="apparel">Apparel</option>
                  <option value="accessories">Accessories</option>
                  <option value="health">Health</option>
                </select>
                {this.state.errorField.category && (
                  <div className="inventory-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="inventory-form__error-icon"
                    />
                    <p className="inventory-form__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </section>
            <section className="inventory-form__input-panel">
              <h2 className="inventory-form__title">Contact Details</h2>
              <div className="inventory-form__inputfield">
                <label htmlFor="status" name="status">
                  Status
                </label>
                <div className="inventory-form__radio">
                  <label className="inventory-form__radio-label">
                    <input
                      type="radio"
                      value="In Stock"
                      name="status"
                      checked={this.state.status === "In Stock"}
                      onChange={this.handleChange}
                    />
                    In Stock
                  </label>
                  <label className="inventory-form__radio-label">
                    <input
                      type="radio"
                      value={"Out of Stock"}
                      name="status"
                      checked={this.state.status === "Out of Stock"}
                      onChange={this.handleChange}
                    />
                    Out of Stock
                  </label>
                </div>
              </div>
              {this.state.status === "In Stock" && (
                <div className="inventory-form__inputfield">
                  <label htmlFor="quantity" name="quantity">
                    Quantity
                  </label>
                  <input
                    onFocus={this.handleFocus("quantity")}
                    className="inventory-form__input"
                    id={`${
                      this.state.errorField.quantity &&
                      "inventory-form__error-border"
                    }`}
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.quantity}
                    name="quantity"
                    placeholder={
                      this.state.quantity ? this.state.quantity : "0"
                    }
                  ></input>
                  {this.state.errorField.quantity && (
                    <div className="inventory-form__error-container">
                      <img
                        src={errorImg}
                        alt="Error Asteric"
                        className="inventory-form__error-icon"
                      />
                      <p className="inventory-form__error-text">
                        This field is required
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="inventory-form__inputfield">
                <label htmlFor="warehouse" name="warehouseName">
                  Warehouse
                </label>
                <select
                  id={`${
                    this.state.errorField.warehouseName &&
                    "inventory-form__error-border"
                  }`}
                  className="inventory-form__input"
                  name="warehouseName"
                  value={this.state.warehouseName}
                  onChange={this.handleChange}
                  defaultValue={"default"}
                >
                  <option disabled={true} value="">
                    Please Select
                  </option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Washington">Washington</option>
                  <option value="Jersey">Jersey</option>
                  <option value="San Fran">San Fran</option>
                  <option value="Santa Monica">Santa Monica</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Miami">Miami</option>
                </select>
                {this.state.errorField.warehouseName && (
                  <div className="inventory-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="inventory-form__error-icon"
                    />
                    <p className="inventory-form__error-text">
                      This field is required
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
          <section className="inventory-form__button-panel">
            <input
              type="button"
              id="cancel"
              className="inventory-form__cancel"
              name="cancel"
              value="Cancel"
              onClick={() => this.props.props.history.push("/inventory")}
            />
            <input
              type="submit"
              id="save"
              className="inventory-form__submit"
              name="submit"
              value={this.actionStatus === "add" ? "+ Add Item" : "Save"}
            />
          </section>
        </form>
      </article>
    );
  }
}
export default InventoryForm;
