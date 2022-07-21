import './Warehouse.scss';
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const Warehouse = ({ warehouse }) => {
    return (
        <section className="warehouse__section">
            <div className="warehouse__info">
                <div className="warehouse__name-address">
                    <div className="warehouse__name">
                        <h4 className="warehouse__subtitle--mobile">Warehouse</h4>
                        <div className="warehouse__text-link">
                            <p className="warehouse__detail">{warehouse.name}</p>
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
                </div>
                <div className="warehouse__contact">
                    <div className="warehouse__contact-name">
                        <h4 className="warehouse__subtitle--mobile">Contact Name</h4>
                        <p className="warehouse__detail">{warehouse.contact.name}</p>
                    </div>
                    <div className="warehouse__contact-info">
                        <h4 className="warehouse__subtitle--mobile">Contact Information</h4>
                        <p className="warehouse__detail">{`${warehouse.contact.phone} ${warehouse.contact.email}`}</p>
                    </div>
                </div>
            </div>
            <div className="warehouse__actions"> 
                <img
                    className="warehouse__delete"
                    src={deleteIcon}
                    alt="delete icon"
                />
                <img
                    className="warehouse__edit"
                    src={editIcon}
                    alt="edit icon"
                />
            </div>
        </section>
    );
};

export default Warehouse;