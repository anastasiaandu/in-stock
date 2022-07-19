import { NavLink } from 'react-router-dom';
import './PageHeader.scss';
import logoImage from '../../assets/logos/InStock-Logo.svg'

const PageHeader = () => {
    return (
        <header className='header'>
            <img src={logoImage} alt='in-stock logo' className='header__logo'/>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li>
                        <NavLink
                            to='/'
                            exact
                            className='header__link-warehouses'
                            activeClassName='header__link--active'
                        >
                            Warehouses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            className='header__link-inventory'
                            // activeClassName='header__link--active'
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
