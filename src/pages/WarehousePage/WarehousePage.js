import React, { Component } from 'react';
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";


class WarehousePage extends Component {

  state = {
            warehouses: []
          }


  render() {
    return (
      <div>
        <WarehouseForm />

      </div>
    );
  }
}

export default WarehousePage;
