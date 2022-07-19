import React, { Component } from "react";

class WarehouseForm extends Component {
  render() {
    return (
      <div>
        <div className="warehouseform__header">
          <button>back</button>
          <h1>Edit Warehouse</h1>
        </div>
        <form className="warehouseform__form">
          <div>
            <h2>Warehouse Details</h2>
            <label htmlFor="warehouse-name" name="warehouse-name">
              Warehouse Name
            </label>
            <input
              className=""
              type="text"
              onChange=""
              name="warehouse-name"
              placeholder="Washington"
            ></input>
            <label htmlFor="address" name="address">
              Street Address
            </label>
            <input
              className=""
              type="text"
              onChange=""
              name="address"
              placeholder="33 Pearl Street SW"
            ></input>
            <label htmlFor="warehouse-name" name="city">
              City
            </label>
            <input
              className=""
              type="text"
              name="city"
              placeholder="Washington"
            ></input>
            <label htmlFor="warehouse-name" name="country">
              Country
            </label>
            <input
              className=""
              type="text"
              onChange=""
              name="country"
              placeholder="USA"
            ></input>
          </div>
          <div>
            <h2>Contact Details</h2>
            <label htmlFor="warehouse-name" name="warehouse-name">
              Contact Name
            </label>
            <input
              className=""
              type="text"
              onChange=""
              name="warehouse-name"
              placeholder="Washington"
            ></input>
            <label htmlFor="address" name="address">
              Position
            </label>
            <input
              className=""
              type="text"
              onChange=""
              name="address"
              placeholder="33 Pearl Street SW"
            ></input>
            <label htmlFor="warehouse-name" name="city">
              Phone Number
            </label>
            <input
              className=""
              type="text"
              name="city"
              placeholder="Washington"
            ></input>
            <label htmlFor="warehouse-name" name="country">
              Email
            </label>
            <input
              className=""
              type="text"
              onChange=""
              name="country"
              placeholder="USA"
            ></input>
          </div>
          <div>
            <input
              type="button"
              id="cancel"
              className=""
              name="cancel"
              value="cancel"
              onClick={() => this.props.history.push("/")}
            />
            <input
              type="button"
              id="submit"
              className=""
              name="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default WarehouseForm;
