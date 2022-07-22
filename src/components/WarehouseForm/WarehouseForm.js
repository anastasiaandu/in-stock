import React, { Component } from "react";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import "./WarehouseForm.scss";
class WarehouseForm extends Component {
  state = {
    warehouseName: "Washington",
    address: "33 Pearl Street SW",
    city: "Washington",
    country: "USA",
    contactName: "Saloni Jindal",
    position: "Developer",
    phoneNumber: "5197298285",
    email: "sgs@gmail.com",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      !this.state.warehouseName ||
      !this.state.address ||
      !this.state.city ||
      !this.state.country ||
      !this.state.contactName ||
      !this.state.position ||
      !this.state.phoneNumber ||
      !this.state.email
    ) {
      return alert("Please enter all the required field");
    }
    console.log("Submitted value =====>", this.state);
    // axios
    //   .patch(`${SERVER_URL}/ware`, this.state)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // alert("Your video has been submitted!");
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.name;
    this.setState({
      [value]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <article className="warehouse-form">
        <NavigationHeader title="Edit Warehouse" showEditButton={false} />
        <form className="warehouse-form__panel" onSubmit={this.handleSubmit}>
          <div className="warehouse-form__container">
            <section className="warehouse-form__input-panel">
              <h2 className="warehouse-form__title">Warehouse Details</h2>
              <label htmlFor="warehouse-name" name="warehouse-name">
                Warehouse Name
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange={this.handleChange}
                value={this.state.warehouseName}
                name="warehouse-name"
                placeholder={this.state.warehouseName}
              ></input>
              <label htmlFor="address" name="address">
                Street Address
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange={this.handleChange}
                value={this.state.address}
                name="address"
              ></input>
              <label htmlFor="city" name="city">
                City
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="country" name="country">
                Country
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
              ></input>
            </section>
            <section className="warehouse-form__input-panel">
              <h2 className="warehouse-form__title">Contact Details</h2>
              <label htmlFor="contact-name" name="contact-name">
                Contact Name
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange={this.handleChange}
                name="contact-name"
                value={this.state.contactName}
              ></input>
              <label htmlFor="position" name="position">
                Position
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange={this.handleChange}
                name="position"
                value={this.state.position}
              ></input>
              <label htmlFor="phone-number" name="phone-number">
                Phone Number
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                name="phone-number"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              ></input>
              <label htmlFor="email" name="email">
                Email
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
              ></input>
            </section>
          </div>

          <section className="warehouse-form__button-panel">
            <input
              type="button"
              id="cancel"
              className="warehouse-form__cancel"
              name="cancel"
              value="Cancel"
              onClick={() => this.props.history.push("/")}
            />
            <input
              type="submit"
              id="save"
              className="warehouse-form__submit"
              name="submit"
              value="Save"
            />
          </section>
        </form>
      </article>
    );
  }
}

export default WarehouseForm;
