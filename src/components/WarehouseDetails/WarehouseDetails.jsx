import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  return (
    <article className="warehouse-details">
      <div className="warehouse-details__header">
        <div className="warehouse-details__header--left">
          <button className="warehouse-details__back-button">
            <img src={arrowBack} alt="Button to go back" />
          </button>
          <h1>Washington</h1>
        </div>
        <button className="warehouse-details__edit-button">
          <img
            className="warehouse-details__edit-button--icon"
            src={editIcon}
            alt="Edit button"
          />
        </button>
      </div>
      <section className="warehouse-info">
        <div className="warehouse-info__address">
          <h4>Warehouse address:</h4>
          <p2>33 Pearl Street SW,</p2>
          <p2>Washington, USA</p2>
        </div>
        <div className="warehouse-info__bottom-section">
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
        </div>
      </section>
    </article>
  );
};

export default WarehouseDetails;
