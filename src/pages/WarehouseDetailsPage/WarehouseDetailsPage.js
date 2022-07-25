import React from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";

const WarehouseDetailsPage = (props) => {
  return (
    <WarehouseDetails warehouseId={props.match.params.id}/>
  );
};

export default WarehouseDetailsPage;
