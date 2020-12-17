import React from "react";
import "./style.css";
import PayrollForm from "./components/payroll_form/payroll_form";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="">
              <PayrollForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
