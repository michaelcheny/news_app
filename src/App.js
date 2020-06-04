import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./containers/DashboardPage";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Router>
          <Switch>
            {/* <h1>Hello World</h1> */}
            <Route path="/" exact component={DashboardPage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
