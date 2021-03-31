import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Hyundai from "./components/Hyundai/Hyundai";
import Mahindra from "./components/Mahindra/Mahindra";
import Tata from "./components/Tata/Tata";
import TataDataTable from "./components/Tata/TataDataTable/TataDataTable";
import MahindraDataTable from "./components/Mahindra/MahindraDataTable/MahindraDataTable";
import HyundaiDataTable from "./components/Hyundai/HyundaiDataTable/HyundaiDataTable";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <br />
        <br />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route  path="/hyundai">
            <Hyundai /> <HyundaiDataTable />
          </Route>
          <Route path="/mahindra">
            <Mahindra /> <MahindraDataTable />
          </Route>
          <Route path="/tata">
            <Tata /> <TataDataTable />
          </Route>
          <Route path="/tataDataTable">
            <TataDataTable/>
          </Route>
          <Route path="/mahindraDataTable">
            <MahindraDataTable />
          </Route>
          <Route  path="/hyundaiDataTable">
            <HyundaiDataTable />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
