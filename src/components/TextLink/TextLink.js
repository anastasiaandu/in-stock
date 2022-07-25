import { Link } from 'react-router-dom';
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import "./TextLink.scss";

const TextLink = ({ id, inventoryItem }) => {
  return (
    <Link className="text-link" to={`/inventory/${id}`}>
      {/* This needs to be changed to a 'Link' in order to redirect somewhere else*/}
      <h3>{inventoryItem}</h3>
      <img
        className="text-link__chevron-right"
        src={chevronRight}
        alt="chevron right"
      />
    </Link>
  );
};

export default TextLink;
