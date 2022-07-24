import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import WarehouseForm from "./components/WarehouseForm/WarehouseForm";
const App = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <div className="main-container">
        <Switch>
          <Route path="/" exact component={WarehousePage} />
          <Route
            path="/warehouses/:id"
            exact
            component={WarehouseDetailsPage}
          />
          <Route path="/warehouses/:id/edit" component={EditWarehousePage} />
          <Route
            path="/warehouses/add"
            component={(params) => <WarehouseForm {...params} />}
          />
          <Route path="/inventory" component={InventoryPage} />
        </Switch>
      </div>
      <PageFooter />
    </BrowserRouter>
  );
};

export default App;
