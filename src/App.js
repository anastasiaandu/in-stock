import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import WarehousePage from "./pages/WarehousePage/WarehousePage";
//import InventoryPage from "./pages/InventoryPage";
function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact component={WarehousePage} />
        <Route path="/warehouses/:id" component={WarehousePage} />
        <Route path="/warehouses/:id/edit" component={WarehousePage} />
        <Route path="/warehouses/add" component={WarehousePage} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
