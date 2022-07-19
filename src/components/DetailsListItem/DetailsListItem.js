import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import TextLink from "../TextLink/TextLink";
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
        <TextLink inventoryItem={inventoryItem} />
      </div>
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Status</h4>
        <div
          className={`details-item__highlight details-item__highlight--mobile ${
            status === "In stock"
              ? "details-item__highlight--green"
              : "details-item__highlight--red"
          }`}
        >
          <h4
            className={`details-item__stock ${
              status === "In stock"
                ? "details-item__stock--green"
                : "details-item__stock--red"
            }`}
          >
            {status}
          </h4>
        </div>
        <p2 className="details-item__category--tablet">{category}</p2>
      </div>
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Category</h4>
        <p2 className="details-item__category--mobile">{category}</p2>
        <div
          className={`details-item__highlight details-item__highlight--tablet ${
            status === "In stock"
              ? "details-item__highlight--green"
              : "details-item__highlight--red"
          }`}
        >
          <h4
            className={`details-item__stock ${
              status === "In stock"
                ? "details-item__stock--green"
                : "details-item__stock--red"
            }`}
          >
            {status}
          </h4>
        </div>
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
        <img
          className="details-item__action-button"
          src={deleteIcon}
          alt="delete icon"
        />
        <img
          className="details-item__action-button"
          src={editIcon}
          alt="edit icon"
        />
      </div>
    </section>
  );
};

export default DetailsListItem;
