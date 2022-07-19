import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage";
//import InventoryPage from "./pages/InventoryPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={WarehousePage} />
        <Route path="/warehouses/:id" component={WarehousePage} />
        <Route path="/warehouses/:id/edit" component={WarehousePage} />
        <Route path="/warehouses/add" component={WarehousePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
