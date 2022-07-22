import React, { Component } from 'react';
import axios from 'axios';
import './WarehousePage.scss';
// import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import WarehousesList from '../../components/WarehousesList/WarehousesList';


class WarehousePage extends Component {

  state = {
            warehouses: [],
            isError: false
          }

  //function to update page
  updatePage = () => {
    axios
        .get(`http://localhost:8080/warehouses`) 
        .then((response) => {
            this.setState({
              warehouses: response.data
            })
        })
        .catch(() => {
            this.setState({
                iisError: true
            });
        });
  }

  componentDidMount() {
    this.updatePage();
  }

  render() {
    if(this.state.warehouses.length === 0) {
      return;
    } 

    return (
      <main>
        {/* <WarehouseForm /> */}
        <WarehousesList warehouses={this.state.warehouses}/>
      </main>
    );
  }
}

export default WarehousePage;
