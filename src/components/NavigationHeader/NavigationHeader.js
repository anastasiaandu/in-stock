import { useHistory, Link } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./NavigationHeader.scss";

const NavigationHeader = ({ title, showEditButton, selectedId, type }) => {
  const history = useHistory();

  return (
    <div className="navigation-header">
      <div className="navigation-header--left">
        <button className="navigation-header__back-button">
          <img
            src={arrowBack}
            alt="Button to go back"
            onClick={history.goBack}
          />
        </button>
        <h1>{title}</h1>
      </div>
      {showEditButton && (
        <Link
          to={`/${
            type === "warehouse" ? "warehouses" : "inventory"
          }/${selectedId}/edit`}
        >
          <button className="navigation-header__edit-button">
            <img
              className="navigation-header__edit-button--icon"
              src={editIcon}
              alt="Edit button"
            />
            <p className="navigation-header__edit-button--text">Edit</p>
          </button>
        </Link>
      )}
    </div>
  );
};

export default NavigationHeader;
