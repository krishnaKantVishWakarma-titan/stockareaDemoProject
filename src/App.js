import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './screens/Index';
import WarehouseDetails from './screens/WarehouseDetails';

const App = () => {
  return <>

    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/warehouseDetails">
          <WarehouseDetails />
        </Route>
      </Switch>
    </BrowserRouter>

  </>
}

export default App;