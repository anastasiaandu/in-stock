import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehouseForm from "./components/WarehouseForm/WarehouseForm";
import WarehouseFormPage from "./pages/WarehouseFormPage/WarehouseFormPage";
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
          <Route path="/warehouses/:id/edit" component={WarehouseForm} />
          <Route path="/add" exact component={WarehouseFormPage} />
          <Route path="/inventory" exact component={InventoryPage} />
          <Route path="/inventory/:id" component={InventoryDetailsPage} />
        </Switch>
      </div>
      <PageFooter />
    </BrowserRouter>
  );
};

export default App;
