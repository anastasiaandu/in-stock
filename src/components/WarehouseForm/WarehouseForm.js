import React, { Component } from "react";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import "./WarehouseForm.scss";
class WarehouseForm extends Component {
  render() {
    return (
      <article className="warehouse-form">
        <NavigationHeader title="Edit Warehouse" showEditButton={false} />
        <form className="warehouse-form__panel">
          <div className="warehouse-form__container">
            <section className="warehouse-form__input-panel">
              <h2 className="warehouse-form__title">Warehouse Details</h2>
              <label htmlFor="warehouse-name" name="warehouse-name">
                Warehouse Name
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange=""
                name="warehouse-name"
                placeholder="Washington"
              ></input>
              <label htmlFor="address" name="address">
                Street Address
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange=""
                name="address"
                placeholder="33 Pearl Street SW"
              ></input>
              <label htmlFor="warehouse-name" name="city">
                City
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                name="city"
                placeholder="Washington"
              ></input>
              <label htmlFor="warehouse-name" name="country">
                Country
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange=""
                name="country"
                placeholder="USA"
              ></input>
            </section>
            <section className="warehouse-form__input-panel">
              <h2 className="warehouse-form__title">Contact Details</h2>
              <label htmlFor="warehouse-name" name="warehouse-name">
                Contact Name
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange=""
                name="warehouse-name"
                placeholder="Washington"
              ></input>
              <label htmlFor="address" name="address">
                Position
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange=""
                name="address"
                placeholder="33 Pearl Street SW"
              ></input>
              <label htmlFor="warehouse-name" name="city">
                Phone Number
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                name="city"
                placeholder="Washington"
              ></input>
              <label htmlFor="warehouse-name" name="country">
                Email
              </label>
              <input
                className="warehouse-form__input"
                type="text"
                onChange=""
                name="country"
                placeholder="USA"
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
              type="button"
              id="submit"
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
