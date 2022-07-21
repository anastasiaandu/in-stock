import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import "./TextLink.scss";
const TextLink = ({ inventoryItem }) => {
  return (
    <a className="text-link" href="/">
      {/* This needs to be changed to a 'Link' in order to redirect somewhere else*/}
      <h3>{inventoryItem}</h3>
      <img
        className="text-link__chevron-right"
        src={chevronRight}
        alt="chevron right"
      />
    </a>
  );
};

export default TextLink;
