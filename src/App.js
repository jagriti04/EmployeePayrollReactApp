import React from "react";
import "./style.css";
import PayrollForm from "./components/payroll_form/payroll_form";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PayrollForm />
      </div>
    );
  }
}
