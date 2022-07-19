import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./DetailsListItem.scss";

const DetailsListItem = ({
  inventoryItem,
  status,
  category,
  quantity,
  location,
}) => {
  return (
    <section className="details-item">
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Inventory Item</h4>
        <a className="details-item__text-link">
          {/* This needs to be changed to a Link*/}
          <h3>{inventoryItem}</h3>
          <img
            className="details-item__chevron-right"
            src={chevronRight}
            alt="chevron right"
          />
        </a>
      </div>
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Status</h4>
        <div className="details-item__highlight details-item__highlight--green">
          <h4 className="details-item__stock">{status}</h4>
        </div>
      </div>
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Category</h4>
        <p2>{category}</p2>
      </div>
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Qty</h4>
        <p2>{quantity}</p2>
      </div>
      {location && (
        <>
          <div className="details-item__section">
            {/*Empty section for mobile*/}
          </div>
          <div className="details-item__section">
            <h4 className="details-item__subtitle--mobile">Warehouse</h4>
            <p2>Manhattan</p2>
          </div>
        </>
      )}
      <div className="details-item__bottom-section">
        <img src={deleteIcon} alt="delete icon" />
        <img src={editIcon} alt="edit icon" />
      </div>
    </section>
  );
};

export default DetailsListItem;
