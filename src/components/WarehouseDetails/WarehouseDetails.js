import DetailsListItem from "../DetailsListItem/DetailsListItem";
import NavigationHeader from "../NavigationHeader/NavigationHeader";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehouseDetails.scss";

const WarehouseDetails = (props) => {
  return (
    <article className="warehouse-details">
      <NavigationHeader title="Washington" showEditButton={true} />
      <section className="warehouse-info">
        <div className="warehouse-info__address">
          <h4>Warehouse address:</h4>
          <p2>300 Pearl Street SW,</p2>
          <p2>Washington, USA</p2>
        </div>
        <div className="warehouse-info__contact-name">
          <h4>Contact name:</h4>
          <p2>Graeme Lyon</p2>
          <p2>Warehouse Manager</p2>
        </div>
        <div className="warehouse-info__contact-info">
          <h4>Contact information:</h4>
          <p2>+1 (647) 504 - 0911</p2>
          <p2>glyon@instock.com</p2>
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
      <DetailsListItem
        inventoryItem="Television"
        status="In stock"
        category="Electronics"
        quantity={500}
      />
      <DetailsListItem
        inventoryItem="Gym Bag"
        status="Out of stock"
        category="Gear"
        quantity={0}
      />
    </article>
  );
};

export default WarehouseDetails;
