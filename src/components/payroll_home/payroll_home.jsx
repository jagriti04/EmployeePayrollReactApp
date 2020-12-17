import React from "react";
import Display from "./display/display";

class PayrollHome extends React.Component {
  render() {
    return (
      <div className="home">
        <header class="header-content header">
          <div class="logo-content">
            <img src="../assets/images/logo.png" />
            <div>
              <span class="emp-text">EMPLOYEE</span> <br />
              <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>
        <div class="main-content">
          <div class="header-content">
            <div class="emp-details-text">
              Employee Details <div class="emp-count"> 10</div>
            </div>
            <a href="payroll_form.html" class="add-button">
              <img src="../assets/icons/add-24px.svg" /> Add User
            </a>
          </div>

          <div class="table-main">
            <Display employeeArray={this.state.employeeArray} />
          </div>
        </div>
      </div>
    );
  }
}

export default PayrollHome;
