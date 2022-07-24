import sortIcon from "../../assets/icons/sort-24px.svg";
import "./InventoryHeader.scss";
import { Link } from "react-router-dom";
const InventoryHeader = ({ enableLocation }) => {
  return (
    <section>
      <div className="inventory__header">
        <h1>Inventory</h1>
        <form className="inventory__form">
          <input
            type="text"
            placeholder="Search..."
            id="inventory-search"
            className="inventory__search"
            name="inventorySearch"
          />
          <Link to={`/inventory/add`}>
            <button className="inventory__add-button">+ Add New Item</button>
          </Link>
        </form>
      </div>
      <section className="inventory-sort-header">
        <div className="inventory-sort-header__section">
          <h4>Inventory Item</h4>
          <img
            className="inventory-sort-header__sort-icon"
            src={sortIcon}
            alt="sort"
          />
        </div>
        <div className="inventory-sort-header__section">
          <h4>Category</h4>
          <img
            className="inventory-sort-header__sort-icon"
            src={sortIcon}
            alt="sort"
          />
        </div>
        <div className="inventory-sort-header__section">
          <h4>Status</h4>
          <img
            className="inventory-sort-header__sort-icon"
            src={sortIcon}
            alt="sort"
          />
        </div>
        <div className="inventory-sort-header__section">
          {enableLocation ? <h4>Qty</h4> : <h4>Quantity</h4>}
          <img
            className="inventory-sort-header__sort-icon"
            src={sortIcon}
            alt="sort"
          />
        </div>
        {enableLocation && (
          <div className="inventory-sort-header__section">
            <h4>Warehouse</h4>
            <img
              className="inventory-sort-header__sort-icon"
              src={sortIcon}
              alt="sort"
            />
          </div>
        )}
        <h4>Actions</h4>
      </section>
    </section>
  );
};

export default InventoryHeader;
