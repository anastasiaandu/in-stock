import { Link } from "react-router-dom";
import "./Warehouse.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const Warehouse = ({ warehouse, onDelete }) => {
  const handleOnDelete = () => {
    onDelete(warehouse.id, warehouse.name);
  };
  return (
    <section className="warehouse__item">
      <div className="warehouse__section">
        <div className="warehouse__info">
          <div className="warehouse__name">
            <h4 className="warehouse__subtitle--mobile">Warehouse</h4>
            <div className="warehouse__text-link">
              <Link to={`/warehouses/${warehouse.id}`}>
                <p className="warehouse__detail warehouse__detail--link">
                  {warehouse.name}
                </p>
              </Link>
              <img
                className="warehouse__chevron-right"
                src={chevronRight}
                alt="chevron right"
              />
            </div>
          </div>
          <div className="warehouse__address">
            <h4 className="warehouse__subtitle--mobile">Address</h4>
            <p className="warehouse__detail">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
          </div>
          <div className="warehouse__contact-name">
            <h4 className="warehouse__subtitle--mobile">Contact Name</h4>
            <p className="warehouse__detail">{warehouse.contact.name}</p>
          </div>
          <div className="warehouse__contact-info">
            <h4 className="warehouse__subtitle--mobile">Contact Information</h4>
            <p className="warehouse__detail">{`${warehouse.contact.phone} ${warehouse.contact.email}`}</p>
          </div>
        </div>
        <div className="warehouse__actions">
          <img
            className="warehouse__delete"
            src={deleteIcon}
            alt="delete icon"
            onClick={handleOnDelete}
          />
          <Link to={`/warehouses/${warehouse.id}/edit`}>
            <img 
              className="warehouse__edit" 
              src={editIcon} 
              alt="edit icon" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Warehouse;
