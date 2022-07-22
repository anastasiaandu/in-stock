import "./WarehousesList.scss";
import WarehousesHeader from "../WarehousesHeader/WarehousesHeader";
import Warehouse from "../Warehouse/Warehouse";

const WarehousesList = ({ warehouses, onDelete }) => {
  return (
    <section className="warehouses">
      <WarehousesHeader />
      <ul className="warehouses__all">
        {warehouses.map((warehouse) => {
          return (
            <Warehouse
              key={warehouse.id}
              warehouse={warehouse}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default WarehousesList;
