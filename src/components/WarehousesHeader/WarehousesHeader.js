import "./WarehousesHeader.scss";
import sortIcon from '../../assets/icons/sort-24px.svg';

const WarehousesHeader = () => {
  return (
    <section>
        <div className="warehouses__header">
            <h1>Warehouses</h1>
            <form className="warehouses__form">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    id="warehouses-search" 
                    className="warehouses__search"
                    name="warehousesSearch" 
                />
                <button className="warehouses__add-button">+ Add New Warehouse</button>
            </form>
        </div>
        <div className="warehouses__table-heads">
            <div className="warehouses__table-heads-left">
                <div className="warehouses__heading warehouses__heading--name">
                    <h4 className="warehouses__subtitle--mobile">Warehouse</h4>
                    <img
                        className="warehouses__sort-icon"
                        src={sortIcon}
                        alt="sort icon"
                    />
                </div>
                <div className="warehouses__heading warehouses__heading--address">
                    <h4 className="warehouses__subtitle--mobile">Address</h4>
                    <img
                        className="warehouses__sort-icon"
                        src={sortIcon}
                        alt="sort icon"
                    />
                </div>
                <div className="warehouses__heading warehouses__heading--contact-name">
                    <h4 className="warehouses__subtitle--mobile">Contact Name</h4>
                    <img
                        className="warehouses__sort-icon"
                        src={sortIcon}
                        alt="sort icon"
                    />
                </div>
                <div className="warehouses__heading warehouses__heading--contact-info">
                    <h4 className="warehouses__subtitle--mobile">Contact Information</h4>
                    <img
                        className="warehouses__sort-icon"
                        src={sortIcon}
                        alt="sort icon"
                    />
                </div>
            </div>
            <div className="warehouses__actions">
                <h4 className="warehouses__subtitle--mobile">Actions</h4>
            </div>
        </div>
    </section>
  );
};

export default WarehousesHeader;