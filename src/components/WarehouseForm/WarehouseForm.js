import React, { Component } from "react";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import "./WarehouseForm.scss";
import axios from "axios";
import errorImg from "../../assets/icons/error-24px.svg";
class WarehouseForm extends Component {
  state = {
    id: "",
    name: "",
    address: "",
    city: "",
    country: "",
    contact: {
      name: "",
      position: "",
      phone: "",
      email: "",
    },
    errorField: {
      name: false,
      address: false,
      city: false,
      country: false,
      contactName: false,
      position: false,
      phone: false,
      email: false,
    },
  };
  actionStatus = "add";
  handleSubmit = (e) => {
    e.preventDefault();
    let ifFormValid = true;
    if (!this.state.name) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          name: true,
        },
      }));
    }
    if (!this.state.address) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          address: true,
        },
      }));
    }
    if (!this.state.city) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          city: true,
        },
      }));
    }
    if (!this.state.country) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          country: true,
        },
      }));
    }
    if (!this.state.contact.name) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          contactName: true,
        },
      }));
    }
    if (!this.state.contact.position) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          position: true,
        },
      }));
    }
    if (!this.state.contact.phone) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          phone: true,
        },
      }));
    }
    if (!this.state.contact.email) {
      ifFormValid = false;
      this.setState((prevState) => ({
        errorField: {
          ...prevState.errorField,
          email: true,
        },
      }));
    }

    if (!ifFormValid) {
      return;
    }
    this.actionStatus === "edit" &&
      axios
        .patch(`http://localhost:8080/warehouses/${this.state.id}`, this.state)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          ifFormValid = false;
        });

    this.actionStatus === "add" &&
      axios
        .post(`http://localhost:8080/warehouses`, this.state)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          ifFormValid = false;
        });

    this.actionStatus === "add"
      ? alert("New Warehouse Details has been added!")
      : alert("Warehouse Details has been updated!");
    this.props.props.history.push("/");
  };

  handleChange = (contact) => (e) => {
    if (!contact) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState((prevState) => ({
        contact: {
          ...prevState.contact,
          [e.target.name]: e.target.value,
        },
      }));
    }
  };
  handleFocus = (value) => (e) => {
    this.setState({
      errorField: { [value]: false },
    });
    e.target.removeAttribute(e.target.id);
  };

  //Update page with pre-filled warehouse details
  componentDidMount() {
    this.actionStatus = this.props.props.status;
    if (this.actionStatus === "edit") {
      axios
        .get(`http://localhost:8080/warehouses`)
        .then((response) => {
          const selectedWarehouse = response.data.find((warehouse) => {
            return warehouse.id === this.props.props.match.params.id;
          });

          this.setState({
            id: selectedWarehouse.id,
            name: selectedWarehouse.name,
            address: selectedWarehouse.address,
            city: selectedWarehouse.city,
            country: selectedWarehouse.country,
            contact: {
              name: selectedWarehouse.contact.name,
              position: selectedWarehouse.contact.position,
              phone: selectedWarehouse.contact.phone,
              email: selectedWarehouse.contact.email,
            },
          });
        })
        .catch(() => {
          this.setState({
            isError: true,
          });
        });
    }
  }

  render() {
    let titleHeading = "";
    this.actionStatus === "add" && (titleHeading = "Add New Warehouse");
    this.actionStatus === "edit" && (titleHeading = "Edit Warehouse");
    return (
      <article className="warehouse-form">
        <NavigationHeader title={titleHeading} showEditButton={false} />
        <form className="warehouse-form__panel" onSubmit={this.handleSubmit}>
          <div className="warehouse-form__container">
            <section className="warehouse-form__input-panel">
              <h2 className="warehouse-form__title">Warehouse Details</h2>
              <div className="warehouse-form__inputfield">
                <label htmlFor="name" name="name">
                  Warehouse Name
                </label>
                <input
                  onFocus={this.handleFocus("name")}
                  className="warehouse-form__input"
                  id={`${
                    this.state.errorField.name && "warehouse-form__error-border"
                  }`}
                  type="text"
                  onChange={this.handleChange("")}
                  value={this.state.name}
                  name="name"
                  placeholder={
                    this.state.name ? this.state.name : "Warehouse Name"
                  }
                ></input>
                {this.state.errorField.name && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
              <div className="warehouse-form__inputfield">
                <label htmlFor="address" name="address">
                  Street Address
                </label>
                <input
                  onFocus={this.handleFocus("address")}
                  id={`${
                    this.state.errorField.address &&
                    "warehouse-form__error-border"
                  }`}
                  className="warehouse-form__input"
                  type="text"
                  onChange={this.handleChange("")}
                  value={this.state.address}
                  name="address"
                  placeholder={
                    this.state.address ? this.state.address : "Street Address"
                  }
                ></input>
                {this.state.errorField.address && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
              <div className="warehouse-form__inputfield">
                <label htmlFor="city" name="city">
                  City
                </label>
                <input
                  onFocus={this.handleFocus("city")}
                  className="warehouse-form__input"
                  id={`${
                    this.state.errorField.city && "warehouse-form__error-border"
                  }`}
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange("")}
                  placeholder={this.state.city ? this.state.city : "City"}
                ></input>
                {this.state.errorField.city && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
              <div className="warehouse-form__inputfield">
                <label htmlFor="country" name="country">
                  Country
                </label>
                <input
                  onFocus={this.handleFocus("country")}
                  id={`${
                    this.state.errorField.country &&
                    "warehouse-form__error-border"
                  }`}
                  className="warehouse-form__input"
                  type="text"
                  name="country"
                  value={this.state.country}
                  onChange={this.handleChange("")}
                  placeholder={
                    this.state.country ? this.state.country : "Country"
                  }
                ></input>
                {this.state.errorField.country && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
            </section>
            <section className="warehouse-form__input-panel">
              <h2 className="warehouse-form__title">Contact Details</h2>
              <div className="warehouse-form__inputfield">
                <label htmlFor="contact-name" name="contact-name">
                  Contact Name
                </label>
                <input
                  onFocus={this.handleFocus("contactName")}
                  id={`${
                    this.state.errorField.contactName &&
                    "warehouse-form__error-border"
                  }`}
                  className="warehouse-form__input"
                  type="text"
                  onChange={this.handleChange("contact")}
                  name="name"
                  value={this.state.contact.name}
                  placeholder={
                    this.state.contact.name
                      ? this.state.contact.name
                      : "Contact Name"
                  }
                ></input>
                {this.state.errorField.contactName && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
              <div className="warehouse-form__inputfield">
                <label htmlFor="position" name="position">
                  Position
                </label>
                <input
                  onFocus={this.handleFocus("position")}
                  id={`${
                    this.state.errorField.position &&
                    "warehouse-form__error-border"
                  }`}
                  className="warehouse-form__input"
                  type="text"
                  onChange={this.handleChange("contact")}
                  name="position"
                  value={this.state.contact.position}
                  placeholder={
                    this.state.contact.position
                      ? this.state.contact.position
                      : "Position"
                  }
                ></input>
                {this.state.errorField.position && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
              <div className="warehouse-form__inputfield">
                <label htmlFor="phone" name="phone">
                  Phone Number
                </label>
                <input
                  onFocus={this.handleFocus("phone")}
                  id={`${
                    this.state.errorField.phone &&
                    "warehouse-form__error-border"
                  }`}
                  className="warehouse-form__input"
                  type="text"
                  name="phone"
                  value={this.state.contact.phone}
                  onChange={this.handleChange("contact")}
                  placeholder={
                    this.state.contact.phone
                      ? this.state.contact.phone
                      : "Phone Number"
                  }
                ></input>
                {this.state.errorField.phone && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
              <div className="warehouse-form__inputfield">
                <label htmlFor="email" name="email">
                  Email
                </label>
                <input
                  onFocus={this.handleFocus("email")}
                  id={`${
                    this.state.errorField.email &&
                    "warehouse-form__error-border"
                  }`}
                  className="warehouse-form__input"
                  type="text"
                  onChange={this.handleChange("contact")}
                  name="email"
                  value={this.state.contact.email}
                  placeholder={
                    this.state.contact.email
                      ? this.state.contact.email
                      : "Email"
                  }
                ></input>
                {this.state.errorField.email && (
                  <div className="warehouse-form__error-container">
                    <img
                      src={errorImg}
                      alt="Error Asteric"
                      className="warehouse-form__error-icon"
                    />
                    <p3 className="warehouse-form__error-text">
                      This field is required
                    </p3>
                  </div>
                )}
              </div>
            </section>
          </div>

          <section className="warehouse-form__button-panel">
            <input
              type="button"
              id="cancel"
              className="warehouse-form__cancel"
              name="cancel"
              value="Cancel"
              onClick={() => this.props.props.history.push("/")}
            />
            <input
              type="submit"
              id="save"
              className="warehouse-form__submit"
              name="submit"
              value={this.actionStatus === "add" ? "+ Add Warehouse" : "Save"}
            />
          </section>
        </form>
      </article>
    );
  }
}

export default WarehouseForm;
