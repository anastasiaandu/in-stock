import './WarehousesList.scss';
import WarehousesHeader from '../WarehousesHeader/WarehousesHeader';
import Warehouse from '../Warehouse/Warehouse';

const WarehousesList = ({ warehouses, onDelete, onCancel, onConfirmDelete, isModal }) => {
    return (
        <section className={!isModal ? 'warehouses' : 'warehouses warehouses--modal'}>
            <WarehousesHeader/>
            <ul className='warehouses__all'>
                {
                    warehouses.map((warehouse) => {
                        return <Warehouse 
                                    key={warehouse.id}
                                    warehouse={warehouse}
                                    onDelete={onDelete}
                                    onCancel={onCancel}
                                    onConfirmDelete={onConfirmDelete}
                                    isModal={isModal}
            />
                    })
                }
            </ul>
        </section>
    );
};

export default WarehousesList;