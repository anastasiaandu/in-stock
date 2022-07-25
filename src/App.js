import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoriesDetailsPage from "./pages/InventoriesDetailsPage/InventoriesDetailsPage";
import WarehouseFormPage from "./pages/WarehouseFormPage/WarehouseFormPage";
import InventoryFormPage from "./pages/InventoryFormPage/InventoryFormPage";
const App = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <div className="main-container">
        <Switch>
          <Route path="/" exact component={WarehousePage} />
          <Route
            path="/warehouses/add"
            exact
            render={(params) => <WarehouseFormPage status="add" {...params} />}
          />
          <Route
            path="/warehouses/:id"
            exact
            component={WarehouseDetailsPage}
          />
          <Route
            path="/warehouses/:id/edit"
            render={(params) => <WarehouseFormPage status="edit" {...params} />}
          />
          <Route path="/inventory" exact component={InventoryPage} />
          <Route
            path="/inventory/add"
            exact
            render={(params) => <InventoryFormPage status="add" {...params} />}
          />

          <Route path="/inventory/:id" exact component={InventoriesDetailsPage} />
          <Route
            path="/inventory/:id/edit"
            render={(params) => <InventoryFormPage status="edit" {...params} />}
          />
        </Switch>
      </div>
      <PageFooter />
    </BrowserRouter>
  );
};

export default App;
