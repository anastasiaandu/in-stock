import { NavLink, Link, useLocation } from "react-router-dom";
import "./PageHeader.scss";
import logoImage from "../../assets/logos/InStock-Logo.svg";

const PageHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <header className="header">
      <Link to="/">
        <img src={logoImage} alt="in-stock logo" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <NavLink
              to="/"
              exact
              className={`header__link-warehouses ${
                splitLocation[1] === "warehouses" ? "header__link--active" : ""
              }`}
              activeClassName="header__link--active"
            >
              Warehouses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className={`header__link-inventory ${
                splitLocation[1] === "inventory" ? "header__link--active" : ""
              }`}
              activeClassName="header__link--active"
            >
              Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
