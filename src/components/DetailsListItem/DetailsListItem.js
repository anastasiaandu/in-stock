import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import TextLink from "../TextLink/TextLink";
import "./DetailsListItem.scss";
import { Link } from "react-router-dom";
const DetailsListItem = ({
  inventoryItem,
  status,
  category,
  quantity,
  location,
  id,
  onDelete,
}) => {
  const handleOnDelete = () => {
    onDelete(id, inventoryItem);
  };

  return (
    <section className="details-item">
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Inventory Item</h4>
        <TextLink id={id} inventoryItem={inventoryItem} />
      </div>
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Status</h4>
        <div
          className={`details-item__highlight details-item__highlight--mobile ${
            status === "In Stock"
              ? "details-item__highlight--green"
              : "details-item__highlight--red"
          }`}
        >
          <h4
            className={`details-item__stock ${
              status === "In Stock"
                ? "details-item__stock--green"
                : "details-item__stock--red"
            }`}
          >
            {status}
          </h4>
        </div>
        <p className="details-item__category--tablet">{category}</p>
      </div>
      <div className="details-item__section">
        <h4 className="details-item__subtitle--mobile">Category</h4>
        <p className="details-item__category--mobile">{category}</p>
        <div
          className={`details-item__highlight details-item__highlight--tablet ${
            status === "In Stock"
              ? "details-item__highlight--green"
              : "details-item__highlight--red"
          }`}
        >
          <h4
            className={`details-item__stock ${
              status === "In Stock"
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
        <p>{quantity}</p>
      </div>
      {location && (
        <>
          <div className="details-item__section details-item__section--spacing">
            {/*Empty section for mobile*/}
          </div>
          <div className="details-item__section">
            <h4 className="details-item__subtitle--mobile">Warehouse</h4>
            <p>{location}</p>
          </div>
        </>
      )}
      <div className="details-item__bottom-section">
        <img
          className="details-item__action-button"
          src={deleteIcon}
          alt="delete icon"
          onClick={handleOnDelete}
        />
        <Link to={`/inventory/${id}/edit`}>
          <img
            className="details-item__action-button"
            src={editIcon}
            alt="edit icon"
          />
        </Link>
      </div>
    </section>
  );
};

export default DetailsListItem;
