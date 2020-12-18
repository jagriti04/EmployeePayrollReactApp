import React from "react";
import Display from "./display/display";
import EmployeeService from "../../services/employee-service";

class PayrollHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchExpand: false,
      employeeArray: [],
      AllEmployeeArray: []
    };
    this.employeeService = new EmployeeService();
  }
  openSearch = () => {
    this.setState({ searchExpand: true });
  };
  componentDidMount() {
    this.getAllEmployee();
  }

  getAllEmployee = () => {
    this.employeeService
      .getEmployees()
      .then(data => {
        console.log("data after get ", data.data);
        this.setState({
          employeeArray: data.data,
          AllEmployeeArray: data.data
        });
      })
      .catch(err => {
        console.log("err after ", err);
      });
  };
  search = async event => {
    let search = event.target.value;

    await this.setState({ employeeArray: this.state.AllEmployeeArray });
    let empArray = this.state.employeeArray;
    if (search.trim().length > 0)
      empArray = empArray.filter(
        element => element.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );

    this.setState({ employeeArray: empArray });
  };

  render() {
    return (
      <div className="home">
        <header className="header-content header">
          <div className="logo-content">
            <img src="../assets/images/logo.png" />
            <div>
              <span className="emp-text">EMPLOYEE</span> <br />
              <span className="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>
        <div className="main-content">
          <div className="header-content">
            <div className="emp-details-text">
              Employee Details <div class="emp-count"> 10</div>
            </div>
            <a href="form" className="add-button">
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
